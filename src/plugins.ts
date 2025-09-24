
const weekDays = [
    'Sunday', 'Monday', 'Tueseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]

export const defaultPlugin = {
    getWeekDay(index: number, options?: {ddd?: boolean, dddd?: boolean}) {
        if(options.ddd == true) {
            return weekDays[index].substring(0, 3);
        }
        return weekDays[index];
    },

    getMonthName(index: number, options?: {mmm?: boolean, mmmm?: boolean, mmmmm?: boolean}) {
        if(options.mmm == true) {
            return monthNames[index].substring(0, 3);
        } else if(options.mmmmm == true) {
            return monthNames[index][0];
        }
        return monthNames[index];
    }
}

export type Plugin = typeof defaultPlugin;
