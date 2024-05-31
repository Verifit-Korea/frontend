import React, {ReactNode} from 'react';
import {Animated, SafeAreaView, View, StyleSheet} from 'react-native';
import MainHeader from './header';
import ScrollView = Animated.ScrollView;

type RootLayoutProps = {
  header?: boolean;
  headerTitle?: string;
  children: ReactNode;
  leftButton?: boolean; 
};

const Layout: React.FC<RootLayoutProps> = ({
  header = true,
  children,
  headerTitle,
  leftButton,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {header && (
        <MainHeader
          title={headerTitle || '인증 가이드라인'}
          headerStyle={styles.headerText}
          leftIconOnClick={leftButton}
        />
      )}
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.childrenContainer}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  childrenContainer: {
    flex: 1,
  },
});

export default Layout;
