import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Layout from './layout.tsx';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigatior.tsx';
import useAuthStore from '../../store/authStore.ts';
import TimePicker from './TimePicker.tsx';
import PointChart from './pointChart.tsx';
import {dataWeek, dataMonth, dataYear, ChartData} from './chartData'; // Import the chart data

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
    monthPoint: authStore.getState().seasonPoint,
  });

  useEffect(() => {
    return authStore.subscribe(newState => {
      setUserData({
        rank: newState.rank,
        todayPoint: newState.todayPoint,
        totalPoint: newState.totalPoint,
        monthPoint: newState.seasonPoint,
      });
    });
  }, []);

  const [activeTimeframe, setActiveTimeframe] = useState('week');
  const [currentChartData, setCurrentChartData] = useState<ChartData>(dataWeek);

  const handleDataChange = (timeFrame: 'week' | 'month' | 'year') => {
    setActiveTimeframe(timeFrame);
    switch (timeFrame) {
      case 'week':
        setCurrentChartData(dataWeek);
        break;
      case 'month':
        setCurrentChartData(dataMonth);
        break;
      case 'year':
        setCurrentChartData(dataYear);
        break;
      default:
        setCurrentChartData(dataWeek);
    }
  };

  useEffect(() => {
    handleDataChange('week'); // Default to week data on component mount
  }, []);

  const getButtonStyle = (timeframe: string) => ({
    ...styles.button,
    backgroundColor: activeTimeframe === timeframe ? '#939697' : '#504F4F',
  });

  return (
    <Layout headerTitle="포인트" leftButton={true}>
      <View style={styles.pointsContainer}>
        <View style={styles.pointsRow}>
          <PointBox
            label="일일 포인트"
            points={userData.todayPoint}
            style={styles.halfWidthBox}
          />
          <PointBox
            label="시즌 포인트"
            points={userData.monthPoint}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{...styles.halfWidthBox, marginRight: 0, marginLeft: 4}}
          />
        </View>
        <View style={styles.pointsRow}>
          <PointBox
            label="이월 포인트"
            points={userData.totalPoint}
            style={styles.halfWidthBox}
          />
          <PointBox
            label="총 포인트"
            points={userData.rank}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{...styles.halfWidthBox, marginRight: 0, marginLeft: 4}}
          />
        </View>
        <Text style={styles.title}>추이</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={getButtonStyle('week')}
            onPress={() => handleDataChange('week')}>
            <Text style={styles.buttonText}>주</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={getButtonStyle('month')}
            onPress={() => handleDataChange('month')}>
            <Text style={styles.buttonText}>달</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={getButtonStyle('year')}
            onPress={() => handleDataChange('year')}>
            <Text style={styles.buttonText}>년</Text>
          </TouchableOpacity>
        </View>
        <TimePicker timeFrame={activeTimeframe} />
        <View style={styles.chartContainer}>
          <PointChart data={currentChartData} timeframe={activeTimeframe} />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  pointsContainer: {
    padding: 18,
    alignItems: 'center',
    width: '100%',
  },
  pointsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8,
  },
  pointBox: {
    backgroundColor: '#000000',
    borderRadius: 7,
    padding: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 110,
  },
  halfWidthBox: {
    flex: 1,
    marginRight: 4,
  },
  pointLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    top: 12,
    left: 12,
  },
  pointValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    right: 12,
    bottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    padding: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#504F4F',
    borderRadius: 8,
  },
  button: {
    paddingVertical: 3,
    paddingHorizontal: 11,
    borderRadius: 15,
    margin: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chartContainer: {
    
  },
});


export default Point;
