export declare const defaultPlugin: {
    getWeekDay(index: number, options?: {
        ddd?: boolean;
        dddd?: boolean;
    }): string;
    getMonthName(index: number, options?: {
        mmm?: boolean;
        mmmm?: boolean;
        mmmmm?: boolean;
    }): string;
};
export declare type Plugin = typeof defaultPlugin;
