import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import Layout from "./layout.tsx";
import MainSwitch from "../../components/UI/MainSwitch.tsx";
import {Switch} from "react-native-switch";
import useAuthStore from "../../store/authStore.ts";
const Setting = () => {
    const authStore = useAuthStore.getState();

    console.log(authStore.alert)
    const [allAgree , setAllAgree] = useState(
        authStore.alert.certification &&
        authStore.alert.auction &&
        authStore.alert.event &&
        authStore.alert.notice
    );
    const [alertAgree , setAlertAgree] = useState({
        certification : authStore.alert.certification,
        Auction :  authStore.alert.auction,
        event :  authStore.alert.event,
        notice :  authStore.alert.notice,
    })

    const handleAllAgree = () => {
        if(allAgree){
            authStore.setCertification(false)
            authStore.setAuction(false)
            authStore.setEvent(false)
            authStore.setNotice(false)
            return setAlertAgree( {
                certification: false,
                Auction : false,
                event : false,
                notice : false
            })
        }
        authStore.setCertification(true)
        authStore.setAuction(true)
        authStore.setEvent(true)
        authStore.setNotice(true)
        setAlertAgree( {
            certification: true,
            Auction : true,
            event : true,
            notice : true
        })
    }

    const checkIsAllAgree = (updatedState : any) => {
        if (updatedState.event && updatedState.Auction && updatedState.notice && updatedState.certification) {
            setAllAgree(true);
        } else {
            setAllAgree(false);
        }
    };

    return (
        <Layout leftButton={true} headerTitle={'알림 설정'}>
            <View className={'px-10'}>
                <Text className={'text-white text-right text-[12px]'}>전체선택</Text>

                <View className={'flex-row justify-end pt-2 pb-10'}>
                    <MainSwitch value={allAgree} onChange={() => {
                        setAllAgree(!allAgree)
                        handleAllAgree()
                    }}/>
                </View>

                <View className={'flex-row justify-between'}>
                    <Text className={'text-white font-bold text-[20px]'}>인증알림</Text>
                    <MainSwitch
                        value={alertAgree.certification}
                        onChange={() => {
                            setAlertAgree(prevState => {
                                const updatedState = {
                                    ...prevState,
                                    certification: !prevState.certification
                                };
                                authStore.setCertification(!prevState.certification)
                                checkIsAllAgree(updatedState);
                                return updatedState;
                            });
                        }}
                    />
                </View>
                <Text className={'text-white text-[12px]'}>인증내용 추천, 네거티브 인증, 인증 마감 시간 알림</Text>

                <View className={'flex-row justify-between pt-12'}>
                    <Text className={'text-white font-bold text-[20px]'}>경매</Text>
                    <MainSwitch
                        value={alertAgree.Auction}
                        onChange={() => {
                            setAlertAgree(prevState => {
                                const updatedState = {
                                    ...prevState,
                                    Auction: !prevState.Auction
                                };
                                authStore.setAuction(!prevState.Auction)
                                checkIsAllAgree(updatedState);
                                return updatedState;
                            });
                        }}
                    />
                </View>
                <Text className={'text-white text-[12px]'}>경매 상품 등록, 제시된 최고가 공지</Text>

                <View className={'flex-row justify-between pt-12'}>
                    <Text className={'text-white font-bold text-[20px]'}>혜택</Text>
                    <MainSwitch
                        value={alertAgree.event}
                        onChange={() => {
                            setAlertAgree(prevState => {
                                const updatedState = {
                                    ...prevState,
                                    event: !prevState.event
                                };
                                authStore.setEvent(!prevState.event)
                                checkIsAllAgree(updatedState);
                                return updatedState;
                            });
                        }}
                    />
                </View>
                <Text className={'text-white text-[12px]'}>이벤트, 다양한 혜택</Text>

                <View className={'flex-row justify-between pt-12'}>
                    <Text className={'text-white font-bold text-[20px]'}>공지/문의</Text>
                    <MainSwitch
                        value={alertAgree.notice}
                        onChange={() => {
                            setAlertAgree(prevState => {
                                const updatedState = {
                                    ...prevState,
                                    notice: !prevState.notice
                                };
                                authStore.setNotice(!prevState.notice)
                                checkIsAllAgree(updatedState);
                                return updatedState;
                            });
                        }}
                    />
                </View>
                <Text className={'text-white text-[12px]'}>공지사항, 1:1 문의 답변 등록 안내</Text>


            </View>

        </Layout>
    );
};

export default Setting;
