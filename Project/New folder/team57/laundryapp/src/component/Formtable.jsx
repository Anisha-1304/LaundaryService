import React from 'react'
import "../App.css"


const Formtable=({handleSubmit,handleOnChange,handleclose,rest})=>{
    return(
        <div className="addContainer">
              <form onSubmit={handleSubmit}>
                
                <label htmlFor="cid">CId : </label>
                <input type="number" id="cid" name="customerId" onChange={handleOnChange} value={rest.customerId} />

                <label htmlFor="cname">Name : </label>
                <input type="text" id="cname" name="customerName" onChange={handleOnChange} value={rest.customerName} />

                <label htmlFor="shirt">Shirt : </label>
                <input type="number" id="shirt" name="shirt" onChange={handleOnChange} value={rest.shirt}/>

                <label htmlFor="pant">Pant : </label>
                <input type="number" id="pant" name="pant" onChange={handleOnChange} value={rest.pant}/>

                <label htmlFor="garments">Garments : </label>
                <input type="number" id="garments" name="garments" onChange={handleOnChange} value={rest.garments}/>

                <button className="btn">Submit</button>
              </form>
            </div>
    )
}
export default Formtable