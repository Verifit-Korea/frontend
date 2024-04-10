import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  title: string;
  onPress: () => void;
  TextClassName?: string;
  disabled?: boolean;
}

const GradientButton: FC<Props> = ({title, onPress, TextClassName}) => {
  return (
    <View>
      <TouchableOpacity className={'flex-row justify-center'} onPress={onPress}>
        <LinearGradient
          className={'pt-2.5 pb-3 w-2/5'}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#DCFF00', '#00A9FF']}
          style={{borderRadius: 18}}>
          <Text className={TextClassName}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default GradientButton;
