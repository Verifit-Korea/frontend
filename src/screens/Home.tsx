import React from 'react';
import MyPage from "./myPage/MyPage.tsx";
import Setting from "./myPage/Setting.tsx";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import SocialLoginPage from "./auth/SocialLoginPage.tsx";
import HomeIcon from '../assets/images/icons/homeIcon.svg'
import Rank from '../assets/images/icons/rank.svg'
import CertificationMenu from '../assets/images/icons/certificationMenu.svg'
import Auction from '../assets/images/icons/auction.svg'
import SettingIcon from '../assets/images/icons/settingIcon.svg'
const Home = () => {
    const Tab = createMaterialBottomTabNavigator();
    return (
            <Tab.Navigator
                activeColor="gray"
                inactiveColor="gray"
                initialRouteName="Feed"
                activeIndicatorStyle={{
                    backgroundColor: 'transparent',
                    position: 'absolute',
                }}
                barStyle={{
                    backgroundColor: 'transparent',
                    position: 'absolute',
            }}>
                {/*@ts-ignore*/}
                <Tab.Screen name="MyPage" component={MyPage} options={{
                    tabBarLabel: '홈',
                    tabBarIcon: ({ color }) => (
                        <HomeIcon width={42}/>
                    )
                }} />
                {/*@ts-ignore*/}
                <Tab.Screen name="랭킹" component={SocialLoginPage} options={{
                    tabBarLabel: '랭킹',
                    tabBarIcon: ({ color }) => (
                        <Rank width={42}/>
                    )
                }} />
                <Tab.Screen name="인증" component={Setting} options={{
                    tabBarLabel: '인증',
                    tabBarIcon: ({ color }) => (
                        <CertificationMenu width={42}/>
                    )
                }} />
                <Tab.Screen name="경매" component={Setting} options={{
                    tabBarLabel: '경매',
                    tabBarIcon: ({ color }) => (
                        <Auction width={42}/>
                    )
                }} />
                <Tab.Screen name="설정" component={Setting} options={{
                    tabBarLabel: '설정',
                    tabBarIcon: ({ color }) => (
                        <SettingIcon width={42}/>
                    )
                }} />
            </Tab.Navigator>
    );
};

export default Home;
