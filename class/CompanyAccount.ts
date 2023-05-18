import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valueLoan: number): void => {
    if(this.validateStatus()){
      this.balance = valueLoan + this.balance
      console.log(`Voce pegou um empréstimo de R$${valueLoan}.`)
    } else throw new Error('Conta inválida!')
  }

}
