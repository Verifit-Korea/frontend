/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Layout from './layout.tsx';
import axios from 'axios';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigatior.tsx';
import CustomAlert from '../../components/UI/CustomAlert.tsx';

type Props = NativeStackScreenProps<RootStackParamList, 'Guideline'>;


const Guideline: React.FC<Props> = ({navigation}: Props): React.ReactNode => {
  return (
    <Layout leftButton={true}>
      <View style={styles.section}>
        <Text style={styles.subtitle}>
          매일 새벽 2시까지 인증 가능합니다.{'\n'}
          아래 카테고리를 중 원하는 만큼 인증하시면 됩니다.{'\n'}
          (항목별 최대 인증 횟수 참고해주세요!)
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>• 인증항목(일반)</Text>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/guideline/yellow1.png')}
            style={styles.image}
          />
          <Text style={styles.itemText}>식사 사진 촬영{'\n'}(15P X 2회)</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>
            -건강하게(5P) {'\n'}
            비가공 자연식품 위주 (가공식품* 30%미만){'\n'}
            *소시지, 어묵, 통조림, 밀가루, 유제품 등 {'\n'}
            -적당히 (10P){'\n'}
            목표칼로리** 기준 달성시 {'\n'}
            ‘목표 -Kcal,섭취 -Kcal’ 작성 {'\n'}
            **개인 기초 · 활동 대사량에 {'\n'}
            (증량)+500Kcal (유지)+0Kcal (감량)-500Kcal
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/guideline/yellow2.png')}
            style={styles.image}
          />
          <Text style={styles.itemText}>
            식사 사진 촬영, 식사 시간 인증(정오전){'\n'}
            (15P X 1회)
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/guideline/yellow3.png')}
            style={styles.image}
          />
          <Text style={styles.itemText}>
            단식 앱 캡쳐 (8-24시간){'\n'}
            (10P X 1회)
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/guideline/yellow4.png')}
            style={styles.image}
          />
          <Text style={styles.itemText}>
            먹는 물 사진{'\n'}
            (10P X 5회)
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/guideline/yellow5.png')}
            style={styles.image}
          />
          <Text style={styles.itemText}>
            휴대폰 수면시간 기록(7시간 이상){'\n'}
            (15P X 1회)
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/guideline/yellow6.png')}
            style={styles.image}
          />
          <Text style={styles.itemText}>
            운동하는 사진 / 운동 기록{'\n'}
            (15P X 2회)
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/guideline/yellow7.png')}
            style={styles.image}
          />
          <Text style={styles.itemText}>
            스트레칭 하는 사진{'\n'}
            (10P X 3회)
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/guideline/yellow8.png')}
            style={styles.image}
          />
          <Text style={styles.itemText}>
            체중/인바디{'\n'}
            (15P X 1회){'\n'}
            +목표 달성시 (5P)
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/guideline/yellow9.png')}
            style={styles.image}
          />
          <Text style={styles.itemText}>
            휴대폰 걸음 수 기록(5천보 이상){'\n'}
            (10P X 1회){'\n'}
            +추가 5천보마다 (5P)
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>• 인증항목(네거티브)</Text>
        <View style={styles.section}>
          <Image
            source={require('../../assets/images/guideline/authenticationList.png')}
            style={styles.negativeList}
          />
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/guideline/red1.png')}
            style={styles.image}
          />
          <Text style={styles.itemText}>
            음식 사진, 상세보기 시간(오후 10시 이후){'\n'}
            (5P X 3회)
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/guideline/red2.png')}
            style={styles.image}
          />
          <Text style={styles.itemText}>
            빵,과자,초콜렛,사탕 등 간식류 일체{'\n'}
            (15P X 1회){'\n'}
            (5P X 5회)
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/guideline/red3.png')}
            style={styles.image}
          />
          <Text style={styles.itemText}>
            탄산음료, 과일 주스, 라떼 등{'\n'}
            (5P X 4회)
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/guideline/red4.png')}
            style={styles.image}
          />
          <Text style={styles.itemText}>
            피자,햄버거,치킨,핫도그,라면 등{'\n'}
            (5P X 4회)
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/guideline/red5.png')}
            style={styles.image}
          />
          <Text style={styles.itemText}>
            모든 종류의 주류{'\n'}
            (5P X 4회)
          </Text>
        </View>
      </View>
      <Text style={styles.warning}>
        * 거짓 인증, 오용, 기준 미달으로 판단 시{'\n'}
        포인트 미지급 및 경고를 받을수 있으며{'\n'}
        경고 3회 누적 시, 퇴출 또는{'\n'}
        필요 시 전체 유저 투표로 객관적 검증을 진행합니다.
      </Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'left',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    // width: imageSize,
    // height: imageSize,
    marginRight: 10,
  },
  negativeList: {
    paddingHorizontal: 10,
    height: 124,
  },
  itemText: {
    fontSize: 15,
    color: '#fff',
  },
  warning: {
    fontSize: 20,
    color: '#FF6347',
    textAlign: 'left',
    fontWeight: 'bold',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
});

export default Guideline;
