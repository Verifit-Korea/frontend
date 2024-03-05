import React, {FC} from 'react';
import {TextInput} from "react-native";

interface Props{
    inputClassName? : string
    placeHolder? : string
    onChange : (text: string) => void
    value :string
    secureTextEntry? : boolean
    autoCorrect?: boolean
    inputMode ?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    keyboardType ? :'default' |'number-pad'| 'decimal-pad'| 'numeric' | 'email-address'|'phone-pad' |'url';
}
const MainInput:FC<Props> = ({inputClassName,onChange,value,secureTextEntry,placeHolder,autoCorrect,inputMode,keyboardType}) => {
    return (
        <TextInput
            className={`${inputClassName}`}
            value={value}
            onChangeText={onChange}
            placeholder={placeHolder}
            secureTextEntry={secureTextEntry}
            inputMode={inputMode || 'none'}
            autoCorrect={autoCorrect}
            keyboardType={keyboardType || 'default'}
        />
    );
};

export default MainInput;
