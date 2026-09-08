import fs from 'fs';

export class JsonUtils {

    // Reads a JSON file and returns the parsed object
    static readJson<T>(filePath: string): T {
        const content = fs.readFileSync(filePath, 'utf-8');

        return JSON.parse(content) as T;
    }

    // Writes an object to a JSON file
    static writeJson<T>(
        filePath: string,
        data: T
    ): void {
        const content = JSON.stringify(data, null, 4);

        fs.writeFileSync(filePath, content, 'utf-8');
    }

    // Updates an existing JSON file
    static updateJson<T extends Record<string, any>>(
        filePath: string,
        updates: Partial<T>
    ): void {
        const data = this.readJson<T>(filePath);

        const updatedData = {
            ...data,
            ...updates
        };

        this.writeJson(filePath, updatedData);
    }

    // Checks whether a JSON file exists
    static fileExists(filePath: string): boolean {
        return fs.existsSync(filePath);
    }

    // Deletes a JSON file
    static deleteJson(filePath: string): void {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }

    // Returns a value for a top-level JSON property
    static getValue<T>(
        filePath: string,
        key: string
    ): T {
        const data = this.readJson<Record<string, T>>(filePath);

        if (!(key in data)) {
            throw new Error(`Property '${key}' does not exist`);
        }

        return data[key];
    }

    // Checks whether a JSON property exists
    static hasProperty(
        filePath: string,
        key: string
    ): boolean {
        const data = this.readJson<Record<string, unknown>>(filePath);

        return key in data;
    }

    // Removes a top-level JSON property
    static removeProperty(
        filePath: string,
        key: string
    ): void {
        const data = this.readJson<Record<string, unknown>>(filePath);

        if (!(key in data)) {
            throw new Error(`Property '${key}' does not exist`);
        }

        delete data[key];

        this.writeJson(filePath, data);
    }

    // Returns all top-level property names
    static getKeys(filePath: string): string[] {
        const data = this.readJson<Record<string, unknown>>(filePath);

        return Object.keys(data);
    }

    // Returns the number of top-level properties
    static getPropertyCount(filePath: string): number {
        return this.getKeys(filePath).length;
    }

    // Merges two JSON objects
    static mergeJson<T extends Record<string, any>>(
        first: T,
        second: Partial<T>
    ): T {
        return {
            ...first,
            ...second
        };
    }

    // Validates whether a file contains valid JSON
    static isValidJson(filePath: string): boolean {
        try {
            this.readJson(filePath);
            return true;
        } catch {
            return false;
        }
    }
}