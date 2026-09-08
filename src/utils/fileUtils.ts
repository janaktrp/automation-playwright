import fs from 'fs';
import path from 'path';

export class FileUtils {


    // Checks whether a file exists

    static fileExists(filePath: string): boolean {
        return fs.existsSync(filePath);
    }


    //Creates a directory if it does not already exist

    static createDirectory(directoryPath: string): void {
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, { recursive: true });
        }
    }


    // Deletes a file if it exists

    static deleteFile(filePath: string): void {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }


    // Copies a file from source to destination

    static copyFile(sourcePath: string, destinationPath: string): void {
        fs.copyFileSync(sourcePath, destinationPath);
    }


    // Moves or renames a file

    static moveFile(sourcePath: string, destinationPath: string): void {
        fs.renameSync(sourcePath, destinationPath);
    }


    // Reads a text file and returns its contents

    static readTextFile(filePath: string): string {
        return fs.readFileSync(filePath, 'utf-8');
    }


    // Writes text content to a file. Creates or overwrites the file.

    static writeTextFile(filePath: string, content: string): void {
        fs.writeFileSync(filePath, content, 'utf-8');
    }


    // Appends text content to an existing file

    static appendToFile(filePath: string, content: string): void {
        fs.appendFileSync(filePath, content, 'utf-8');
    }


    // Returns the file extension.

    static getFileExtension(filePath: string): string {
        return path.extname(filePath);
    }


    // Returns the file name including extension

    static getFileName(filePath: string): string {
        return path.basename(filePath);
    }

    // Returns the file name without extension

    static getFileNameWithoutExtension(filePath: string): string {
        return path.basename(filePath, path.extname(filePath));
    }


    // Returns the size of a file in bytes.

    static getFileSize(filePath: string): number {
        return fs.statSync(filePath).size;
    }
}

