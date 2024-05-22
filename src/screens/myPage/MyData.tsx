import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import Layout from "./layout.tsx";
import LinearGradient from "react-native-linear-gradient";
import Plus from '../../assets/images/icons/plus.svg'
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/Ionicons'
import MaskedView from "@react-native-masked-view/masked-view";
import MainInput from "../../components/UI/MainInput.tsx";
import GradientButton from "../../components/UI/buttons/GradientButton.tsx";
import useAuthStore from "../../store/authStore.ts";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/AppNavigatior.tsx";
import MainHeader from "../../components/UI/headers/MainHeader.tsx";
import {Colors} from "react-native/Libraries/NewAppScreen";
type Props = NativeStackScreenProps<RootStackParamList, 'MyData'>;

const MyData = ({navigation}: Props) => {
    const authStore = useAuthStore.getState();
    const [userDate, setUserData] = useState({
        password : '',
        nickName: authStore.nickname,
        email: authStore.email,
    })
    return (
        <View style={styles.main_container}>
            <MainHeader leftIconOnClick={true} title={'내정보'} TextClassName={'text-[20px] font-bold'}/>
            <View style={styles.nickname_box}>
                <MaskedView
                    style={{height: 105, width: 100}}
                    maskElement={
                        <Icon name="person" size={100} color="#FFFFFF"/>
                    }>
                    <LinearGradient
                        colors={['#DCFF00', '#00A9FF']}
                        style={{flex: 1}}
                    />
                </MaskedView>
                <View style={{
                    position : 'absolute',
                    bottom : 0,
                    right : 0
                }}>
                    <Plus height={27} width={27}/>
                </View>
            </View>
            <Text style={styles.main_text} >{userDate.nickName}</Text>

            <View style={{width : '100%'}}>
                <MainInput onChangeText={(text) => {
                    setUserData(prevState => ({
                        ...prevState,
                        nickName: text
                    }))}}
                   containerStyle={{
                       marginHorizontal : 30,
                       marginTop :25
                   }}
                   style={{
                       fontSize : 20,
                       color : Colors.white,
                   }}
                   value={userDate.nickName}
                   placeHolder={'닉네임'}
                />

                <MainInput onChangeText={(text) => {
                    setUserData(prevState => ({
                        ...prevState,
                        email: text
                    }))}}
                   containerStyle={{
                       marginHorizontal : 30,
                       marginTop :25
                   }}
                   style={{
                       fontSize : 20,
                       color : Colors.white,
                   }}
                   value={userDate.email}
                   placeHolder={'이메일'}/>

                <MainInput onChangeText={(text) => {
                    setUserData(prevState => ({
                        ...prevState,
                        password: text
                    }))}}
                   containerStyle={{
                       marginHorizontal : 30,
                       marginTop :25
                   }}
                   style={{
                       fontSize : 20,
                       color : Colors.white,
                   }}
                   value={userDate.password}
                   secureTextEntry={true}
                   placeHolder={'비밀번호'}/>
            </View>

            <View style={{
                width : '100%',
                position : 'absolute',
                bottom : 50
            }}>
                <GradientButton TextClassName={'text-center text-[#0C0C0C] text-[20px] font-bold'} title={'변경 완료'} onPress={() => {
                    authStore.setEmail(userDate.email)
                    authStore.setNickname(userDate.nickName)
                    navigation.navigate('MyPage')
                }}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main_container : {
        flex : 1,
        backgroundColor : Colors.black,
        alignItems : "center",
    },
    nickname_box : {
        alignItems : "center",
        width : 100,
        paddingTop : 30
    },
    main_text : {
        color : Colors.white,
        fontSize : 20,
        fontWeight : "bold",
    }
})

export default MyData;
