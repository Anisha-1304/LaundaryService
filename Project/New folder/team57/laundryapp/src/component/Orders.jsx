

import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"
import Formtable from './Formtable.jsx';
import './Orders.css'

axios.defaults.baseURL= "http://localhost:8070/";

function Orders() {
  const [addSection, setAddSection] = useState(false)
  const [editSection, setEditSection] = useState(false)
  const [formDataEdit, setFormDataEdit] = useState({
    customerId: 0,
      customerName: "",
      shirt: 0,
      pant: 0,
      garments: 0,
      _id:""
  })
  const [formData, setFormData] = useState(
    {
      customerId: 0,
      customerName: "",
      shirt: 0,
      pant: 0,
      garments: 0
    }
  )
  const [dataList,setDataList]=useState([])

  const handleOnChange = (e) => {
    const { value, name } = e.target
    setFormData(
      (preve) => {
        return {
          ...preve,
          [name]: value
        }
      }
    )


  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const data=await axios.post("/create",formData)
    console.log(data);
    if (data.data.success) {
      setAddSection(false)
      alert(data.data.message)
      getFetchData()
    }
  }

  const getFetchData = async()=>{
    const data = await axios.get("/")
    console.log(data)
    if(data.data.success){
      setDataList(data.data.data)
    }
  }

  useEffect(()=>{
    getFetchData()
  },[])

  const handleDelete = async(id)=>{
    const data = await axios.delete("/delete/"+id)
    if(data.data.success){
      getFetchData()
      alert(data.data.message)
    }
  }

  const handleUpdate = async(e)=>{
    e.preventDefault()
    const data = await axios.put("/update",formDataEdit)
    if(data.data.success){
      getFetchData()
      alert(data.data.message)
      setEditSection(false)
    }
  }
  const handleEditOnChange = async(e)=>{
    const {value,name} = e.target
    setFormDataEdit((preve)=>{
      return{
        ...preve,
        [name] : value
      }
    })
  }

  const handleEdit = (el)=>{
    setFormDataEdit(el)
    setEditSection(true)
  }

  console.log(dataList)

  return (
    <>
      <div className="container">
        <button className="btn btn-add" onClick={() => setAddSection(true)}>Add</button>

        {
          addSection && (
            <Formtable
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleclose={()=>setAddSection(false)}
            rest={formData}
            />
          )
        }
        {
          editSection &&(
            <Formtable
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleclose={()=>setEditSection(false)}
            rest={formDataEdit}
            />
          )
        }

<div className='tableContainer'>
        <table>
          <thead>
            <tr>
              <th>customerId</th>
              <th>customerName</th>
              <th>shirt</th>
              <th>pant</th>
              <th>garments</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            { dataList[0]?(
              dataList.map((el)=>{
                return(
                  <tr>
                    <td>{el.customerId}</td>
                    <td>{el.customerName}</td>
                    <td>{el.shirt}</td>
                    <td>{el.pant}</td>
                    <td>{el.garments}</td>
                    <td>
                      <button className='btn' onClick={()=>handleEdit(el)}>Edit</button>
                      <button className='btn' onClick={()=>handleDelete(el._id)}>Delete</button>
                    </td>
                  </tr>
                )
              }))
              :(
                <p>No Data</p>
              )
            }
          </tbody>
        </table>
      </div>




      </div>
    </>
  );

}
export default Orders;
