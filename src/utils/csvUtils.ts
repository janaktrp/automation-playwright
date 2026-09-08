
import fs from 'fs';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';

export class CsvUtils {

    // Reads a CSV file and returns the contents as an array of objects
    static readCsv(filePath: string): Record<string, string>[] {
        const content = fs.readFileSync(filePath, 'utf-8');

        return parse(content, {
            columns: true,
            skip_empty_lines: true,
            trim: true
        });
    }

    // Writes an array of objects to a CSV file
    static writeCsv(
        filePath: string,
        data: Record<string, string>[]
    ): void {
        const content = stringify(data, {
            header: true
        });

        fs.writeFileSync(filePath, content, 'utf-8');
    }

    // Appends rows to an existing CSV file
    static appendCsv(
        filePath: string,
        data: Record<string, string>[]
    ): void {
        const content = stringify(data, {
            header: false
        });

        fs.appendFileSync(filePath, content, 'utf-8');
    }

    // Returns the number of data rows in a CSV file
    static getRowCount(filePath: string): number {
        return this.readCsv(filePath).length;
    }

    // Returns all column names from a CSV file
    static getHeaders(filePath: string): string[] {
        const data = this.readCsv(filePath);

        if (data.length === 0) {
            return [];
        }

        return Object.keys(data[0]);
    }

    // Returns a specific row by zero-based index
    static getRow(
        filePath: string,
        rowIndex: number
    ): Record<string, string> {
        const data = this.readCsv(filePath);

        if (rowIndex < 0 || rowIndex >= data.length) {
            throw new Error(`Row index ${rowIndex} is out of range`);
        }

        return data[rowIndex];
    }

    // Returns a specific cell value
    static getCellValue(
        filePath: string,
        rowIndex: number,
        columnName: string
    ): string {
        const row = this.getRow(filePath, rowIndex);

        if (!(columnName in row)) {
            throw new Error(`Column '${columnName}' does not exist`);
        }

        return row[columnName];
    }

    // Finds the first row where a column matches the specified value
    static findRow(
        filePath: string,
        columnName: string,
        value: string
    ): Record<string, string> | undefined {
        const data = this.readCsv(filePath);

        return data.find(row => row[columnName] === value);
    }

    // Finds all rows where a column matches the specified value
    static findRows(
        filePath: string,
        columnName: string,
        value: string
    ): Record<string, string>[] {
        const data = this.readCsv(filePath);

        return data.filter(row => row[columnName] === value);
    }

    // Checks whether a value exists in a specific column
    static containsValue(
        filePath: string,
        columnName: string,
        value: string
    ): boolean {
        return this.findRow(filePath, columnName, value) !== undefined;
    }

    // Checks whether a CSV file exists
    static fileExists(filePath: string): boolean {
        return fs.existsSync(filePath);
    }

    // Deletes a CSV file
    static deleteCsv(filePath: string): void {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
}