import { Bill } from "./bill"

export class Customer{
    username: string
    password: string
    name: string
    phone: string
    idCard: string
    bills: Array<Bill>
}