import React from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';

import MainHeader from '../../components/UI/headers/MainHeader.tsx';

type RootLayoutProps = {
  headerTitle?: string;
  children: React.ReactNode;
};

const Layout = ({children, headerTitle}: RootLayoutProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <MainHeader
        title={headerTitle || '포인트'}
        TextClassName="text-[20px] font-bold text-black"
      />
      <ScrollView
        style={styles.scrollView}
        contentInsetAdjustmentBehavior="automatic">
        <View>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#DCFF00',
  },
  scrollView: {
    backgroundColor: '#DCFF00',
  },
});

export default Layout;
