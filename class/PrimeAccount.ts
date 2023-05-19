import { DioAccount } from "./DioAccount";


export class PrimeAccount extends DioAccount{

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    depositExtra = (valueDeposit: number): void => {
        if(this.validateStatus()){
            this.setNewBalance(valueDeposit)
            console.log(`Depósito no valor de R$${valueDeposit} efetuado com sucesso!`)
            console.log('Você ganhou um bônus de R$10,00 no seu depósito')
          } 
    }
}