import { DioAccount } from "./DioAccount";


export class PrimeAccount extends DioAccount{

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    depositBonus = (valueDeposit: number, bonus: number): void => {
        if(this.validateStatus()){
            const amount = valueDeposit + bonus
            this.setNewBalance(amount)
            // console.log(finalValue)
            console.log(`Depósito no valor de R$${valueDeposit} efetuado com sucesso!`)
            console.log('Você ganhou um bônus de R$10,00 no seu depósito.')
        } 
    }
}