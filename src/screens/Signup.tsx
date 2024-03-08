import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MainButton from '../components/UI/MainButton.tsx';
import MainInput from '../components/UI/MainInput.tsx';
import GradientButton from '../components/UI/GradientButton.tsx';
import axios from 'axios';
import MainHeader from '../components/UI/MainHeader.tsx';
import CheckBox from '@react-native-community/checkbox';


const SignUp: React.FC = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAllAgreed, setIsAllAgreed] = useState(false);
  const [serviceAgreed, setServiceAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [marketingAgreed, setMarketingAgreed] = useState(false);

  const handleAllAgreementToggle = () => {
    setIsAllAgreed(!isAllAgreed);
    setServiceAgreed(!isAllAgreed);
    setPrivacyAgreed(!isAllAgreed);
    setMarketingAgreed(!isAllAgreed);
  };

  const handleIndividualAgreementToggle = (type: string) => {
    switch (type) {
      case 'service':
        setServiceAgreed(!serviceAgreed);
        break;
      case 'privacy':
        setPrivacyAgreed(!privacyAgreed);
        break;
      case 'marketing':
        setMarketingAgreed(!marketingAgreed);
        break;
      default:
        break;
    }
  };

  const handleSignUp = async () => {
    if (id !== '' && email !== '' && password !== '' && password.length >= 8) {
      try {
        // const response = await axios.post('/register', {
        //   id,
        //   email,
        //   password,
        // });
        // if (response.status === 200) {
        //   console.log('성공');
        // } else {
        //   console.log('실패');
        // }
      } catch (error) {
        // 서버 에러 처리
        console.error('회원가입 요청 에러:', error);
        Alert.alert('회원가입 실패', '서버와의 통신 중 문제 발생');
      }
    } else {
      if (password.length < 8) {
        Alert.alert('패스워드 오류', '패스워드 값은 8자 이상이어야 합니다.');
      } else {
        Alert.alert('입력 오류', '모든 항목을 올바르게 입력해주세요.');
      }
    }
  };

  return (
    <SafeAreaView className={'bg-black h-full w-full'}>
      <MainHeader title={'회원가입'} TextClassName={'text-[20px] font-bold'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View className="mx-auto w-full px-10 pt-5">
          <TouchableOpacity onPress={handleAllAgreementToggle}>
            <View
              className={`w-6 h-6 rounded border-2 border-black ${
                isAllAgreed ? 'bg-yellow-300' : ''
              }`}
            />
          </TouchableOpacity>
          <Text className="text-white text-[23.5px] font-bold">
            전체 약관 동의
          </Text>
        </View>
        <View className="flex-row items-center mt-7 ml-6">
          <TouchableOpacity
            onPress={() => handleIndividualAgreementToggle('service')}>
            <View
              className={`w-6 h-6 rounded border-2 border-black ${
                serviceAgreed ? 'bg-yellow-300' : ''
              }`}
            />
          </TouchableOpacity>
          <Text className="text-white text-[19px]">서비스 이용약관</Text>
        </View>
        <View className="flex-row items-center mt-3.5 px-5">
          <TouchableOpacity
            onPress={() => handleIndividualAgreementToggle('privacy')}>
            <View
              className={`w-6 h-6 rounded border-2 border-black ${
                privacyAgreed ? 'bg-yellow-300' : ''
              }`}
            />
          </TouchableOpacity>
          <Text className="text-white text-[19px]">
            개인정보 수집 및 이용동의
          </Text>
        </View>
        <View className="flex-row items-center mt-3.5 px-5">
          <TouchableOpacity
            onPress={() => handleIndividualAgreementToggle('marketing')}>
            <View
              className={`w-6 h-6 rounded border-2 border-black ${
                marketingAgreed ? 'bg-yellow-300' : ''
              }`}
            />
          </TouchableOpacity>
          <Text className="text-white text-[19px]">
            [선택] 마케팅 수신 동의
          </Text>
        </View>
        <View className="h-20" />
        <View>
          <Text className={'text-white text-[20px]'}>아이디 *</Text>
          <MainInput
            inputClassName={
              'text-[20px] text-white w-full border-[#888686] border-b pb-1 pt-0 px-0'
            }
            value={id}
            onChange={setId}
            placeHolder={'이메일 입력'}
          />
          <Text className={'text-white text-[20px]'}>이메일 *</Text>
          <MainInput
            inputClassName={
              'text-[20px] text-white w-full border-[#888686] border-b pb-1 pt-0 px-0'
            }
            value={email}
            onChange={setEmail}
            placeHolder={'이메일 입력'}
          />
          <Text className={'text-white pt-8 text-5 text-[20px]'}>
            비밀번호 *
          </Text>
          <MainInput
            inputClassName={
              'text-[20px] text-white w-full border-[#888686] border-b pb-1 pt-0 px-0'
            }
            value={password}
            onChange={setPassword}
            placeHolder={'비밀번호 입력'}
            secureTextEntry={true}
          />
          <GradientButton
            TextClassName={'text-center text-[#0C0C0C] text-[20px] font-bold'}
            onPress={handleSignUp}
            title={'회원가입'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
