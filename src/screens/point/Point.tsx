import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  Dimensions,
} from 'react-native';
import Layout from './layout.tsx';
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigatior.tsx';
import useAuthStore from '../../store/authStore.ts';
import {BarChart} from 'react-native-chart-kit';

type Props = NativeStackScreenProps<RootStackParamList, 'Point'>;

interface PointBoxProps {
  label: string;
  points?: number | undefined;
  style?: ViewStyle | ViewStyle[];
}

interface ChartData {
  labels: string[];
  datasets: [
    {
      data: number[];
    },
  ];
}

const chartConfig = {
  backgroundGradientFrom: '#DCFF00',
  backgroundGradientTo: '#DCFF00',
  color: () => 'rgba(0, 169, 255, 1)', // Black color for text and lines
  strokeWidth: 2,
  barPercentage: 0.5,
  showBarTops: true,
  useShadowColorFromDataset: false,
};

const dataWeek: ChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{data: [20, 45, 28, 80, 99, 43, 50]}],
};

const dataMonth: ChartData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [{data: [150, 100, 200, 220]}],
};

const dataYear: ChartData = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {data: [300, 600, 400, 650, 390, 750, 840, 430, 550, 1200, 650, 900]},
  ],
};

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

interface Users {
  monthPoint: number | null;
  todayPoint: number | null;
  totalPoint: number | null;
}

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

  const [activeTimeframe, setActiveTimeframe] = useState('week');

  const [currentChartData, setCurrentChartData] = useState<ChartData>(dataWeek);

  const handleDataChange = (timeFrame: 'week' | 'month' | 'year') => {
    setActiveTimeframe(timeFrame);
    switch (timeFrame) {
      case 'week':
        setCurrentChartData(dataWeek);
        getButtonStyle('week');
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

  const getButtonStyle = (timeframe: string) => ({
    ...styles.button,
    backgroundColor: activeTimeframe === timeframe ? '#939697' : '#504F4F',
  });

  useEffect(() => {
    handleDataChange('week');
  }, []);

  return (
    <Layout headerTitle={'포인트'}>
      <View style={styles.pointsContainer}>
        <View style={styles.pointsRow}>
          <PointBox
            label="일일 포인트"
            points={userData.monthPoint}
            style={styles.halfWidthBox}
          />
          <PointBox
            label="시즌 포인트"
            points={userData.todayPoint}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{...styles.halfWidthBox, marginRight: 0, marginLeft: 4}}
          />
        </View>
        <View style={styles.pointsRow}>
          <PointBox
            label="이월 포인트"
            points={userData.monthPoint}
            style={styles.halfWidthBox}
          />
          <PointBox
            label="총 포인트"
            points={userData.todayPoint}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{...styles.halfWidthBox, marginRight: 0, marginLeft: 4}}
          />
        </View>
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
      <View style={styles.chartContainter}>
        <BarChart
          data={currentChartData}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={chartConfig}
        />
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
    // height: 'auto',
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
    // alignSelf: 'flex-start',
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: 10,
    width: 'auto',
    backgroundColor: '#504F4F',
    borderRadius: 8,
  },
  button: {
    // backgroundColor: '#504F4F',
    paddingVertical: 6,
    paddingHorizontal: 13,
    borderRadius: 15,
    margin: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chartContainter: {
    paddingVertical: 10,
  },
});

export default Point;
