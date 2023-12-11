import axios from "axios";

export async function Dataservices(data)
{
    try {
      const response = await axios.post("http://127.0.0.1:8070/signup",data);
      return response;
    } catch (error) {
        console.log(error);
    }
}

export async function loginservices(data)
{
    try {
      const response = await axios.post("http://127.0.0.1:8070/login",data);
      return response;
    } catch (error) {
        console.log(error);
    }
}