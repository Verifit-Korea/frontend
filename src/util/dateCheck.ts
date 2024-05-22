export const isDateThisWeek = (dateString: string): boolean => {
    const currentDate = new Date(); // 현재 날짜

    const currentDayOfWeek = currentDate.getDay();

    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() - currentDayOfWeek);

    const endDate = new Date(currentDate);
    endDate.setDate(endDate.getDate() + (6 - currentDayOfWeek));

    const dateParts = dateString.split('-');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // JavaScript에서는 월이 0부터 시작하므로 1을 빼줍니다.
    const day = parseInt(dateParts[2]);
    const targetDate = new Date(year, month, day);

    return targetDate <= endDate;
};

export const isDateMarked = (dateString: string , markedDates : any[]) => {
    let color = 'rgba(128, 128, 128, 0.4)';
    markedDates.forEach((value, index, array) => {
        if(dateString === value){
            if(isDateThisWeek(dateString)){
                return color = 'rgba(220, 255, 0, 0.7)';
            }
            return color = 'rgba(220, 255, 0, 1)';
        }
        if(!isDateThisWeek(dateString)){
            return color = 'rgba(128, 128, 128, 1)';
        }
    });
    return color;
};

export const generateDateOptions = (startYear : number, range : number) => {
    const date = new Date();
    const fullYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    let months = ['','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',''];
    let years = [''];

    if (startYear === fullYear) {
        months = [''];
        for (let i = 1; i <= currentMonth; i++) {
            months.push(i.toString());
        }
        months.push('');
    }

    let tmpYear = startYear
    for (let i = range; i > 0; i--) {
        years.push(tmpYear.toString())
        tmpYear--
    }
    years.push('')
    return {years , months}
}
