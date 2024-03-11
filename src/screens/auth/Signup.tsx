import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MainInput from '../../components/UI/MainInput.tsx';
import GradientButton from '../../components/UI/GradientButton.tsx';
import CheckBox from '@react-native-community/checkbox';
import Layout from './layout.tsx';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SignUp: React.FC = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAllAgreed, setIsAllAgreed] = useState(false);
  const [serviceAgreed, setServiceAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [marketingAgreed, setMarketingAgreed] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

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

  const validateEmail = (Email: string) => {
    // 이메일 유효성 검사 로직
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(Email);
  };

  const handleSignUp = async () => {
    if (
      id !== '' &&
      email !== '' &&
      password !== '' &&
      password.length >= 8 &&
      serviceAgreed &&
      privacyAgreed
    ) {
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
        Alert.alert('회원가입 실패', '서버 문제 발생');
      }
    } else if (!serviceAgreed || !privacyAgreed) {
      Alert.alert(
        '약정 체크',
        '선택 항목을 제외한 항목들은 모두 체크해야 합니다.',
      );
      return;
    } else {
      if (!validateEmail(email)) {
        Alert.alert('유효하지 않은 이메일', '올바른 이메일 주소를 입력하세요.');
        return;
      } else if (id === '' && email === '' && password === '') {
        Alert.alert('필수 입력 항목 공백', '필수 항목을 입력해 주세요');
        return;
      } else {
        if (password.length < 8) {
          Alert.alert('패스워드 오류', '패스워드 값은 8자 이상이어야 합니다.');
          return;
        } else {
          Alert.alert('입력 오류', '모든 항목을 올바르게 입력해주세요.');
          return;
        }
      }
    }
  };

  return (
    <Layout headerTitle={'회원가입'}>
      <View className="mx-auto w-full px-5 pt-5">
        <TouchableOpacity onPress={handleAllAgreementToggle}>
          <View className="flex-row">
            <CheckBox
              value={isAllAgreed}
              onValueChange={handleAllAgreementToggle}
              tintColors={{true: 'yellow', false: 'white'}}
            />
            <Text className="text-white text-[23.5px] font-bold">
              전체 약관 동의
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center mt-3.5 px-5">
        <TouchableOpacity
          onPress={() => handleIndividualAgreementToggle('service')}>
          <View className="flex-row">
            <CheckBox
              value={serviceAgreed}
              tintColors={{true: 'yellow', false: 'white'}}
              onValueChange={() => handleIndividualAgreementToggle('service')}
            />
            <Text className="text-white text-[19px]">서비스 이용약관</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center mt-3.5 px-5">
        <TouchableOpacity
          onPress={() => handleIndividualAgreementToggle('privacy')}>
          <View className="flex-row">
            <CheckBox
              value={privacyAgreed}
              tintColors={{true: 'yellow', false: 'white'}}
              onValueChange={() => handleIndividualAgreementToggle('privacy')}
            />
            <Text className="text-white text-[19px]">
              개인정보 수집 및 이용동의
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center mt-3.5 px-5">
        <TouchableOpacity
          onPress={() => handleIndividualAgreementToggle('marketing')}>
          <View className="flex-row">
            <CheckBox
              value={marketingAgreed}
              tintColors={{true: 'yellow', false: 'white'}}
              onValueChange={() => handleIndividualAgreementToggle('marketing')}
            />
            <Text className="text-white text-[19px]">
              [선택] 마케팅 수신 동의
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="h-20" />
      <View className={'mx-auto w-full px-10 pt-5'}>
        <Text className={'text-white pt-5 text-5 text-[20px]'}>아이디 *</Text>
        <MainInput
          inputClassName={
            'text-[20px] text-white w-full border-[#888686] border-b pb-1 pt-0 px-0'
          }
          value={id}
          onChange={setId}
          placeHolder={'이메일 입력'}
        />
        <Text className={'text-white pt-5 text-5 text-[20px]'}>이메일 *</Text>
        <MainInput
          inputClassName={
            'text-[20px] text-white w-full border-[#888686] border-b pb-1 pt-0 px-0'
          }
          value={email}
          onChange={setEmail}
          placeHolder={'이메일 입력'}
        />
        <Text className={'text-white pt-5 text-5 text-[20px]'}>비밀번호 *</Text>
        <View className="relative">
          <MainInput
            inputClassName={
              'text-[20px] text-white w-full border-[#888686] border-b pb-1 pt-0 px-0'
            }
            value={password}
            onChange={setPassword}
            placeHolder={'비밀번호 입력'}
            secureTextEntry={!isPasswordVisible} // 비밀번호 보이기 상태에 따라 secureTextEntry 적용
          />
          {/* 눈 모양 아이콘 */}
          <TouchableOpacity
            className="absolute top-0 right-0 bottom-0 px-3 flex items-center justify-center"
            onPress={togglePasswordVisibility}>
            <Icon
              name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View className={'mt-[50px]'}>
          <GradientButton
            TextClassName={'text-center text-[#0C0C0C] text-[20px] font-bold'}
            onPress={handleSignUp}
            title={'회원가입'}
          />
        </View>
      </View>
    </Layout>
  );
};

export default SignUp;
