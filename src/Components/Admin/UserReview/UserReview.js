import React,{ useState } from 'react';
import { useForm } from "react-hook-form";
import SideBar from '../SideBar/SideBar';

const UserReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = data =>{
        fetch('https://arcane-escarpment-26588.herokuapp.com/review', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(document => {
                console.log(document)
                alert('Your review placed successfully')
            })
        
    };


    return (
        <div className="row">
            <div className="col-md-4">
                <SideBar></SideBar>
            </div>
            <div className="col-md-8">
            <div style={{ height: "600px", backgroundColor: '#F4F7FC' }}>
            <div className="text-white  text-center py-5 mb-5">
                <h4 style={{color:"#476ea9"}}>Review</h4>
               
            </div>
           <div className="text-center">
           <form style={{height:"300px",width:"auto"}} onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-3" style={{height:"50px",width:'600px'}} required placeholder="Name" type="text" {...register("userName")} />
                <br/>
                <input className="mb-3" style={{height:"50px",width:'600px'}} placeholder="Address" {...register("address", { required: true })} />
                <br/>
                <input className="mb-3" style={{height:"150px",width:'600px'}} placeholder="Description" {...register("description", { required: true })} />
                <br/>
                <input className="btn btn-secondary" type="submit" />
            </form>
           </div>
        </div>
            </div>
        </div>
    );
};

export default UserReview;