import { InvestmentOperation } from "./investmentOperation"

export interface Investor {
    id:number,
    names: string,
    surnames: string,
    dob: string,
    docType: string,
    docNumber?: string
    money: number,
}