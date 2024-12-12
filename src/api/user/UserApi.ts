import { AxiosResponse } from "axios";
import Api from "../api";
import { User } from "../../types/user";

class UserApi extends Api {
    static signup(username: string, password: string, confirm_password: string): Promise<AxiosResponse> {
        return this.post("/api/signup", { username, password, repassword: confirm_password });
    }

    static authenticate(): Promise<User> {
        return this.getData("/api/me");
    }

    static login(username: string, password: string): Promise<AxiosResponse> {
        return this.post("/api/login", {username, password});
    }
}

export default UserApi;