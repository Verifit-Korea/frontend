import React, {useState, useEffect} from 'react';
import {
  View,
  Alert,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useAuthStore, {IAuthStore} from './authStore';
import axios from 'axios';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigatior';
import Layout from './layout.tsx';

type Props = NativeStackScreenProps<RootStackParamList, 'PointRanking'>;

interface RankingEntry {
  rank: number;
  nickname: string;
  points: number;
}

export const goAlert = (title: string, message: string) =>
  Alert.alert(title, message, [], {cancelable: true});

const RankingScreen: React.FC<Props> = () => {
  const [seasonRanking, setSeasonRanking] = useState<RankingEntry[]>([]);
  const [totalRanking, setTotalRanking] = useState<RankingEntry[]>([]);

  useEffect(() => {
    const rankingData = async () => {
      try {
        const response = await axios.get('/ranking');
        setSeasonRanking(response.data.seasonRanking);
        setTotalRanking(response.data.totalRanking);
      } catch (e) {
        return goAlert('서비스 접속 실패', `${e}`);
      }
    };
    rankingData();
  }, []);

  const renderItem = ({item}: ListRenderItemInfo<RankingEntry>) => (
    <View style={styles.rankEntry}>
      <View style={styles.avatarContainer}>
        <Icon name="person-sharp" size={17} color="#DCFF00" />
      </View>
      <Text style={styles.nickname}>{item.nickname}</Text>
      <Text style={styles.points}>{item.points} P</Text>
    </View>
  );

  return (
    <Layout>
      <FlatList
        data={seasonRanking}
        renderItem={renderItem}
        keyExtractor={item => item.rank.toString()}
        ListHeaderComponent={<Text style={styles.header}>이번 시즌 랭킹</Text>}
        // scrollEnabled={false}
      />
      <FlatList
        data={totalRanking}
        renderItem={renderItem}
        keyExtractor={item => item.rank.toString()}
        ListHeaderComponent={<Text style={styles.header}>총 포인트 랭킹</Text>}
        // scrollEnabled={false} 
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#000000',
    color: '#FFFFFF',
    padding: 20,
    textAlign: 'center',
  },
  rankEntry: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 10,
  },
  avatarContainer: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    padding: 2,
    backgroundColor: '#0000FF',
    borderRadius: 50,
    marginRight: 10,
    width: 26, 
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nickname: {
    flex: 1,
    fontSize: 18,
    color: '#FFFFFF',
    marginRight: 10,
  },
  points: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default RankingScreen;
