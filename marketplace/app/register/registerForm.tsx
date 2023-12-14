'use client'

import Input from '../components/inputs/Input'
import Heading from "../components/Heading";
import { register } from 'module';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import Button from '../components/Button';

const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {
        register, handleSubmit
    ,
    formState: {errors}
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""        }
    })
    return ( 
        <div>
        <Heading title="Sign Up Here"/>
        <hr  className="bg-slate-300 w-full h-px"/>
        <div className='my-4'><Input id='name' label='Name' disabled={isLoading} register={register}
        errors={errors} required
        /></div>
        
        <div className='my-4'><Input id='email' label='Email' disabled={isLoading} register={register}
        errors={errors} required
        /></div>
        
        <div className='my-4'><Input id='password' label='Password' disabled={isLoading} register={register}
        errors={errors} type='password' required
        /></div>
        
        <Button label={'Sign In'} onClick={()=>{}}/>
        </div>
     );
}
 
export default RegisterForm;