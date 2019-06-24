import moment from 'moment';
export class CalendarUtils {
    static compareCalendarDate(date1, date2) {
        return date1.year === date2.year && date1.month === date2.month && date1.date === date2.date;
    }
    static compareCalendarDate2Moment(date, moment) {
        return date.year === moment.get('y') && date.month === moment.get('M') && date.date === moment.get('D');
    }
    static moment2CalendarDate(moment) {
        return { year: moment.get('y'), month: moment.get('M'), date: moment.get('D') };
    }
    static calendarDate2Moment(date, locale) {
        if (!date) {
            return;
        }
        const result = moment();
        if (locale) {
            result.locale(locale);
        }
        return result.year(date.year).month(date.month).date(date.date);
    }
}
