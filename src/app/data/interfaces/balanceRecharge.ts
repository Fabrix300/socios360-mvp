import { User } from "./user";

export interface BalanceRecharge {
    amount: number,
    cardNumber: string,
    cvc: string,
    dueDate: string,
    cardHolderName: string,
    operationDate: string,
    user: User
}