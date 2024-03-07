import SInfo from 'react-native-sensitive-info';
import axios from "axios";

export class AuthService {
    static async login(email: string, password: string): Promise<void> {
        try {
            let token;
            // 테스트 환경에서는 임의의 JWT를 생성하여 사용
            if (process.env.NODE_ENV === 'development') {
                console.log(email !== 'testUser')
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
            console.log(error)
            throw new Error(error ? error.message : "Login failed");
        }
    }

    static async getAuthToken(): Promise<string | null> {
        try {
            return await SInfo.getItem('JWT_TOKEN', {});
        } catch (error) {
            return null;
        }
    }
}
