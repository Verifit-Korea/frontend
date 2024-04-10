import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import Timer from "../Timer.tsx";
import Human from "../../../assets/images/icons/human.svg"
const ActionCard = () => {
    return (
        <View style={styles.main_container}>
            <ActionCardHeader/>
            <Timer containerStyle={styles.timerContainer} BlackIcon={true} textStyle={styles.timer} iconSize={40}/>
            <View style={styles.image}>
                <Text>이미지</Text>
            </View>
        </View>
    );
};

const ActionCardHeader = () => {
    return <View
        style={styles.headerContainer}>
        <View style={{
            flexDirection : 'row',
        }}>
            <Human/>
            <Text style={{color : Colors.black, paddingLeft : 5}}>265</Text>
        </View>

        <View style={{
            backgroundColor : Colors.black,
            borderRadius : 20,
            paddingHorizontal : 15,
            paddingTop : 3,
            paddingBottom :5
        }}>
            <Text style={{
                color : '#DCFF00',
                fontSize : 15
            }}>진행중</Text>
        </View>
    </View>
}
const styles = StyleSheet.create({
    main_container : {
        marginTop : 10,
        flex : 1,
        flexDirection :"column",
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        paddingVertical : 10,
        paddingHorizontal : 20,
        borderRadius : 15
    },
    headerContainer : {
        width : '100%',
        flex : 1,
        flexDirection : "row",
        justifyContent : 'space-between',
        alignItems : 'flex-start'
    },
    timer: {
        color:Colors.black,
        fontSize : 30,
    },
    timerContainer: {
        paddingRight : 20
    },
    image:{
        height : 280,
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    }
});

export default ActionCard;
