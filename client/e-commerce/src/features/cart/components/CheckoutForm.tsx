import Input from "../../../components/Input";
import Button from "../../../components/Button";
import {useFormik} from "formik";
import {signUp} from "../../authentication/context/SignupActions";
import {dispatch} from "jest-circus/build/state";
import {sendOrderData} from "../context/CartActions";
import {useDispatch, useSelector} from "react-redux";
import {IRootState, User} from "../../../data/types";
import {state} from "sucrase/dist/types/parser/traverser/base";
import {CartItems} from "../data/types";
import Cart from "../../../pages/Cart";
import {useNavigate} from "react-router-dom";


type ValuesType = {
    email: string | "",
    first_name: string | "",
    last_name: string | "",
    telephone: string | "",
    address: string | ""

};
type ErrorsType = {
    email?: string | "",
    first_name?: string | "",
    last_name?: string | "",
    telephone?: string | "",
    address?: string | ""
};

const validate = (values : ValuesType) => {
    const errors : ErrorsType = {};
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
    if(!values.address) {
        errors.address = 'Required field';
    }
    if(!values.telephone) {
        errors.telephone = 'Required field';
    }
    return errors;
}
const CheckoutForm = () => {
    const cartItems = useSelector<IRootState, CartItems>(state => state.Cart.items);
    const dispatch = useDispatch();
    const loading = useSelector<IRootState, boolean>(state => state.Cart.isLoading);
    const error = useSelector<IRootState>(state => state.Cart.errorMessage);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email:'',
            first_name: '',
            last_name: '',
            address: '',
            telephone: '',
        },
        validate,
        onSubmit: values => {
            dispatch(sendOrderData({
                user: {
                    first_name: values.first_name,
                    last_name: values.last_name,
                    email: values.email,
                    address: values.address,
                    telephone: values.telephone
                }, cartItems
            }));
            if(!loading && !error ) {
               navigate('/cart/success')
            }
        }
    });
    return <div className={'basis-1/2'}>
    <form className={'flex flex-col w-80 m-auto'} onSubmit={formik.handleSubmit}>
        {formik.errors.first_name && formik.touched.first_name ? <div className={'text-sm text-red-500'}>{formik.errors.first_name}</div> : null}
        <label className={'font-semibold flex flex-col'}>First name
            <Input
                placeholder={'Enter your name...'}
                name={'first_name'}
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                inValid={formik.errors.first_name && formik.touched.first_name}
            />
        </label>
        {formik.errors.last_name && formik.touched.last_name ? <div className={'text-sm text-red-500'}>{formik.errors.last_name}</div> : null}
        <label className={'font-semibold flex flex-col'}>Last name
            <Input
                placeholder={'Enter your last name...'}
                name={'last_name'}
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                inValid={formik.errors.last_name && formik.touched.last_name}
                className={'w-full'}
            />
        </label>
        {formik.errors.address && formik.touched.address ? <div className={'text-sm text-red-500'}>{formik.errors.address}</div> : null}
        <label className={'font-semibold flex flex-col'}>Address
            <Input
                placeholder={'Enter your address...'}
                name={'address'}
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                inValid={formik.errors.address && formik.touched.address}
                className={'w-full'}
            />
        </label>
        {formik.errors.telephone && formik.touched.telephone ? <div className={'text-sm text-red-500'}>{formik.errors.telephone}</div> : null}
        <label className={'font-semibold flex flex-col'}>Phone number
            <Input
                placeholder={'Enter your telephone...'}
                name={'telephone'}
                value={formik.values.telephone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                inValid={formik.errors.telephone && formik.touched.telephone}
                className={'w-full'}
            />
        </label>
        {formik.errors.email && formik.touched.email ? <div className={'text-sm text-red-500'}>{formik.errors.email}</div> : null}
        <label className={'font-semibold flex flex-col'}>E-mail
            <Input
                placeholder={'Enter your email...'}
                name={'email'}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                inValid={formik.errors.email && formik.touched.email}
                className={'w-full'}
            />
        </label>

        <Button type={'submit'} value={'Confirm'} styles={'bg-red-600 text-white'}/>
    </form>
    </div>
}

export default CheckoutForm;