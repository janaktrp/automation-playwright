// utils/dateUtils.ts

export class DateUtils {

    //Add the specified number of days to a date.

    static addDays(date: Date, days: number): Date {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    //Add the specified number of days to a date. Input as string

    static addDays_string(date: string, days: number): string {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result.toISOString().split('T')[0];
    }



    // Subtract the specified number of days from a date.

    static subtractDays(date: Date, days: number): Date {
        return this.addDays(date, -days);
    }


    // Format a date as MM/DD/YYYY.

    static formatMMDDYYYY(date: Date): string {
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();

        return `${month}/${day}/${year}`;
    }


    //Format a date as YYYY-MM-DD. Useful for API requests and database validation.

    static formatYYYYMMDD(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    // Return today's date formatted as MM/DD/YYYY.

    static todayMMDDYYYY(): string {
        return this.formatMMDDYYYY(new Date());
    }


    // Return today's date formatted as YYYY-MM-DD.

    static todayYYYYMMDD(): string {
        return this.formatYYYYMMDD(new Date());
    }


    // Check whether date1 is before date2.

    static isBefore(date1: Date, date2: Date): boolean {
        return date1.getTime() < date2.getTime();
    }


    // Checks whether date1 is after date2.

    static isAfter(date1: Date, date2: Date): boolean {
        return date1.getTime() > date2.getTime();
    }


    // Checks whether two dates represent the same calendar date.

    static isSameDate(date1: Date, date2: Date): boolean {
        return this.formatYYYYMMDD(date1) === this.formatYYYYMMDD(date2);
    }


    // Returns the start of the current month.

    static startOfMonth(date: Date = new Date()): Date {
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }


    // Returns the end of the current month.

    static endOfMonth(date: Date = new Date()): Date {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }


    //Returns a random date between two dates.

    static randomDate(start: Date, end: Date): Date {
        const startTime = start.getTime();
        const endTime = end.getTime();

        return new Date(
            startTime + Math.random() * (endTime - startTime)
        );
    }
}