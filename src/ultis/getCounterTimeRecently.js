function getCounterTimeRecently(timeRecently) {
    const date = new Date();

    let time = date.getTime() / 1000;

    let timeFormat = Math.ceil(time - timeRecently);
    let day = Math.ceil(timeFormat / (3600 * 24));

    if (day > 7) {
        day = '1 tuần';
    } else if (day >= 14) {
        day = '2 tuần';
    } else {
        day += ' ngày';
    }
    return day;
}

export default getCounterTimeRecently;
