import React, {useState} from 'react';
import {
  Alert,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import MainInput from '../../components/UI/MainInput.tsx';
import {AuthService} from '../../service/auth/AuthService.tsx';
import Layout from './layout.tsx';
import GradientButton from '../../components/UI/buttons/GradientButton.tsx';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigatior.tsx';
type Props = NativeStackScreenProps<RootStackParamList, 'LoginPage'>;

export const goAlert = (title: string, message: string) =>
    Alert.alert(title, message, [], {cancelable: true});

const LoginPage = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await AuthService.login(email, password);

      const token = await AuthService.getAuthToken();
      if(token){
        await AuthService.getUserInfo(token);
        return navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }
      return goAlert('로그인 실패', `로그인 정보 불일치`);

    } catch (e) {
      return goAlert('로그인 실패', `${e}`);
    }
  };

  return (
    <Layout>
      <View className={'mx-auto w-full px-10 pt-5'}>
        <Text className={'text-white text-[20px]'}>이메일 *</Text>
        <MainInput
          inputClassName={
            'text-[20px] text-white w-full border-[#888686] border-b pb-1 pt-0 px-0'
          }
          value={email}
          onChangeText={setEmail}
          placeHolder={'이메일 입력'}
        />
        <Text className={'text-white pt-8 text-5 text-[20px]'}>비밀번호 *</Text>
        <MainInput
          inputClassName={
            'text-[20px] text-white w-full border-[#888686] border-b pb-1 pt-0 px-0'
          }
          value={password}
          onChangeText={setPassword}
          placeHolder={'비밀번호 입력'}
          secureTextEntry={true}
        />

        <View className={'flex-row justify-center space-x-2 pt-10'}>
          <TouchableOpacity onPress={() => navigation.navigate('SignupPage')}>
            <Text className={'text-white text-[15px] border-b border-white'}>
              회원가입
            </Text>
          </TouchableOpacity>
          <Text className={'text-white text-[15px]'}>/</Text>
          <Text className={'text-white text-[15px] border-b border-white'}>
            계정찾기
          </Text>
        </View>


          <View className={'mt-[400px]'}>
          <GradientButton
            TextClassName={'text-center text-[#0C0C0C] text-[20px] font-bold'}
            onPress={async () => {
              if (!(email && password)) {
                return goAlert('로그인 실패', '님 뭐 입력 안한듯?');
              }
              await handleLogin();
            }}
            title={'로그인'}
          />
        </View>
      </View>
    </Layout>
  );
};

export default LoginPage;
