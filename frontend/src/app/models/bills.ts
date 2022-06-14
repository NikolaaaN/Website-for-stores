import { Bill } from "./bill"

export class Bills{
    bills: Array<Bill>
    finalPrice: number
    fullName: string
    slip: string
    orderer: string
    brLK: string
    date: Date
    type: string
    taxPrice: number

    getDate(){
        return this.date.getDate()
    }
}