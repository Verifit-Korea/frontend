/* eslint-disable react-native/no-inline-styles */
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
import GradientButton from '../../components/UI/buttons/GradientButton.tsx';
import CheckBox from '@react-native-community/checkbox';
import Layout from './layout.tsx';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigatior.tsx';
import SignupLoading from './SignupLoading';
import CustomAlert from '../../components/UI/CustomAlert.tsx';

type Props = NativeStackScreenProps<RootStackParamList, 'SignupPage'>;

const SignUp: React.FC<Props> = ({navigation}: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAllAgreed, setIsAllAgreed] = useState(false);
  const [serviceAgreed, setServiceAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [marketingAgreed, setMarketingAgreed] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const goAlert = (message: string) => {
    setAlertMessage(message);
    setAlertVisible(true);
  };

  // const goAlert = (title: string, message: string) =>
  //   Alert.alert(title, message, [], {cancelable: true});

  const passwordVisibility = () => {
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

  const handleNameChange = (text: string) => {
    setName(text);
    if (name.length < 2 || name.length > 10) {
      setNameError('닉네임은 2자 이상, 10자 이하이어야 합니다.');
    } else if (!/^[a-zA-Z0-9._-]+$/.test(name.toLowerCase())) {
      setNameError('닉네임은 영문 대소문자, 숫자, _, ., - 만 사용 가능합니다.');
    } else if (
      name.toLowerCase().includes('verifit') ||
      name.includes('베리핏')
    ) {
      setNameError('닉네임은 "verifit" 또는 "베리핏"을 포함할 수 없습니다.');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError('이메일을 올바르게 작성해 주세요');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    const passwordRegex =
      /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&()-_+=]{10,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        '패스워드는 10자 이상, 영문, 숫자, 특수문자 중 2개 이상 조합을 만족해야 합니다',
      );
    } else {
      setPasswordError('');
    }
  };
  const isSetDisabled = !!nameError || !!emailError || !!passwordError;

  const handleSignUp = async () => {
    if (name === '' || email === '' || password === '') {
      return goAlert('필수 항목은 모두 입력하셔야 합니다.');
    }
    if (isSetDisabled) {
      return goAlert('입력이 잘못되었습니다');
    }
    if (!serviceAgreed || !privacyAgreed) {
      return goAlert('필수 약관 동의를 해주세요');
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('LoginPage');
    }, 2000);

    // try {
    //   const response = await axios.post('/register', {
    //     nickname: name,
    //     email: email,
    //     password: password,
    //   });
    //   if (response.status === 200) {
    //     console.log('성공');
    //     setLoading(true);
    //     setTimeout(() => {
    //       setLoading(false);
    //       navigation.navigate('LoginPage');
    //     }, 2000);
    //   } else {
    //     console.log('실패');
    //   }
    // } catch (error) {
    //   // 서버 에러 처리
    //   console.error('회원가입 요청 에러:', error);
    //   return goAlert('회원가입 실패', '서버 문제 발생');
    // }
  };

  return (
    <Layout headerTitle={'회원가입'} leftButton={true}>
      <SignupLoading visible={loading} />
      <CustomAlert
        message={alertMessage}
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
      />
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
            <Text className="text-white text-[19px]">서비스 이용약관 *</Text>
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
              개인정보 수집 및 이용동의 *
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
        <Text className={'text-white pt-3 text-5 text-[20px]'}>닉네임 *</Text>
        <MainInput
          inputClassName={
            'text-[20px] text-white w-full border-[#888686] border-b pb-1 pt-0 px-0'
          }
          value={name}
          onChangeText={handleNameChange}
          placeHolder={'닉네임 입력'}
        />
        <Text style={{color: 'red'}}>{nameError}</Text>
        {/* <Text className={"text-red pt-1.5 text-4 text-[5px]"}>{nameError}</Text> */}
        <Text className={'text-white pt-5 text-5 text-[20px]'}>이메일 *</Text>
        <MainInput
          inputClassName={
            'text-[20px] text-white w-full border-[#888686] border-b pb-1 pt-0 px-0'
          }
          value={email}
          onChangeText={handleEmailChange}
          placeHolder={'이메일 입력'}
        />
        <Text style={{color: 'red'}}>{emailError}</Text>
        <Text className={'text-white pt-5 text-5 text-[20px]'}>비밀번호 *</Text>
        <View className="relative">
          <MainInput
            inputClassName={
              'text-[20px] text-white w-full border-[#888686] border-b pb-1 pt-0 px-0'
            }
            value={password}
            onChangeText={handlePasswordChange}
            placeHolder={'비밀번호 입력'}
            secureTextEntry={!isPasswordVisible}
          />
          <Text style={{color: 'red'}}>{passwordError}</Text>
          <TouchableOpacity
            className={
              'absolute top-0 right-0 px-3 flex items-center justify-center'
            }
            onPress={passwordVisibility}>
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
            disabled={isSetDisabled}
            title={'회원가입'}
          />
        </View>
      </View>
    </Layout>
  );
};

export default SignUp;
