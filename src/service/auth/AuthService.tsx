import SInfo from 'react-native-sensitive-info';
import axios from "axios";
import useAuthStore, {IAuthStore} from "../../store/authStore.ts";
import AuthStore from "../../store/authStore.ts";
import {AuthInterface} from "../../types/Auth.ts";

export class AuthService {
    static async login(email: string, password: string): Promise<void> {
        try {
            let token;
            // 테스트 환경에서는 임의의 JWT를 생성하여 사용
            if (process.env.NODE_ENV === 'development') {
                if(email !== 'testUser'){
                    throw new Error('로그인 정보 불일치')
                }
                if(password !== 'password'){
                    throw new Error('로그인 정보 불일치')
                }
                const header = {
                    alg: 'HS256',
                    typ: 'JWT',
                };
                const payload = {
                    username: 'testUser',
                    role: 'user',
                };
                const secretKey = 'testSecretKey';
                token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RVc2VyIiwicm9sZSI6InVzZXIifQ.4PYY9oLCqxihpKVx_pCk7C7Fd7xT61mkwMyX246qs2c'
            } else {
                // 실제 서버와 통신하여 JWT 획득
                const response = await axios.post<{ token: string }>('/login', {
                    email,
                    password,
                });
                if(response.status !== 200){
                    throw new Error('로그인 정보 불일치')
                }
                token = response.data.token;
            }
            await SInfo.setItem('JWT_TOKEN', token, {});
        } catch (error : any) {
            console.log('error : ',error)
            throw new Error(error ? error.message : "Login failed");
        }
    }

    static async getUserInfo(token: string){
        try{
            if (process.env.NODE_ENV === 'development') {
                const userData  :AuthInterface = {
                    email : "testUser",
                    nickname: "verifitTest",
                    loginType: 'verifit',
                    alert : {
                        certification : false,
                        auction : false,
                        event:false,
                        notice:false
                    },
                    rank : 1,
                    todayPoint : 10,
                    totalPoint : 30,
                    seasonPoint : 550,
                    relayPhoto : 7
                }
                const userStore = useAuthStore.getState();
                userStore.set(userData)
                console.log('aslkjadskl' , userStore.email)
            }
            else {
                const res = await axios.post(`userGetUrl?token=${token}`)
            }
        }catch (error : any) {
            throw new Error(error ? error.message : "get userData failed");
        }
    }
    static async updateUserInfo(email : string, nickname:string){
        const userStore = useAuthStore.getState()
        userStore.setEmail(email)
        userStore.setNickname(nickname)
        return true
    }
    static async getAuthToken(): Promise<string | null> {
        try {
            return await SInfo.getItem('JWT_TOKEN', {});
        } catch (error) {
            return null;
        }
    }
}
