/**
 * 날자 포멧 생성기
 * @returns {String} 오늘 날자 yyyy.mm.dd (mon) 형태로 반환
 */
export const DateFormatter = () => {
    const date = new Date();
    const month = date.getMonth() >= 9 ? date.getMonth().toString() : "0" + date.getMonth()
    const day = date.getDate() >= 9 ? date.getDate().toString() : "0" + date.getDate()
    let today;
    switch (date.getDay()){
        case 1 :
            today = "Mon"
            break;
        case 2 :
            today = "Tue"
            break;
        case 3 :
            today = "WED"
            break;
        case 4 :
            today = "Thu"
            break;
        case 5 :
            today = "Fri"
            break;
        case 6 :
            today = "Sat"
            break;
        case 0 :
            today = "Sun"
            break;
        default :
            break;
    }
    return date.getFullYear() + "." + month + "." + day + ` (${today})`
}
