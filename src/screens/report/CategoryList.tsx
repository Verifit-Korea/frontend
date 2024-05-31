/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Modal,
  Image,
} from 'react-native';

const CategoryCard = ({title, details}) => {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const animation = useRef(new Animated.Value(55)).current;

  const maxHeight = 300;

  const toggleExpansion = () => {
    setExpanded(!expanded);
    const toValue = expanded ? 55 : Math.min(maxHeight, contentHeight + 55);
    Animated.timing(animation, {
      toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const onContentSizeChange = (
    _contentWidth: any,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    contentHeight: React.SetStateAction<number>,
  ) => {
    setContentHeight(contentHeight);
  };

  useEffect(() => {
    const toValue = expanded ? Math.min(maxHeight, contentHeight + 55) : 55;
    Animated.timing(animation, {
      toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentHeight, expanded]);

  return (
    <Animated.View style={{...styles.card, height: animation}}>
      <TouchableOpacity onPress={toggleExpansion} activeOpacity={0.9}>
        <View style={styles.summary}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <ScrollView
          style={{flexGrow: 0, maxHeight: maxHeight - 55}}
          scrollEnabled={expanded}
          onContentSizeChange={onContentSizeChange}>
          <View style={styles.detailContainer}>
            {details.map(
              (
                detail: {text: any; imageUrl: any},
                index: React.Key | null | undefined,   //index의 값은 비어있을수도 있음
              ) => (
                <DetailCard
                  key={index}
                  text={detail.text}
                  imageUrl={detail.imageUrl}
                />
              ),
            )}
          </View>
        </ScrollView>
      </TouchableOpacity>
    </Animated.View>
  );
};

const DetailCard = ({text, imageUrl}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.detailCard}>
      <Text style={styles.detailText}>{text}</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image source={imageUrl} style={styles.imageStyle} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalView}>
          <Image source={imageUrl} style={styles.modalImage} />
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={{color: 'white'}}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    overflow: 'hidden',
    flex: 3,
  },
  summary: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  points: {
    fontSize: 16,
    color: 'black',
    margin: 5,
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  detailCard: {
    width: '50%',
    padding: 10,
  },
  imageStyle: {
    width: 80,
    height: 90,
  },
  detailText: {
    color: 'gray',
    fontSize: 10,
    // padding: 8,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    modalImage: {
      width: 400,
      height: 400,
    },
  },
});

export default CategoryCard;
