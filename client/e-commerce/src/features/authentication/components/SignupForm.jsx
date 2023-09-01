import {useFormik} from "formik";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import {NavLink, redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signUpAction} from "../context/SignupActions";

const validate = values => {
    const errors = {};
    if(!values.email) {
        errors.email = 'Required field';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if(!values.first_name) {
        errors.first_name = 'Required field';
    }
    if(!values.last_name) {
        errors.last_name = 'Required field';
    }
    if(!values.password) {
        errors.password = 'Required field';
    } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/.test(values.password)) {
        errors.password = 'Incorrect password';
    }
    return errors;
}

const SignupForm = () => {

    const dispatch = useDispatch();

    const signupSuccess = useSelector(state => state.Signup.success);

    const formik = useFormik({
        initialValues: {
            email:'',
            password: '',
            first_name: '',
            last_name: ''
        },
        validate,
        onSubmit: values => {

            const{email, password, first_name, last_name} = values;

            dispatch(signUpAction(email, password, first_name, last_name));
            debugger
        }
    });

    return signupSuccess ? redirect('/') : <form onSubmit={formik.handleSubmit} className={'flex flex-col m-auto w-64'}>
        {formik.errors.email && formik.touched.email ? <div className={'text-sm text-red-500'}>{formik.errors.email}</div> : null}
        <Input
            placeholder={'Type your email'}
            name={'email'}
            type={'text'} value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inValid={formik.errors.email && formik.touched.email}
        />
        {formik.errors.first_name && formik.touched.first_name ? <div className={'text-sm text-red-500'}>{formik.errors.first_name}</div> : null}
        <Input
            placeholder={'Type your first name'}
            name={'first_name'}
            type={'text'} value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inValid={formik.errors.first_name && formik.touched.first_name}
        />
        {formik.errors.last_name && formik.touched.last_name ? <div className={'text-sm text-red-500'}>{formik.errors.last_name}</div> : null}
        <Input
            placeholder={'Type your second name'}
            name={'last_name'}
            type={'text'} value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inValid={formik.errors.last_name && formik.touched.last_name}
        />
        {formik.errors.password && formik.touched.password ? <div className={'text-sm text-red-500'}>{formik.errors.password}</div> : null}
        <Input placeholder={'Type your password'}
               name={'password'}
               type={'password'} value={formik.values.password}
               onBlur={formik.handleBlur}
               inValid={formik.errors.password && formik.touched.password}
               onChange={formik.handleChange}
        />
        <Button value={'Sign In'} type={'submit'} styles={'bg-red-500'}/>
        <div className={'text-sm mt-2 text-center'}>Already have an account? <NavLink to={'/login'} className={'underline'}>Log In</NavLink></div>
    </form>
}

export default SignupForm;