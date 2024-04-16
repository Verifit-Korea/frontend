import React from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';

import MainHeader from './header.tsx';

type RootLayoutProps = {
  headerTitle?: string;
  children: React.ReactNode;
  leftButton?: boolean;
};

const Layout = ({children, headerTitle, leftButton}: RootLayoutProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <MainHeader
        title={headerTitle || '포인트'}
        leftIconOnClick={leftButton}
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
