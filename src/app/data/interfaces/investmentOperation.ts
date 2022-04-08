import { Business } from "./business"
import { InvestmentOffer } from "./investmentOffer"
import { InvestmentType } from "./investmentType"
import { User } from "./user"

export interface InvestmentOperation {
    id: number
    user: User,
    investmentOffer: InvestmentOffer,
    investedAmount: number,
    expectedProfit: number,
    operationDate: string
}