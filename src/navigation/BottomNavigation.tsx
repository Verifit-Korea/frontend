import React from 'react';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import HomeIcon from '../assets/images/icons/homeIcon.svg'
import Rank from '../assets/images/icons/rank.svg'
import CertificationMenu from '../assets/images/icons/certificationMenu.svg'
import Auction from '../assets/images/icons/auction.svg'
import SettingIcon from '../assets/images/icons/settingIcon.svg'
import MainPage from "../screens/main/MainPage.tsx";
import Setting from "../screens/myPage/Setting.tsx";
import MyPage from "../screens/myPage/MyPage.tsx";
import RankingScreen from "../screens/point/PointRanking.tsx";
import NegativeCheck from "../screens/main/checkList/NegativeCheck.tsx";
import AuctionPage from "../screens/auction/AuctionPage.tsx";
const BottomNavigation = () => {
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
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                position: 'absolute',
                marginBottom : 20,
                borderRadius : 20
            }}>
            {/*@ts-ignore*/}
            <Tab.Screen name="MainPage" component={MainPage} options={{
                tabBarLabel: '홈',
                tabBarIcon: ({ color }) => (
                    <HomeIcon width={42}/>
                )
            }} />
            {/*@ts-ignore*/}
            <Tab.Screen name="랭킹" component={RankingScreen} options={{
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
            <Tab.Screen name="경매" component={AuctionPage} options={{
                tabBarLabel: '경매',
                tabBarIcon: ({ color }) => (
                    <Auction width={42}/>
                )
            }} />
            {/*@ts-ignore*/}
            <Tab.Screen name="설정" component={MyPage} options={{
                tabBarLabel: '설정',
                tabBarIcon: ({ color }) => (
                    <SettingIcon width={42}/>
                )
            }} />
        </Tab.Navigator>
    );
};

export default BottomNavigation;
