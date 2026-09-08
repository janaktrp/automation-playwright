export class StringUtils {

    // Checks whether a string is null, undefined, or empty
    static isNullOrEmpty(value: string | null | undefined): boolean {
        return value === null || value === undefined || value === '';
    }

    // Checks whether a string is null, undefined, empty, or contains only whitespace
    static isNullOrWhiteSpace(value: string | null | undefined): boolean {
        return value === null || value === undefined || value.trim() === '';
    }

    // Removes leading and trailing whitespace
    static trim(value: string): string {
        return value.trim();
    }

    // Removes all whitespace from a string
    static removeWhitespace(value: string): string {
        return value.replace(/\s/g, '');
    }

    // Converts a string to lowercase
    static toLowerCase(value: string): string {
        return value.toLowerCase();
    }

    // Converts a string to uppercase
    static toUpperCase(value: string): string {
        return value.toUpperCase();
    }

    // Capitalizes the first character of a string
    static capitalize(value: string): string {
        if (value.length === 0) {
            return value;
        }

        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    // Converts a string to camelCase
    static toCamelCase(value: string): string {
        return value
            .trim()
            .toLowerCase()
            .replace(/[-_\s]+(.)?/g, (_, character) =>
                character ? character.toUpperCase() : ''
            );
    }

    // Converts a string to PascalCase
    static toPascalCase(value: string): string {
        const camelCase = this.toCamelCase(value);

        return this.capitalize(camelCase);
    }

    // Converts a string to kebab-case
    static toKebabCase(value: string): string {
        return value
            .trim()
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .replace(/[\s_]+/g, '-')
            .toLowerCase();
    }

    // Converts a string to snake_case
    static toSnakeCase(value: string): string {
        return value
            .trim()
            .replace(/([a-z])([A-Z])/g, '$1_$2')
            .replace(/[\s-]+/g, '_')
            .toLowerCase();
    }

    // Checks whether a string contains another string
    static contains(value: string, searchValue: string): boolean {
        return value.includes(searchValue);
    }

    // Checks whether a string starts with another string
    static startsWith(value: string, searchValue: string): boolean {
        return value.startsWith(searchValue);
    }

    // Checks whether a string ends with another string
    static endsWith(value: string, searchValue: string): boolean {
        return value.endsWith(searchValue);
    }

    // Replaces the first occurrence of a string
    static replace(value: string, searchValue: string, replacement: string): string {
        return value.replace(searchValue, replacement);
    }

    // Replaces all occurrences of a string
    static replaceAll(value: string, searchValue: string, replacement: string): string {
        return value.replaceAll(searchValue, replacement);
    }

    // Returns the number of characters in a string
    static length(value: string): number {
        return value.length;
    }

    // Repeats a string the specified number of times
    static repeat(value: string, count: number): string {
        return value.repeat(count);
    }

    // Extracts a substring between two strings
    static substringBetween(
        value: string,
        start: string,
        end: string
    ): string {
        const startIndex = value.indexOf(start);

        if (startIndex === -1) {
            return '';
        }

        const contentStart = startIndex + start.length;
        const endIndex = value.indexOf(end, contentStart);

        if (endIndex === -1) {
            return '';
        }

        return value.substring(contentStart, endIndex);
    }

    // Masks part of a string with asterisks
    static mask(value: string, visibleCharacters: number = 4): string {
        if (value.length <= visibleCharacters) {
            return '*'.repeat(value.length);
        }

        const maskedLength = value.length - visibleCharacters;

        return '*'.repeat(maskedLength) + value.slice(-visibleCharacters);
    }

    // Checks whether a string contains only numbers
    static isNumeric(value: string): boolean {
        return /^\d+$/.test(value);
    }

    // Checks whether a string contains only letters
    static isAlphabetic(value: string): boolean {
        return /^[A-Za-z]+$/.test(value);
    }

    // Checks whether a string contains only letters and numbers
    static isAlphanumeric(value: string): boolean {
        return /^[A-Za-z0-9]+$/.test(value);
    }

    // Checks whether a string is a valid email address
    static isValidEmail(value: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    // Generates a random string of the specified length
    static randomString(length: number): string {
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let result = '';

        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }

        return result;
    }

    // Generates a random numeric string of the specified length
    static randomNumericString(length: number): string {
        let result = '';

        for (let i = 0; i < length; i++) {
            result += Math.floor(Math.random() * 10);
        }

        return result;
    }
}
