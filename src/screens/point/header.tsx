import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title: string;
  headerStyle?: any;
  textStyle?: any;
  leftIconOnClick?: boolean;
}

const MainHeader: FC<Props> = ({
  title,
  headerStyle,
  textStyle,
  leftIconOnClick,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {leftIconOnClick && (
        <TouchableOpacity
          style={[styles.iconButton, headerStyle]}
          onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={20} color="#000000" />
        </TouchableOpacity>
      )}
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingTop: 25,
    paddingBottom: 25,
    position: 'relative',
  },
  iconButton: {
    position: 'absolute',
    left: 10,
    zIndex: 10,
  },
  title: {
    color: 'black',
    textAlign: 'center',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
});

export default MainHeader;
