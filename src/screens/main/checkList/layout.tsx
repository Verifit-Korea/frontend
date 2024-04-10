import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MainHeader from "../../../components/UI/headers/MainHeader.tsx";
import BottomNavigation from "../../../navigation/BottomNavigation.tsx";

type RootLayoutProps = {
    headerTitle?: string;
    children: React.ReactNode;
};

const Layout = ({ children }: RootLayoutProps) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <MainHeader leftIconOnClick={true} title={'네거티브 체크'} TextClassName={'text-[20px] font-bold'}/>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                {children}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor : Colors.black,
        flex: 1,
    },

});

export default Layout;
