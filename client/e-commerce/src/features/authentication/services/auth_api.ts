import instance from "../../../lib/axios";
import {LogInResponse, SignUpResponse, VerifyUserResponse} from "../data/types";


export const reqSignUp = async (email : string, password : string, first_name : string, last_name : string) => {
    return await instance.post<SignUpResponse>('/signup',
        {
            email, password, first_name, last_name
        }
    );

}



export const reqLogIn = async (email : string, password : string) => {
    return await instance.post<LogInResponse>('/login',
        {
            email, password
        });
}


export const reqAuth = async () => {
    return await instance.post<VerifyUserResponse>('/');
}