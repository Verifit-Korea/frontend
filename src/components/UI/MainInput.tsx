import React, {FC} from 'react';
import {TextInput, TextStyle, View, ViewStyle} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
interface Props{
    containerStyle? : ViewStyle | ViewStyle[];
    style? : TextStyle | TextStyle[];
    inputClassName? : string
    placeHolder? : string
    placeholderTextColor ? :string
    onChangeText? : (text: string) => void
    value :string
    secureTextEntry? : boolean
    autoCorrect?: boolean
    inputMode ?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    keyboardType ? :'default' |'number-pad'| 'decimal-pad'| 'numeric' | 'email-address'|'phone-pad' |'url';
}
const MainInput:FC<Props> = ({containerStyle,style,onChangeText,value,secureTextEntry,placeHolder,placeholderTextColor,autoCorrect,inputMode,keyboardType}) => {
    return (
        <View style={[containerStyle,{
            borderColor : Colors.white,
            borderBottomWidth : 1
        }]}>
            <TextInput
                style={style}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeHolder}
                placeholderTextColor={placeholderTextColor || '#464545'}
                secureTextEntry={secureTextEntry}
                inputMode={inputMode || 'none'}
                autoCorrect={autoCorrect}
                keyboardType={keyboardType || 'default'}
            />
        </View>
    );
};

export default MainInput;
