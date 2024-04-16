import React, {ReactNode} from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


type RootLayoutProps = {
  children: ReactNode;
  leftButton?: boolean;
  headerTitle?: string;
};

const Layout = ({children, leftButton}: RootLayoutProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        contentInsetAdjustmentBehavior="automatic">
        <LinearGradient
          colors={['#DCFF00', '#00A9FF']}
          style={styles.linearGradient}>
          {children}
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  linearGradient: {
    flex: 1,
  },
});

export default Layout;
