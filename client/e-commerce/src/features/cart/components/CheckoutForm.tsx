import Input from "../../../components/Input";
import Button from "../../../components/Button";

const CheckoutForm = () => {
    return <div>
    <form className={'flex flex-col w-80 m-auto'}>
        <label htmlFor='first_name' className={'font-semibold'}>First name</label>
        <Input placeholder={'Enter your name...'} name={'first_name'}/>
        <label htmlFor={'last_name'} className={'font-semibold'}>Last name</label>
        <Input placeholder={'Enter your last name...'} name={'last_name'}/>
        <label htmlFor={'address'} className={'font-semibold'}>Address</label>
        <Input placeholder={'Enter your address...'} name={'address'}/>
        <label htmlFor={'telephone'} className={'font-semibold'}>Phone number</label>
        <Input placeholder={'Enter your telephone...'} name={'telephone'}/>
        <label htmlFor={'email'} className={'font-semibold'}>E-mail</label>
        <Input placeholder={'Enter your email...'} name={'email'}/>
        <Button type={'submit'} value={'Confirm'} styles={'bg-red-600 text-white'}/>
    </form>
    </div>
}

export default CheckoutForm;