const Input = (props) => {
    const {inValid} = props;
    return <input
        className={"py-2 px-2 border-2 rounded my-2 " + (inValid ? 'border-red-500' : 'border-gray-500')}
        {...props}
    />
}
export default Input;