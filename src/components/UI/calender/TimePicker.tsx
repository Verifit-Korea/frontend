import React, {FC, useEffect, useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {generateDateOptions} from "../../../util/dateCheck.ts";

const BUTTON_HEIGHT = 20;
const VIEW_HEIGHT = BUTTON_HEIGHT * 3;

interface Props{
    selectedYear : string,
    setSelectYear : (year : string) => any;
    selectedMonth: string,
    setSelectMonth : (month : string) => any;
}
const TimePicker:FC<Props> = ({selectedYear,selectedMonth , setSelectYear , setSelectMonth}) => {
    const yearScrollViewRef = useRef(null);
    const monthScrollViewRef = useRef(null);

    const [yearList, setYearList] = useState([''])
    const [monthList ,setMonthList] = useState([''])

    const [selectedYearIndex, setSelectedYearIndex] = useState(yearList.length);
    const [selectedMonthIndex, setSelectedMonthIndex] = useState(monthList.length);

    useEffect(() => {
        const res= generateDateOptions(Number(selectedYear) , 5)
        setYearList(res.years)
        setMonthList(res.months)

        const selectedYearIdx = res.years.findIndex(year => year === selectedYear);
        setSelectedYearIndex(selectedYearIdx - 1);

        const selectedMonthIdx = res.months.findIndex(month => month === selectedMonth);
        setSelectedMonthIndex(selectedMonthIdx - 1);
    }, [selectedYear, selectedMonth]);
    const handleConfirm = () => {
        if (selectedYearIndex !== null && selectedMonthIndex !== null) {
            const selectedYear = yearList[selectedYearIndex +1];
            const selectedMonth = monthList[selectedMonthIndex +1] ;
            setSelectYear(selectedYear)
            setSelectMonth(selectedMonth)
            return {selectedYear : selectedYear , selectedMonth : selectedMonth}
        } else {
            console.log("연도와 월을 선택하세요.");
        }
    };

    useEffect(() => {
        if (selectedYearIndex !== null) {
            const timeout = setTimeout(() => {
                scrollToCenter(yearScrollViewRef, selectedYearIndex);
            }, 300);
            return () => clearTimeout(timeout); // clean-up 함수를 통해 setTimeout 제거
        }

        if (selectedMonthIndex !== null) {
            const timeout = setTimeout(() => {
                scrollToCenter(monthScrollViewRef, selectedMonthIndex);
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [selectedYearIndex,selectedMonthIndex]);

    const scrollToCenter = (scrollViewRef : any, index : number) => {
        scrollViewRef.current.scrollTo({
            y: index * BUTTON_HEIGHT,
            animated: true,
        });
    };

    return (
        <View style={styles.view}>
                <View style={styles.container}>
                    <ScrollView
                        ref={yearScrollViewRef}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={[styles.scrollView]}
                        onScroll={(event) => {
                            const offset = event.nativeEvent.contentOffset.y;
                            const index = Math.floor(Math.round(offset) / BUTTON_HEIGHT);
                            // @ts-ignore
                            setSelectedYearIndex(index);
                        }}
                    >
                        {yearList.map((item, index) => (
                            <Button key={index} label={item} index={index} selectedIndex={selectedYearIndex} />
                        ))}
                    </ScrollView>
                    <View style={styles.confirmContainer}>
                        <Text style={styles.confirmText}>년</Text>
                    </View>
                    <ScrollView
                        ref={monthScrollViewRef}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.scrollView}
                        onScroll={(event) => {
                            const offset = event.nativeEvent.contentOffset.y;
                            const index = Math.floor(Math.round(offset) / BUTTON_HEIGHT);
                            // @ts-ignore
                            setSelectedMonthIndex(index);
                        }}
                    >
                        {monthList.map((item, index) => (
                            <Button key={index} label={item} index={index} selectedIndex={selectedMonthIndex} />
                        ))}
                    </ScrollView>
                    <View style={styles.confirmContainer}>
                        <Text style={styles.confirmText}>월</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.confirmContainer} onPress={() => {
                            const res = handleConfirm()
                            }}>
                        <Text  style={[styles.confirmText, {paddingHorizontal : 10}]}>확인</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
};

// @ts-ignore
const Button = ({label, index, selectedIndex } ) => {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.button}>
                <Text style={[styles.buttonLabel, index === selectedIndex +1 ? { fontWeight: 'bold' ,color: Colors.black } : null]}>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};


const styles= StyleSheet.create({
    view: {
        padding : 10,
        borderRadius : 15,
        backgroundColor : Colors.white,
        flex : 1,
    },
    container: {
        alignItems : "flex-start",
        flexDirection : "row",
        height: VIEW_HEIGHT,
    },
    scrollView: {
        paddingHorizontal : 10
    },
    button: {
        height: BUTTON_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLabel: {
        color: '#888686',
    },
    confirmContainer : {
        height: VIEW_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
    },
    confirmText: {
        color: Colors.black,
        fontWeight : 'bold'
    }
});

export default TimePicker;
