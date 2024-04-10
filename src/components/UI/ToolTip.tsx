import React, {useState} from 'react';
import {TooltipProps} from "react-native-paper";
import Tooltip from 'react-native-walkthrough-tooltip';
import {Text, TouchableHighlight, View} from "react-native";
import Guide from "../../assets/images/icons/guide.svg";
import {Colors} from "react-native/Libraries/NewAppScreen";
const ToolTip : React.FC<TooltipProps> = (props) => {
    const [toolTipVisible , setToolTipVisible] = useState(false)
    return (
        <Tooltip
            isVisible={toolTipVisible}
            backgroundColor={'rgba(0,0,0,0)'}
            displayInsets={{top:80, bottom: 0, left : 20 ,right : 35}}
            content={
            <View style={{backgroundColor : Colors.black, paddingVertical : 10, paddingHorizontal : 5}}>
                <Text style={{color : Colors.white, fontSize : 20, fontWeight :'bold' ,paddingBottom : 10}}>경매 규칙</Text>
                <Text style={{color : Colors.white}}>{
                        "인당 여러 상품에 가격 제시 가능합니다.\n" +
                        " (각 제시가가 보유 포인트 이내, 제시가들의 \n" +
                        " 총합은 보유 포인트를 넘어도 됩니다.)\n" +
                        "\n"+
                        "2.인당 상품 수령은 하나만 가능합니다.\n" +
                        "\n" +
                        "3.마감 시간까지 계속 제시 가능하나, 최고가\n" +
                        "보다 낮은 가격을 제시할 수는 없습니다\n" +
                        "\n" +
                        "4.제시가가 보유 포인트를 넘었을 경우 낙찰\n" +
                        "취소됩니다.\n" +
                        "\n" +
                        "5.낙찰되지 않은 경우 제시가는 차감되지 않습니다.\n" +
                        "\n" +
                        "6.경매 후 잔여포인트는 다음 시즌으로 이월됩니다.\n" +
                        "(1시즌간 유지 후 소멸됩니다)"}
                </Text>
                <Text style={{color : Colors.white}}>
                    {"인당 상품 수령은 하나만 가능합니다.\n" +
                        "여러 상품이 동시에 낙찰될 경우, 가장 고가의 상품만\n" +
                        "인정되며, 나머지 상품은 2순위 제시자에게 낙찰됩니다.\n" +
                        "\n" +
                        "예)\n" +
                        "상품 A(3000원)에 철수가 500P, 영희가 400P 제시,\n" +
                        "상품 B(1000원)에 철수가 400P, 영희가 300P 제시\n" +
                        "철수는 A 상품 낙찰, 영희는 B상품이 낙찰됩니다."}
                    </Text>

            </View>
        }
            arrowSize={{ width: 0, height: 0 }}
            contentStyle={{
                borderRadius : 15,
                backgroundColor : Colors.black,
                width : '100%',
                height : '100%'
            }}
            onClose={() => setToolTipVisible(!toolTipVisible)}
        >
            <TouchableHighlight onPress={() => setToolTipVisible(!toolTipVisible)}>
                <Guide width={15} />
            </TouchableHighlight>
        </Tooltip>
    );
};

export default ToolTip;
