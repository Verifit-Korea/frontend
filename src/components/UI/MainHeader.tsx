import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from "react-native"
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/Ionicons'
import {useNavigation} from "@react-navigation/native";
interface Props{
    title: string,
    headerClassName? :string
    TextClassName? : string
}
const MainHeader:FC<Props> = ({title, headerClassName,TextClassName}) => {

    const navigation = useNavigation()

    return (
        <View className={'flex-row items-center w-full py-[25px]'}>
                <TouchableOpacity className={`${headerClassName} absolute left-3 z-10 border-white`} onPress={() => {
                    if(navigation.canGoBack()) {
                        console.log('qweqwe')
                        navigation.goBack()}
                    if(!navigation.canGoBack()) {
                        console.log('마지막')}
                }}>
                    <Text className={`${TextClassName} text-white text-center w-full`}><Icon name="chevron-back-outline" size={20} color="#FFFFFF" /></Text>
                </TouchableOpacity>

            <Text className={`${TextClassName} text-white text-center w-full`}>{title}</Text>
        </View>
    );
};

export default MainHeader;
