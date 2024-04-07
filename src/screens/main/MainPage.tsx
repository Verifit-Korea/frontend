import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import Layout from "./layout.tsx";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {DateFormatter} from "../../util/formatter.ts";
import GradientLogo  from "../../assets/images/logo/gradientLogo.svg"
import Timer from "../../components/UI/Timer.tsx";
import Guide from "../../assets/images/icons/guide.svg"
import {TipList} from "../../__mocks__/Tip.ts";
import {getRandomNumber} from "../../util/RandomNumber.ts";
import {useFocusEffect} from "@react-navigation/native";
import useAuthStore from "../../store/authStore.ts";
import RightArrow from '../../assets/images/icons/rightArrow.svg'
const MainPage = () => {
    const authStore = useAuthStore.getState();

    const [tip ,setTip] = useState('')

    useFocusEffect(() => {
        const ranNum = getRandomNumber(0, TipList.length);
        setTip(TipList[ranNum]);
    });

    return (
        <Layout>
            <ScrollView contentInsetAdjustmentBehavior="automatic">

            <View style={styles.default}>
                <GradientLogo width={36}/>

                <View style={{flexDirection : 'row', alignItems : 'flex-end' , justifyContent : 'space-between'}}>
                    <Text style={[styles.text, {fontSize: 35  , fontWeight: "900"}]}>
                        {"오늘은\n" + "디저트 x 인가요?"}
                    </Text>
                    <RightArrow style={{marginBottom : 7}} width={35} height={35}/>
                </View>
                <Timer/>
                <View style={styles.mainContainer}>
                    <View style={{
                        justifyContent : "center",
                        alignItems : "center",
                        flexDirection : "column",
                        width : '50%',
                        backgroundColor :Colors.white,
                        borderRadius : 10,
                    }}>
                        <View style={{flexDirection : "row", alignItems : "flex-end",justifyContent:"space-between",width :'100%', padding : 10 }}>
                            <RightArrow width={15}/>
                            <Text style={{fontSize : 15,color :Colors.black, fontWeight : "bold"}}>주간 경매 상품</Text>
                            <View></View>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/images/sample/img.png')}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                    <View style={{
                        paddingLeft : 10,
                        alignItems : "flex-end",
                        width : '50%',
                    }}
                    >
                        <View style={{
                            alignItems : "center",
                            flexDirection : "row"
                        }}>
                            <Guide width={15}/>
                            <Text style={[styles.text,{paddingTop: 0,marginTop : -2, paddingLeft : 25}]}>
                                인증 가이드
                            </Text>
                        </View>

                        <Text style={{fontWeight : "bold" , color : '#484545'}}>연속인증</Text>
                        <Text style={[styles.pointText, {fontSize:25}]}>{authStore.relayPhoto}일째</Text>
                        <View style={{
                            marginTop : 20,
                            paddingHorizontal : 12,
                            paddingVertical : 9,
                            justifyContent : "flex-end",
                            alignItems : "flex-end",
                            flexDirection : "column",
                            width : '100%',
                            backgroundColor : '#DCFF00',
                            borderRadius : 10
                        }}>
                            <View style={{flexDirection : "row", alignItems : "flex-end",justifyContent:"space-between",width :'100%' }}>
                                <RightArrow width={16 }/>

                                <Text style={{fontSize : 15,color :Colors.black, fontWeight : "bold"}}>시즌 포인트</Text>
                             </View>

                            <Text style={{fontSize : 30,color :Colors.black, fontWeight : "bold", padding : 4}}>{authStore.seasonPoint}</Text>
                        </View>

                    </View>
                </View>

                <View style={styles.tip}>
                    <Text style={styles.tip_text}>
                        {tip}
                    </Text>
                </View>

            </View>
            </ScrollView>

        </Layout>
    );
};

const styles = StyleSheet.create({
    default : {
      paddingTop : 67,
      paddingHorizontal : 30
    },
    mainContainer : {
        paddingTop : 100,
        flexDirection : "row",
        justifyContent : "space-between"
    },
    tip : {
        marginTop : 10,
        borderRadius : 15,
        padding : 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    tip_text : {
        fontWeight : "bold",
        fontSize : 15,
        color: Colors.white
    },
    text : {
        fontWeight : "bold",
        paddingTop : 10,
        fontSize : 15,
        color : Colors.black
    },
    pointText : {
        fontWeight : "bold",
        color : "#DCFF00"
    },
    imageContainer: {
        marginTop : 10,
        flex: 1,
        marginBottom : 10,
        width: '100%',
        height: 130
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
})

export default MainPage;
