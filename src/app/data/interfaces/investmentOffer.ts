import { BaseInterface } from './baseInterface';
import { CurrencyType } from './currencyType';
import { InvestmentType } from './investmentType';
import { User } from './user';

export interface InvestmentOffer extends BaseInterface {
    investmentName: string,
    investmentDesc: string,
    investmentHistory: string,
    investmentRisks: string,
    investmentType: InvestmentType,
    investmentEnvironmentalCommitments?: string;
    endDate: string,
    //currencyType: CurrencyType,
    financingTarget: number,
    currentFinancing: number,
    annualizedRate: number,
    userOwner: User
    imageURL?: string
    backers: User[]
}