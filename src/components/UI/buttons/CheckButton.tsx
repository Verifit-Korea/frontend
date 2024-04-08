import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import CheckIcon from '../../../assets/images/icons/checkIcon.svg'
import CheckedIcon from '../../../assets/images/icons/checkedIcon.svg'
interface Props{
    isChecked :boolean
    text : string
    onPress: () => void;
    style?: any
}
const CheckButton:FC<Props> = ({isChecked, text,onPress,style}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[{
            flex : 1,
            flexDirection : 'row',
            alignItems : 'center',
            paddingHorizontal : 20,
            paddingTop : 10,
            paddingBottom: 14,
            borderWidth : 2,
            borderColor : isChecked ? '#FF7676' : Colors.white,
            borderRadius : 18,
            backgroundColor : isChecked ? '#FF7676' : Colors.black
        },style]}>
            {isChecked ?
                <CheckedIcon style={{marginRight:10}} width={15} height={13}/> :
                <CheckIcon style={{marginRight:10}} width={15} height={13}/>
            }
             <Text style={{color:isChecked ?'#DCFF00' : Colors.white, fontSize : 20}}>{text}</Text>
        </TouchableOpacity>
    );
};



export default CheckButton;
