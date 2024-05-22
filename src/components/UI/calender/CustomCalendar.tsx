import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from "react-native/Libraries/NewAppScreen";
import {CalendarProvider, LocaleConfig, CalendarList, Calendar} from "react-native-calendars";
import {isDateMarked} from "../../../util/dateCheck.ts";
import { Theme } from 'react-native-calendars/src/types';
import TimePicker from "./TimePicker.tsx";
type ExtendedTheme = Theme & {
    'stylesheet.day.basic': {
        container : {
            alignSelf : string
            alignItems: string
            margin : number
        }
        text: {
            marginTop: number;
        };
    };
};
LocaleConfig.locales['fr'] = {
    monthNames: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12'
    ],
    dayNames: ['월', '화', '수', '목', '금', '토', '일'],
    dayNamesShort:  ['월', '화', '수', '목', '금', '토', '일'],
    today: "오늘",
    arrowColor: 'white',
};
LocaleConfig.defaultLocale = 'fr';

interface Props {
    markedDates : string[]
}
const CustomCalendar:FC<Props> = ({markedDates}) => {
    const [showTimePicker, setShowTimePicker] = useState(false)
    const [selectYear , setSelectYear] = useState('2024')
    const [selectMonth , setSelectMonth] = useState('03')
    const getRealMonth = (monthIndex : number) => {
        if (monthIndex === 11) {
            return 12;
        } else {
            return monthIndex + 1;
        }
    };

    console.log(`${selectYear}-${selectMonth}`)
    return (
        <View>
            <View style={styles.timePickerContainer}>
                <Text style={{color: Colors.white}} onPress={() => {setShowTimePicker(!showTimePicker)}}>{selectYear}.{selectMonth}</Text>
                {showTimePicker && <TimePicker selectedMonth={selectMonth} selectedYear={selectYear} setSelectYear={setSelectYear} setSelectMonth={setSelectMonth}/>}
            </View>

            <CalendarList
                pastScrollRange={50}
                futureScrollRange={2}
                current={`${selectYear}-${selectMonth}`}
                firstDay={1}
                showScrollIndicator={true}
                theme={{
                    backgroundColor: '#000000',
                    calendarBackground: '#000000',
                    weekVerticalMargin : 0,
                    'stylesheet.day.basic' : {
                        container : {
                            alignSelf : 'center',
                            alignItems: 'center',
                            margin : 5
                        },
                        text : {
                            marginTop : 5
                        }
                    },
                } as ExtendedTheme}
                hideArrows={true}
                hideExtraDays={true}
                disableMonthChange={true}
                renderHeader={(date : Date) => {
                   return (
                       <View>
                           <Text style={styles.calenderHeader}>{date.getFullYear()+ '년' + getRealMonth(date.getMonth()) + '월'}</Text>
                       </View>
                   )
                }}
                dayComponent={({date, state}) => {
                    return (
                        <View style={[
                             styles.dayContainer,
                             {backgroundColor : isDateMarked(date?.dateString || "" , markedDates)}
                        ]}>
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles= StyleSheet.create({
    timePickerContainer : {
        zIndex : 10,
        position: 'absolute',
        top: 0,
        left: 30,
    },
    calenderHeader: {
        fontSize : 50,
        fontWeight : "bold",
        color : Colors.white
    },
    dayContainer : {
        width : 45,
        height : 45,
        borderRadius : 30,
        margin : 0
    }
})
export default CustomCalendar;
