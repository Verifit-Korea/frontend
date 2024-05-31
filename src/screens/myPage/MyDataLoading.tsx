import React, {useState, useEffect} from 'react';
import {View, Modal, StyleSheet, Dimensions} from 'react-native';
import Loading from '../../assets/images/icons/ChangeLoading.svg';

interface MyDataLoadingProps {
  visible: boolean;
}

const MyDataLoading: React.FC<MyDataLoadingProps> = ({visible}) => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    let timeoutId: any;
    if (visible) {
      setShowLoading(true);
      timeoutId = setTimeout(() => {
        setShowLoading(false);
      }, 10000);
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

export default MyDataLoading;
