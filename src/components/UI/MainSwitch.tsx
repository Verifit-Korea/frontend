import React, {FC} from 'react';
import { Switch } from 'react-native-switch';
import {TouchableOpacity} from "react-native";

interface Props {
    value : boolean,
    onChange : () => void
    disabled?: boolean,
}
const MainSwitch:FC<Props> = ({value,onChange,disabled}) => {
    return (
            <Switch
                disabled={disabled}
                circleSize={20}
                value={value}
                onValueChange={() => {
                    onChange()}}
                backgroundActive={'#00A9FF'}
                backgroundInactive={'black'}
                circleInActiveColor={'black'}
                circleActiveColor={'#DCFF00'}
                circleBorderInactiveColor={'gray'}
                containerStyle={{
                    padding : 0,
                    margin : 0,
                    borderWidth :value? 0: 2,
                    borderColor : value? '#DCFF00' : 'gray'
                }}
                innerCircleStyle={{
                    padding : 0,
                    marginLeft : -1,
                    borderWidth :value? 0: 2,
                    borderColor : value? '#DCFF00' : 'gray'
                }}
                renderActiveText={false}
                renderInActiveText ={false}
            />
    );
};

export default MainSwitch;
