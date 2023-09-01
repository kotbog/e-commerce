const Button = (props) => {
    const {value, styles} = props;
    return <button className={`block font-medium text-white p-2 rounded my-2 ${styles}`} {...props}>
        {value}
    </button>
}
export default Button;