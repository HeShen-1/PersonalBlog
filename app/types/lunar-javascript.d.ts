declare module 'lunar-javascript' {
    export class Solar {
        static fromDate(date: Date): Solar
        getLunar(): Lunar
        getXingZuo(): string
    }

    export class Lunar {
        getMonthInChinese(): string
        getDayInChinese(): string
        getYearInGanZhi(): string
        getYearShengXiao(): string
        getFestivals(): string[]
        getJieQi(): string
    }
}