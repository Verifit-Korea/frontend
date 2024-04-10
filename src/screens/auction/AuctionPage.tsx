import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import Layout from "./layout.tsx";
import {Colors} from "react-native/Libraries/NewAppScreen";
import Timer from "../../components/UI/Timer.tsx";
import ActionCard from "../../components/UI/card/actionCard.tsx";

const AuctionPage = () => {
    return (
        <Layout>
            <View style={{marginBottom : 100}}>
                <View style={{paddingHorizontal : 40}}>
                    <Text style={styles.text}>
                        · NIKE- Air zoom Pegasus 35
                    </Text>
                    <ActionCard/>
                    <View style={styles.bottomCardContainer}>
                        <Text style={styles.text}>현재 최고 제시가</Text>
                        <Text style={styles.text}>500P</Text>
                    </View>
                </View>

                <View style={{paddingHorizontal : 40}}>
                    <Text style={styles.text}>
                        · SALADY- 탄단지 샐러드
                    </Text>
                    <ActionCard/>
                    <View style={styles.bottomCardContainer}>
                        <Text style={styles.text}>현재 최고 제시가</Text>
                        <Text style={styles.text}>500P</Text>
                    </View>
                </View>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    text :{
        color: Colors.black,
        fontWeight : "bold",
        fontSize:15
    },
    bottomCardContainer : {
        marginTop : 10,
        flex : 1,
        flexDirection : "row",
        justifyContent : 'space-between',
        paddingTop : 4,
        paddingBottom : 8,
        paddingHorizontal : 15,
        borderWidth : 2,
        borderRadius : 18,
        borderColor : '#979696',
    }
})

export default AuctionPage;
