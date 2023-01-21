import { SolutionCode } from "./solutionCode.model"

export class SolutionFile implements SolutionCode {
    fileName: string = "";
    fileSize: number = 0;
    fileBase64: string = "";
    fileExtension: string = "";
}