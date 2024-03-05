import React, {FC} from 'react';
import {Text, TouchableOpacity} from "react-native";

interface Props{
    title: string,
    onPress : () => void
    buttonClassName? :string
    TextClassName? : string
}
const MainButton:FC<Props> = ({title,onPress, buttonClassName,TextClassName}) => {
    return (
        <TouchableOpacity className={buttonClassName} onPress={onPress}>
            <Text className={TextClassName}>{title}</Text>
        </TouchableOpacity>
    );
};

export default MainButton;
