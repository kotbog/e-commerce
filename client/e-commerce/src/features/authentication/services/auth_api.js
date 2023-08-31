
import instance from "../../../lib/axios";


export const reqSignUp = async (email, password, first_name, last_name) => {
    return await instance.post('/signup',
        {
            email, password, first_name, last_name
        }
    );

}

export const reqLogIn = async (email, password) => {
    return await instance.post('/login',
        {
            email, password
        }
    )
}


export const reqAuth = async () => {
    return await instance.post('/');
}