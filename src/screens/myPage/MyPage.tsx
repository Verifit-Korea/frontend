import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import Layout from "./layout.tsx";

// @ts-ignore
import Icon from 'react-native-vector-icons/dist/Ionicons'
import Profile from '../../assets/images/icons/profile.svg'
import AlertMenu from '../../assets/images/icons/alertMenu.svg'
import Certification from '../../assets/images/icons/certification.svg'
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/AppNavigatior.tsx";

type Props = NativeStackScreenProps<RootStackParamList, 'MyPage'>;

const MyPage = ({navigation}: Props) => {
    return (
        <Layout>

            {/** 프로필 **/}
            <TouchableOpacity onPress={() => {}} id={'profile'} className={'flex-row items-center justify-between px-10 pt-10'}>
                <View className={'flex-row space-x-10 items-center'}>
                    <View className={'border-white p-2 bg-mainColor-blue rounded-full '}>
                        <Icon name="person-sharp" size={42} color="#DCFF00"/>
                    </View>
                    <Text className={'text-white text-[20px] font-bold'}>
                        닉네임
                    </Text>
                </View>
                <Text>
                    <Icon name="chevron-forward" size={20} color="#FFFFFF"/>
                </Text>
            </TouchableOpacity>

            {/** 랭킹 포인트 **/}
            <FlatList
                id={'ranking'}
                className={'mx-auto pt-7'}
                horizontal={true}
                data={[
                    {key: '랭킹', value: '3rd'},
                    {key: '일일 포인트', value: '50p'},
                    {key: '누적 포인트', value: '300p'},
                ]}
                renderItem={({item}) => (
                    <View className={'flex m-6'}>
                        <Text className={'text-white text-center text-[15px]'}>{item.key}</Text>
                        <Text className={'text-txt-01 text-center text-[20px] pt-5'}>{item.value}</Text>
                    </View>
                )}
            />


            {/** 메뉴 리스트 **/}

            <View id={'menu'} className={'px-10 flex space-y-10 pt-14'}>
                <TouchableOpacity
                    onPress={() => {}}
                    className={'flex-row justify-between items-end w-full'}>
                    <View className={'flex-row items-end space-x-2'}>
                        <Profile width={25}/>
                        <Text className={'text-white text-[20px]'}>내 정보</Text>
                    </View>
                    <Icon name="chevron-forward" size={25} color="#FFFFFF"/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    className={'flex-row justify-between items-end w-full'}>
                    <View className={'flex-row items-end space-x-2'}>
                        <Certification width={25}/>
                        <Text className={'text-white text-[20px]'}>인증내역</Text>
                    </View>
                    <Icon name="chevron-forward" size={25} color="#FFFFFF"/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Setting')
                    }}
                    className={'flex-row justify-between items-end w-full'}>
                    <View className={'flex-row items-end space-x-2'}>
                        <AlertMenu width={25}/>
                        <Text className={'text-white text-[20px]'}>알림 설정</Text>
                    </View>
                    <Icon name="chevron-forward" size={25} color="#FFFFFF"/>
                </TouchableOpacity>
            </View>


        </Layout>
    );
};

export default MyPage;
