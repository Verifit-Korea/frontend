import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Layout from './layout.tsx';
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigatior.tsx';
import useAuthStore from '../../store/authStore.ts';

type Props = NativeStackScreenProps<RootStackParamList, 'Point'>;

interface PointBoxProps {
  label: string;
  points?: number | undefined;
  style?: ViewStyle | ViewStyle[];
}

const PointBox: React.FC<PointBoxProps> = ({label, points, style}) => {
  return (
    <View style={[styles.pointBox, style]}>
      <Text style={styles.pointLabel}>{label}</Text>
      <Text style={styles.pointValue}>
        {points !== undefined ? `${points} P` : '---'}
      </Text>
    </View>
  );
};

const Point = ({navigation}: Props) => {
  const authStore = useAuthStore;
  const [userData, setUserData] = useState({
    rank: authStore.getState().rank,
    todayPoint: authStore.getState().todayPoint,
    totalPoint: authStore.getState().totalPoint,
    monthPoint: authStore.getState().monthPoint,
  });

  useEffect(() => {
    return authStore.subscribe(newState => {
      setUserData({
        rank: newState.rank,
        todayPoint: newState.todayPoint,
        totalPoint: newState.totalPoint,
        monthPoint: newState.monthPoint,
      });
    });
  }, []);

  return (
    <Layout>
      <View style={styles.pointsContainer}>
        <View style={styles.pointsRow}>
          <PointBox
            label="이월 포인트"
            points={userData.monthPoint}
            style={styles.halfWidthBox}
          />
          <PointBox
            label="일일 포인트"
            points={userData.todayPoint}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{...styles.halfWidthBox, marginRight: 0, marginLeft: 4}}
          />
        </View>
        <PointBox
          label="총 포인트"
          points={userData.totalPoint}
          style={styles.fullWidthBox}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  pointsContainer: {
    marginTop: 16,
    alignItems: 'center',
    backgroundColor: '#DCFF00',
  },
  pointsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8,
  },
  pointBox: {
    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  halfWidthBox: {
    flex: 0.5,
    marginRight: 4,
  },
  fullWidthBox: {
    flex: 1,
    marginTop: 8,
  },
  pointLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  pointValue: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    right: 12, 
    bottom: 12, 
  },
});

export default Point;
