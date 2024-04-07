import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Layout from "./layout.tsx";

import BgBlackLogo from "../../assets/images/logo/bgBlackLogo.svg"
import VerifitLogoNeon from "../../assets/images/logo/VerifitLogoNeon.svg"
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/AppNavigatior.tsx";
type Props = NativeStackScreenProps<RootStackParamList, 'SocialPage'>;
const SocialLoginPage = ({navigation} : Props) => {
    return (
        <Layout header={false}>
            <View style={[styles.container , {
                paddingTop : 103
            }]}>
                <BgBlackLogo width={170}/>
                <Text style={[styles.text,{fontSize: 20, paddingBottom : 10}]}>
                    <Text style={{fontWeight : "bold"}}>모든 순간</Text>을
                    <Text style={{fontWeight : "bold"}}>핏</Text>하게,
                </Text>
                <VerifitLogoNeon/>
            </View>


            <View style={[styles.container , {
                paddingTop : 152
            }]}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/logo/kakaoButtonLogo.png')}
                        resizeMode="cover"
                    />
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/logo/naverButtomLogo.png')}
                        resizeMode="cover"
                    />
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/logo/googleButtomLogo.png')}
                        resizeMode="cover"
                    />
                </View>

                <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('LoginPage')}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/logo/verifitButtomLogo.png')}
                        resizeMode="cover"
                    />
                </TouchableOpacity>


                <View style={{paddingTop : 54, flex: 1, flexDirection : "row" , alignItems : "center"}}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignupPage')}>
                        <Text style={[styles.text,{borderBottomWidth: 1, borderBottomColor: 'white'}]}>회원가입 </Text>
                    </TouchableOpacity>
                    <Text style={{fontSize : 20, color : "white"}}> / </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignupPage')}>
                        <Text style={[styles.text,{borderBottomWidth: 1, borderBottomColor: 'white'}]}> 계정 찾기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    text : {
        fontSize : 15,
        color : "white"
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        marginHorizontal: 40,
        marginBottom : 10,
        width: 308,
        height : 50
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
});
export default SocialLoginPage;
