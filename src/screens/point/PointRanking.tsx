/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Alert, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigatior';
import Layout from './layout_ranking.tsx';

type Props = NativeStackScreenProps<RootStackParamList, 'Ranking'>;

interface User {
  id: string;
  rank: number;
  nickname: string;
  points: number;
}

export const goAlert = (title: string, message: string) =>
  Alert.alert(title, message, [], {cancelable: true});

const RankingScreen: React.FC<Props> = () => {
  // const [seasonRanking, setSeasonRanking] = useState<RankingEntry[]>([]);
  // const [totalRanking, setTotalRanking] = useState<RankingEntry[]>([]);

  // useEffect(() => {
  //   const rankingData = async () => {
  //     try {
  //       const response = await axios.get('/ranking');
  //       setSeasonRanking(response.data.seasonRanking);
  //       setTotalRanking(response.data.totalRanking);
  //     } catch (e) {
  //       return goAlert('서비스 접속 실패', `${e}`);
  //     }
  //   };
  //   rankingData();
  // }, []);

  const thisSeasonData: User[] = [
    {id: '1', rank: 1, nickname: '밍디밍디', points: 500},
    {id: '2', rank: 2, nickname: 'zxcv9787992', points: 430},
    {id: '3', rank: 3, nickname: '라니', points: 410},
    {id: '4', rank: 4, nickname: '03csy', points: 340},
    {id: '5', rank: 5, nickname: '고슴더치', points: 285},
  ];

  const totalPointsData: User[] = [
    {id: '1', rank: 1, nickname: '라니', points: 2837.5},
    {id: '2', rank: 2, nickname: '밍디밍디', points: 1647},
    {id: '3', rank: 3, nickname: 'zxcv9787992', points: 1570},
    {id: '4', rank: 4, nickname: '03csy', points: 1029.5},
    {id: '5', rank: 5, nickname: '고슴더치', points: 1010},
  ];

  // eslint-disable-next-line react/no-unstable-nested-components
  const LeaderboardItem: React.FC<User> = ({rank, nickname, points}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.rank}>{rank}</Text>
      <View style={styles.iconBackground}>
        <Icon name="person-sharp" size={17} color="#DCFF00" />
      </View>
      <Text style={styles.nickname}>{nickname}</Text>
      <Text style={styles.points}>{`${points} P`}</Text>
    </View>
  );

  return (
    <Layout>
      <Text style={styles.headerTitle}>랭킹</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.listContainer}>
          <View style={styles.rankingBox}>
            <Text style={styles.title}>이번 시즌 랭킹</Text>
            {thisSeasonData.map(item => (
              <LeaderboardItem key={item.id} {...item} />
            ))}
          </View>
          <View style={{height: 35}} />
          <View style={styles.rankingBox}>
            <Text style={styles.title}>총 포인트 랭킹</Text>
            {totalPointsData.map(item => (
              <LeaderboardItem key={item.id} {...item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    margin: 20,
    textAlign: 'center',
  },
  listContainer: {
    marginHorizontal: 50,
    alignItems: 'center',
    marginVertical: 8,
  },
  rankingBox: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    alignItems: 'center',
    borderWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'rgba(255, 255, 255, 0.55)',
    // borderRadius: 8,
    padding: 6,
    marginBottom: 8,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#8D8989',
  },
  rank: {
    color: '#000000',
    width: 24,
    fontSize: 16,
    flex: 1,
  },
  iconBackground: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  nickname: {
    color: '#000000',
    flex: 6,
    textAlign: 'left',
    paddingLeft: 10,
  },
  points: {
    color: '#8D8989',
    fontSize: 14,
    flex: 4,
    textAlign: 'right',
  },
});

export default RankingScreen;
