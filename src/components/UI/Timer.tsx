import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from "react-native";
import TimerIcon from "../../assets/images/icons/timerIcon.svg"
import {Colors} from "react-native/Libraries/NewAppScreen";
const Timer = () => {
    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

    useEffect(() => {
        const timerID = setInterval(() => {
            setRemainingTime(calculateRemainingTime());
        }, 1000);

        return () => clearInterval(timerID);
    }, []);

    function calculateRemainingTime() {
        const now = new Date();
        const endOfToday = new Date(now);
        endOfToday.setHours(23, 59, 59, 999);
        const remainingMilliseconds = endOfToday.getTime() - now.getTime();

        const hours = Math.floor(remainingMilliseconds / (1000 * 60 * 60));
        const minutes = Math.floor((remainingMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingMilliseconds % (1000 * 60)) / 1000);

        return { hours, minutes, seconds };
    }

    return (
        <View style={styles.container}>
            <TimerIcon width={16} />
            <Text style={styles.timerText}>
                {`${remainingTime.hours.toString().padStart(2, '0')} : ${remainingTime.minutes.toString().padStart(2, '0')} : ${remainingTime.seconds.toString().padStart(2, '0')}`}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop :4 ,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    timerText: {
        paddingLeft : 10,
        color : Colors.white,
        fontSize: 15,
    },
});


export default Timer;
