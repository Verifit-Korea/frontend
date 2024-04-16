import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';

interface TimePickerProps {
  timeFrame: string;
}

const TimePicker: React.FC<TimePickerProps> = ({timeFrame}) => {
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear(),
  );
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth() + 1,
  );
  const [selectedDay, setSelectedDay] = useState<number>(new Date().getDate());
  const [pickerVisible, setPickerVisible] = useState<boolean>(false);

  const years: number[] = Array.from(
    new Array(20),
    (_, index) => new Date().getFullYear() - index,
  );
  const months: number[] = Array.from(new Array(12), (_, index) => 1 + index);
  const days: number[] = Array.from(new Array(31), (_, index) => 1 + index);

  const togglePicker = () => {
    setPickerVisible(!pickerVisible);
  };

  const getFormattedDate = () => {
    switch (timeFrame) {
      case 'week':
        return `${selectedYear}년 ${selectedMonth}월 ${selectedDay}일`;
      case 'month':
        return `${selectedYear}년 ${selectedMonth}월`;
      case 'year':
        return `${selectedYear}년`;
      default:
        return '';
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selectionArea} onPress={togglePicker}>
        <Icon name="calendar-outline" size={24} color="black" />
        <Text style={styles.selectedText}>{getFormattedDate()}</Text>
      </TouchableOpacity>
      {pickerVisible && (
        <View style={styles.pickerContainer}>
          {timeFrame === 'week' && (
            <>
              <Picker
                selectedValue={selectedYear}
                onValueChange={itemValue => setSelectedYear(itemValue)}
                style={styles.picker}>
                {years.map(year => (
                  <Picker.Item
                    label={year.toString()}
                    value={year}
                    key={year}
                  />
                ))}
              </Picker>
              <Picker
                selectedValue={selectedMonth}
                onValueChange={itemValue => setSelectedMonth(itemValue)}
                style={styles.picker}>
                {months.map(month => (
                  <Picker.Item
                    label={month.toString()}
                    value={month}
                    key={month}
                  />
                ))}
              </Picker>
              <Picker
                selectedValue={selectedDay}
                onValueChange={itemValue => setSelectedDay(itemValue)}
                style={styles.picker}>
                {days.map(day => (
                  <Picker.Item label={day.toString()} value={day} key={day} />
                ))}
              </Picker>
            </>
          )}
          {timeFrame === 'month' && (
            <>
              <Picker
                selectedValue={selectedYear}
                onValueChange={itemValue => setSelectedYear(itemValue)}
                style={styles.picker}>
                {years.map(year => (
                  <Picker.Item
                    label={year.toString()}
                    value={year}
                    key={year}
                  />
                ))}
              </Picker>
              <Picker
                selectedValue={selectedMonth}
                onValueChange={itemValue => setSelectedMonth(itemValue)}
                style={styles.picker}>
                {months.map(month => (
                  <Picker.Item
                    label={month.toString()}
                    value={month}
                    key={month}
                  />
                ))}
              </Picker>
            </>
          )}
          {timeFrame === 'year' && (
            <Picker
              selectedValue={selectedYear}
              onValueChange={itemValue => setSelectedYear(itemValue)}
              style={styles.picker}>
              {years.map(year => (
                <Picker.Item label={year.toString()} value={year} key={year} />
              ))}
            </Picker>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selectionArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  selectedText: {
    marginLeft: 10,
    fontSize: 16,
  },
  picker: {
    width: 120,
  },
});

export default TimePicker;
