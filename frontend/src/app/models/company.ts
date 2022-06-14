
import { Bills } from "./bills"
import { Goods } from "./goods"

export class Company{
    fullName : string
    username : string
    password : string
    phone : string
    email : string //unique
    companyName: string
    address : string
    taxID : string
    companyID : string
    category: string
    code: string
    pdv: boolean
    status: string
    bankAccount: string
    noOfStorages: number
    noOfCashRegisters: number
    bills: Array<Bills>
    goods: Array<Goods>
}