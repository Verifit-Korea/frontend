import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {ChartData} from './chartData';

interface PointChartProps {
  data: ChartData;
  timeframe: string;
}

const getDynamicBarPercentage = (dataCount: number) => {
  if (dataCount < 13) {
    return Math.max(0.3, 1 - dataCount * 0.05);
  }
  return 0.2;
};

const chartConfig = {
  backgroundGradientFrom: '#DCFF00',
  backgroundGradientTo: '#DCFF00',
  color: () => '#3C7EFF',
  strokeWidth: 1,
  barPercentage: 0.2,
  showBarTops: false,
  useShadowColorFromDataset: false,
  propsForBackgroundLines: {
    stroke: '#000000',
  },
  propsForLabels: {
    fill: '#000000',
  },
};

const getChartConfig = (data: ChartData, timeframe: string) => ({
  ...chartConfig,
  barPercentage: getDynamicBarPercentage(data.labels.length),
  formatXLabel: (label: string) => {
    if (timeframe === 'month') {
      return parseInt(label, 10) % 10 === 0 ? label : '';
    }
    return label;
  },
  formatYLabel: (label: string) => parseInt(label, 10).toString(),
  fromZero: true,
  yAxisInterval: 1,
});

const PointChart: React.FC<PointChartProps> = ({data, timeframe}) => {
  return (
    <BarChart
      data={data}
      width={Dimensions.get('window').width - 10}
      height={220}
      chartConfig={getChartConfig(data, timeframe)}
      yAxisLabel=""
      xAxisLabel=""
      style={styles.chartStyle}
    />
  );
};

const styles = StyleSheet.create({
  chartStyle: {
    // margin: 8,
    // borderRadius: 16,
  },
});

export default PointChart;
