import withAuth from "../features/authentication/components/withAuth";
import {FC} from "react";
import {useDispatch} from "react-redux";
import {logOut} from "../features/authentication/context/LoginActions";




const Account : FC= () => {
    const dispatch = useDispatch();
    return <div>
        <h1>Account</h1>
        <button onClick={() => {dispatch(logOut())}}>Log out</button>
    </div>
}
export default withAuth(Account);