import { BaseInterface } from "./baseInterface"
import { Business } from "./business"
import { Investor } from "./investor"

export interface User extends BaseInterface {
    email: string,
    password: string,
    phone?: number,
    accType: number
    investor?: Investor,
    business?: Business
}