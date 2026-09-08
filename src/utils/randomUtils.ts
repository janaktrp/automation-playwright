export class RandomUtils {

    // Returns a random integer between min and max
    static randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Returns a random decimal between min and max
    static randomDecimal(min: number, max: number, decimals: number = 2): number {
        const value = Math.random() * (max - min) + min;

        return Number(value.toFixed(decimals));
    }

    // Returns a random boolean value
    static randomBoolean(): boolean {
        return Math.random() < 0.5;
    }

    // Returns a random character string
    static randomString(length: number): string {
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let result = '';

        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                this.randomInt(0, characters.length - 1)
            );
        }

        return result;
    }

    // Returns a random alphabetic string
    static randomAlphabetic(length: number): string {
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        let result = '';

        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                this.randomInt(0, characters.length - 1)
            );
        }

        return result;
    }

    // Returns a random numeric string
    static randomNumeric(length: number): string {
        const characters = '0123456789';

        let result = '';

        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                this.randomInt(0, characters.length - 1)
            );
        }

        return result;
    }

    // Returns a random alphanumeric string
    static randomAlphanumeric(length: number): string {
        return this.randomString(length);
    }

    // Returns a random email address
    static randomEmail(domain: string): string {
        return `testuser_${this.randomString(8).toLowerCase()}@${domain}`;
    }

    // Returns a random username
    static randomUsername(length: number = 8): string {
        return `user_${this.randomString(length).toLowerCase()}`;
    }

    // Returns a random phone number
    static randomPhoneNumber(): string {
        return `555${this.randomNumeric(7)}`;
    }

    // Returns a random item from an array
    static randomItem<T>(items: T[]): T {
        if (items.length === 0) {
            throw new Error('Array cannot be empty');
        }

        return items[this.randomInt(0, items.length - 1)];
    }




    // Returns a random password
    static randomPassword(length: number = 12): string {
        if (length < 4) {
            throw new Error('Password length must be at least 4');
        }

        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const special = '!@#$%^&*';

        const requiredCharacters = [
            this.randomItem(uppercase.split('')),
            this.randomItem(lowercase.split('')),
            this.randomItem(numbers.split('')),
            this.randomItem(special.split(''))
        ];

        const allCharacters =
            uppercase + lowercase + numbers + special;

        while (requiredCharacters.length < length) {
            requiredCharacters.push(
                this.randomItem(allCharacters.split(''))
            );
        }

        return requiredCharacters
            .sort(() => Math.random() - 0.5)
            .join('');
    }
}