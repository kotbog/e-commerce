import withAuth from "../features/authentication/components/withAuth";
import {FC} from "react";



const Account : FC= () => {
    return <div>
        <h1>Account</h1>
    </div>
}
export default withAuth(Account);