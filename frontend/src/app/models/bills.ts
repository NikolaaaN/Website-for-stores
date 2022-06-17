import { Bill } from "./bill"

export class Bills{
    bills: Array<Bill> = []
    finalPrice: number
    fullName: string
    slip: string
    orderer: string
    brLK: string
    date: Date
    type: string
    taxPrice: number
    companyName: string
    storeName: string
    payingOption: string

    getDate(){
        return this.date.getDate()
    }
}