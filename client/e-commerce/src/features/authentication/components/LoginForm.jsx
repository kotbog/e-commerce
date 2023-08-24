import Input from "../../../components/Input";
import {useFormik} from "formik";
import Button from "../../../components/Button";
import {NavLink} from "react-router-dom";
import {useState} from "react";


const validate = values => {
    const errors = {};
    if(!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
}

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email:'',
            password: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    console.log(formik.values)

    return <form onSubmit={formik.handleSubmit} className={'flex flex-col m-auto w-64'}>
        {formik.errors.email && formik.touched.email ? <div className={'text-sm text-red-500'}>{formik.errors.email}</div> : null}
        <Input
            placeholder={'Type your email'}
            name={'email'}
            type={'text'} value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inValid={formik.errors.email && formik.touched.email}
        />
        <Input placeholder={'Type your password'}
               name={'password'}
               type={'password'} value={formik.values.password}
               onChange={formik.handleChange}
        />
        <Button text={'Sign In'} type={'submit'}/>
        <div className={'text-sm mt-2 text-center'}>Doesn't have an account? <NavLink to={'/signup'} className={'underline'}>Sign Up</NavLink></div>

    </form>
}

export default LoginForm;