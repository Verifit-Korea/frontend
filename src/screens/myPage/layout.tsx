import React, {ReactNode} from 'react';
import {Animated, SafeAreaView, View} from "react-native";
import MainHeader from "../../components/UI/MainHeader.tsx";
import ScrollView = Animated.ScrollView;

type RootLayoutProps = {
    headerTitle?: string;
    children: ReactNode;
    leftButton?: boolean;
};

const Layout = ({ children,headerTitle,leftButton }: RootLayoutProps) => {
    return (
        <SafeAreaView className={'bg-black h-full w-full'}>
            <MainHeader leftIconOnClick={leftButton} title={headerTitle || '마이 페이지'} TextClassName={'text-[20px] font-bold'}/>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    {children}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Layout;
