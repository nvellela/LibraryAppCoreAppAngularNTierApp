import { Iresult } from "../interfaces/iresult";

export class ApplicationResult implements Iresult {
    id:number;
    success: boolean;
    userMessage: string;
}
