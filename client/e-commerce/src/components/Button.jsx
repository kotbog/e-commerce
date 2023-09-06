const Button = (props) => {
    const {value, styles} = props;
    return <button className={`block font-medium px-7 text-sm py-3 rounded my-2 ${styles}`} {...props}>
        {value}
    </button>
}
export default Button;