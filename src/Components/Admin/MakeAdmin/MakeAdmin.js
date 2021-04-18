import React from 'react';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://arcane-escarpment-26588.herokuapp.com/adminEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(document => {
                console.log(document)
                alert('Email placed successfully')
            })
        console.log(data)
    
    };



    return (
        <div className="row">
            <div className="col-md-4">
                <SideBar></SideBar>
            </div>
            <div className="col-md-8 p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="m-2">Email:</h4>
                    <div className="d-flex mt-3">
                    <input class="form-control w-25 m-2" placeholder="Email" type="email" {...register("email", { required: true })} />
                    <input class="btn btn-success m-2" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;