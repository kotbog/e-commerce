const Button = (props) => {
    const {text} = props;
    return <button className={'block bg-red-500 text-white py-2 px-8 rounded my-2'} {...props}>
        {text}
    </button>
}
export default Button;