import React, {useState} from 'react';
import {Alert, Text, TextInput, View} from "react-native";
import MainButton from "../components/UI/MainButton.tsx";
import MainInput from "../components/UI/MainInput.tsx";
import {AuthService} from "../service/auth/AuthService.tsx";

const LoginPage = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const goAlert = (title : string,message : string) =>
        Alert.alert(
            title,
            message,
            [],
            { cancelable: true }
        );

    const handleLogin = async () => {
        try {
            await AuthService.login(email,password);

            const token = await AuthService.getAuthToken()
            return  goAlert('로그인 성공' , `token  : ${token}`)
        }catch (e){
            return  goAlert('로그인 실패' , `${e}`)
        }
    }

    return (
        <View className={'pt-5'}>
            <Text className={'font-bold text-2xl text-center'}>로그인 페이지</Text>
            <View className={'justify-center mx-auto w-full px-10'}>
                <MainInput inputClassName={'w-full border-b'} value={email} onChange={setEmail} placeHolder={'email'}/>
                <MainInput inputClassName={'w-full border-b'} value={password} onChange={setPassword} placeHolder={'password'} secureTextEntry={true}/>
                <MainButton buttonClassName={'border pt-2  pb-3 rounded mt-2'} TextClassName={'text-center'} onPress={async () => {
                    if(!(email && password)){
                       return  goAlert('로그인 실패' , '님 뭐 입력 안한듯?')
                    }
                    await handleLogin();
                }} title={'로그인'} />
            </View>
        </View>
    );
};

export default LoginPage;
