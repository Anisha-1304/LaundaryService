const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8070;

const schemaData = mongoose.Schema({
    customerId: Number,
    customerName: String,
    shirt: Number,
    pant: Number,
    garments: Number
}, { timestamps: true });

const signupSchema = mongoose.Schema({
    Name: String,
    Email: String,
    Password: String
}, { timestamps: true });

const userModel = mongoose.model("OrderDetail", schemaData);
const signupModel = mongoose.model("Signup", signupSchema); // Corrected the model name

mongoose.connect("mongodb://127.0.0.1:27017/crudoperation")
    .then(() => {
        console.log("connected to db");
        app.listen(PORT, () => console.log("server is running"));
    })
    .catch((err) => console.log(err));

app.get("/", async (req, res) => {
    const data = await userModel.find({});
    res.json({ success: true, data: data });
});

app.post("/signup", async (request, response) => {
    const data = request.body;
    try {
        const signup = new signupModel(data); // Use the correct model name
        await signup.save();
        response.send("data inserted anisha");
    } catch (error) {
        console.log(error);
    }
});
app.post("/login", async (request, response) => {
    const data = request.body;

    try {
        const user = await signupModel.findOne({ Email: data.Email }); 
        // Use the correct model name
        if (user) {
            if (data.Password == user.Password) {
                response.send("OK");
            } else {
                response.send({data:user, msg:"not valid"});
            }
        } else {
            response.send("invalid");
        }
    } catch (error) {
        console.log(error);
        response.send("error");
    }
});


app.post("/create", async (req, res) => {
    console.log(req.body);
    const data = new userModel(req.body);
    await data.save();
    res.send({ success: true, message: "data save successfully", data: data });
});

app.put("/update", async (req, res) => {
    console.log(req.body);
    const { _id, ...rest } = req.body;

    console.log(rest);
    const data = await userModel.updateOne({ _id: _id }, rest);
    res.send({ success: true, message: "data update successfully", data: data });
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await userModel.deleteOne({ _id: id });
    res.send({ success: true, message: "data deleted successfully", data: data });
});
