import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/Ionicons';

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
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="chevron-back-outline" size={20} color="#FFFFFF" />
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
    paddingVertical: 25,
    position: 'relative',
  },
  iconButton: {
    position: 'absolute',
    left: 10,
    zIndex: 10,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MainHeader;
