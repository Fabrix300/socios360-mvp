import { User } from "./user";

export enum TransactionType {
    balanceRecharge,
    ingress,
    egress
}

export interface TransactionOperation {
    id: number,
    amount: number,
    operationDate: string,
    transactionType: TransactionType,
    user: User
}