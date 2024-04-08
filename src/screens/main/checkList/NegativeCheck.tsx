import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../navigation/AppNavigatior.tsx";
import {StyleSheet, Text, View} from "react-native";
import Layout from "./layout.tsx";
import {Colors} from "react-native/Libraries/NewAppScreen";
import CheckButton from "../../../components/UI/buttons/CheckButton.tsx";
import {useState} from "react";

type Props = NativeStackScreenProps<RootStackParamList, 'NegativeCheck'>;

const NegativeCheck = ({navigation}: Props) => {
    const [checkValue , setCheckValue] = useState({
        value1 : false,
        value2 : false,
        value3 : false,
        value4 : false,
        value5 : false,
        value6 : false,
    })
    return <Layout>
            <View style={styles.default}>
                <Text style={styles.text}>체크 리스트</Text>

                <View style={{paddingTop : 20}}>
                    <CheckButton
                        style={styles.button}
                        text={'야식 안먹기'}
                        isChecked={checkValue.value1}
                        onPress={() => setCheckValue(prevState => ({ ...prevState, value1: !checkValue.value1 }))}/>

                    <CheckButton
                        style={styles.button}
                        text={'술 안마시기'}
                        isChecked={checkValue.value2}
                        onPress={() => setCheckValue(prevState => ({ ...prevState, value2: !checkValue.value2 }))}/>

                    <CheckButton
                        style={styles.button}
                        text={'단 음료 안마시기'}
                        isChecked={checkValue.value3}
                        onPress={() => setCheckValue(prevState => ({ ...prevState, value3: !checkValue.value3 }))}/>

                    <CheckButton
                        style={styles.button}
                        text={'패스트푸드 안먹기'}
                        isChecked={checkValue.value4}
                        onPress={() => setCheckValue(prevState => ({ ...prevState, value4: !checkValue.value4 }))}/>

                    <CheckButton
                        style={styles.button}
                        text={'디저트 안먹기'}
                        isChecked={checkValue.value5}
                        onPress={() => setCheckValue(prevState => ({ ...prevState, value5: !checkValue.value5 }))}/>
                </View>
            </View>
        </Layout>
}


const styles = StyleSheet.create({
    default : {
        padding : 35,
        flex : 1
    },
    text : {
        fontSize : 15,
        color : Colors.white,
    },
    button: {
        marginBottom: 12
    }
})

export default NegativeCheck
