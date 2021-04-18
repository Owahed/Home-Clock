import React from 'react';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div style={{ height: "600px", backgroundColor: '#F6F6F6' }}>
            <div className="text-white  text-center py-5 mb-5">
                <h5 style={{color:"#476ea9"}}>CONTACT US</h5>
                <h2 >Always Connect with us</h2>
            </div>
           <div className="text-center">
           <form style={{height:"300px",width:"auto"}} onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-3" style={{height:"50px",width:'600px'}} required placeholder="Email Address*" type="email" {...register("example")} />
                <br/>
                <input className="mb-3" style={{height:"50px",width:'600px'}} placeholder="Subject" {...register("exampleRequired", { required: true })} />
                <br/>
                <input className="mb-3" style={{height:"150px",width:'600px'}} placeholder="Your Massage" {...register("exampleRequired", { required: true })} />
                <br/>
                <input className="btn btn-secondary" type="submit" />
            </form>
           </div>
        </div>
    );
};

export default Contact;