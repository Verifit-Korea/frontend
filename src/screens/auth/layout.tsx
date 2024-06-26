import React, {ReactNode} from 'react';
import {Animated, SafeAreaView, View} from "react-native";
import MainHeader from "../../components/UI/headers/MainHeader.tsx";
import ScrollView = Animated.ScrollView;

type RootLayoutProps = {
    header?: boolean;
    headerTitle?: string;
    children: ReactNode;
    leftButton?: boolean;
};

const Layout = ({ header = true, children, headerTitle, leftButton }: RootLayoutProps ) => {
    return (
        <SafeAreaView className={'bg-black h-full w-full'}>
            {header && <MainHeader title={headerTitle || '로그인'} TextClassName={'text-[20px] font-bold'} leftIconOnClick={leftButton}/>}
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    {children}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Layout;
