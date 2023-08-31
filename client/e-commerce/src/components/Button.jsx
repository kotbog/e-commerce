const Button = (props) => {
    const {text, disabled} = props;
    return <button className={'block text-white py-2 px-8 rounded my-2' + (disabled ? ' bg-gray-600' : ' bg-red-500')} {...props}>
        {text}
    </button>
}
export default Button;