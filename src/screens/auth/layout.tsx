import React, {ReactNode} from 'react';
import {Animated, SafeAreaView, View} from "react-native";
import MainHeader from "../../components/UI/MainHeader.tsx";
import ScrollView = Animated.ScrollView;
import BottomSheet from "../../components/UI/BottomSheet.tsx";

type RootLayoutProps = {
    header?: boolean;
    headerTitle?: string;
    children: ReactNode;
};

const Layout = ({ header = true, children,headerTitle }: RootLayoutProps ) => {
    return (
        <SafeAreaView className={'bg-black h-full w-full'}>
            {header && <MainHeader title={headerTitle || '로그인'} TextClassName={'text-[20px] font-bold'}/>}
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    {children}
                </View>
            </ScrollView>

        </SafeAreaView>
    );
};

export default Layout;
