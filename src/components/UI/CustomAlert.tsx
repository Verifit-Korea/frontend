import React from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import AlertInfo from 'C:/toyproject/AwesomeProject/src/assets/images/icons/AlertInfo.svg';

type CustomAlertProps = {
  message: string;
  visible: boolean;
  onClose: () => void;
};

const CustomAlert: React.FC<CustomAlertProps> = ({
  message,
  visible,
  onClose,
}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      animationType={'none'}>
      <TouchableOpacity style={styles.modalBackground} onPress={onClose}>
        <TouchableOpacity
          style={styles.container}
          onPress={e => e.stopPropagation()}>
          <AlertInfo style={styles.icon} />
          <Text style={styles.message}>{message}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    width: 'auto',
    height: 100,
    padding: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    width: 22,
    height: 22,
    // marginTop: 5
  },
  message: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});


export default CustomAlert;
