import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SideBar from '../SideBar/SideBar';


const AddServices = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL,setImageURL]=useState(null)
    const onSubmit = data =>{
        const eventData ={
            serviceName: data.name,
            price:data.price,
            details:data.details,
            imageURL:imageURL,
        };
        const url =`https://arcane-escarpment-26588.herokuapp.com/addService`;
         console.log(eventData)
         fetch(url,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
         })
         .then(res=>{
             
            console.log('server',res)
            alert('Service Added successfully')
        })
        };

    


    const handelImageUpload=event=>{
        console.log(event.target.files[0]);
        const imageData=new FormData();
        imageData.set('key','9c41fec4c704740a0c23135b3efa4a21')
        imageData.append('image',event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="row " >
            <div className="col-md-4">
                <SideBar></SideBar>
            </div>
            <div className="col-md-8 mt-5 p-5">
                <h2 className="mb-3">Add Services: </h2>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex">
                <div>
                <h5>Name:</h5>
                <input  {...register("name")} />
                <br />
                <h5>Price:</h5>
                <input {...register("price", { required: true })} />
                <br/>
                <h5>Details:</h5>
                <input {...register("details", { required: true })} />
                <br/>
                </div>
                 <div class="m-5 form-group">
                     
                    <label for="exampleFormControlFile1">Upload Img</label>
                    <br/>
                    <input type="file" onChange={handelImageUpload} class="form-control-file" id="exampleFormControlFile1" />
                </div>
                </div>
                <input className="btn btn-success mt-5" type="submit" />
            </form>
            </div>
        </div>
    );
};

export default AddServices;