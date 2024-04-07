import React, {useState} from 'react';
import {Text, View} from "react-native";
import Layout from "./layout.tsx";
import LinearGradient from "react-native-linear-gradient";
import Plus from '../../assets/images/icons/plus.svg'
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/Ionicons'
import MaskedView from "@react-native-masked-view/masked-view";
import MainInput from "../../components/UI/MainInput.tsx";
import GradientButton from "../../components/UI/GradientButton.tsx";
import useAuthStore from "../../store/authStore.ts";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/AppNavigatior.tsx";
type Props = NativeStackScreenProps<RootStackParamList, 'MyData'>;

const MyData = ({navigation}: Props) => {
    const authStore = useAuthStore.getState();
    const [userDate, setUserData] = useState({
        nickName: authStore.nickname,
        email: authStore.email,
    })
    return (
        <Layout leftButton={true} headerTitle={'내 정보'}>
            <View className={'mx-auto pt-14'}>
                <MaskedView
                    style={{height: 105, width: 100}}
                    maskElement={
                        <View className={'mx-auto'}>
                            <Icon name="person" size={100} color="#FFFFFF"/>
                        </View>
                    }>
                    <LinearGradient
                        colors={['#DCFF00', '#00A9FF']}
                        style={{flex: 1}}
                    />
                </MaskedView>
                <View className={'absolute bottom-0 right-0'}>
                    <Plus height={27} width={27}/>
                </View>
            </View>


            <Text className={'text-white text-center text-[20px] font-bold pt-1'}>닉네임</Text>

            <View className={'px-10 pt-14'}>
                <MainInput onChangeText={(text) => {
                    setUserData(prevState => ({
                        ...prevState,
                        nickName: text
                    }))}}
                   inputClassName={'text-[20px] text-white border-white border-b-[0.5px]'}
                   value={userDate.nickName}
                   placeHolder={'닉네임'}
                />

                <MainInput onChangeText={(text) => {
                    setUserData(prevState => ({
                        ...prevState,
                        email: text
                    }))}}
                   inputClassName={'text-[20px] text-white border-white border-b-[0.5px] pt-10'}
                   value={userDate.email}
                   placeHolder={'이메일'}/>

                <View className={'mt-[280px]'}>
                <GradientButton TextClassName={'text-center text-[#0C0C0C] text-[20px] font-bold'} title={'변경 완료'} onPress={() => {
                    authStore.setEmail(userDate.email)
                    authStore.setNickname(userDate.nickName)

                    navigation.navigate('MyPage')
                }}/>
                </View>
            </View>
        </Layout>
    );
};

export default MyData;
