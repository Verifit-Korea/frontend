import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Guide from "../../assets/images/icons/guide.svg";
import ToolTip from "../../components/UI/ToolTip.tsx";

type RootLayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: RootLayoutProps) => {

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 25, paddingHorizontal: 10 }}>
                <View style={{ width: 15 }}></View>
                <Text style={{ fontSize: 20, color: Colors.black, fontWeight: 'bold' }}>{'경매'}</Text>

                <ToolTip children={<Text>12</Text>} title={'as'}/>

            </View>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>{children}</View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});

export default Layout;
