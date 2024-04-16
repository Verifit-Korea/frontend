import React, {useState, useEffect} from 'react';
import {Image, View, Modal, StyleSheet, Dimensions} from 'react-native';
import Loading from '../../assets/images/icons/SignupLoading.svg';

interface SignupLoadingProps {
  visible: boolean;
}

const SignupLoading: React.FC<SignupLoadingProps> = ({visible}) => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    let timeoutId: any;
    if (visible) {
      setShowLoading(true);
      timeoutId = setTimeout(() => {
        setShowLoading(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [visible]);

  const screenWidth = Dimensions.get('window').width;
  const imageWidth = screenWidth - 20;

  return (
    <Modal transparent={true} visible={showLoading} animationType="none">
      <View style={styles.overlay}>
        {/* <Image
          style={{width: imageWidth, height: imageWidth}}
          source={require('../../assets/images/icons/SignupLoading.svg')}
          resizeMode="cover"
        /> */}
        <Loading style={{width: imageWidth, height: imageWidth}} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default SignupLoading;
