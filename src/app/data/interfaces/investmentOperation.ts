import { Business } from "./business"
import { InvestmentOffer } from "./investmentOffer"
import { InvestmentType } from "./investmentType"

export interface InvestmentOperation {
    id: number
    business: Business,
    investmentOffer: InvestmentOffer,
    investmentType: InvestmentType,
    investedAmount: number,
    expectedProfit: number,
    operationDate: string
}