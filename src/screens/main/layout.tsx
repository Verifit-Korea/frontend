import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import MainHeader from '../../components/UI/headers/MainHeader.tsx';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';

type RootLayoutProps = {
    headerTitle?: string;
    children: React.ReactNode;
};

const Layout = ({ children, headerTitle }: RootLayoutProps) => {
    return (
        <SafeAreaView style={styles.safeArea}>
                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    colors={['#00A9FF', '#DCFF00']}
                    style={styles.gradient}
                >
                    <View>{children}</View>
                </LinearGradient>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    gradient: {
        flex: 1,
    },
});

export default Layout;
