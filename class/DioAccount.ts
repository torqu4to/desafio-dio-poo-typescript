export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valueDeposit: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance + valueDeposit
      console.log(`Depósito no valor de R$${valueDeposit} efetuado com sucesso!`)
    } 
    
  } 

  withdraw = (valueWithdraw: number): void => {
    if (this.validateStatus() && this.balance > 0) {
      if (valueWithdraw > this.balance){
        this.balance = 0

        console.log(`Saque no valor de R$${this.balance} efetuado com sucesso!`)
      }
      this.balance = this.balance - valueWithdraw

      console.log(`Saque no valor de R$${valueWithdraw} efetuado com sucesso!`)
    } else throw new Error('Você não possui saldo para sacar.') 

  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  setNewBalance = (n: number): number => {
    return this.balance = this.balance + n
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida/inativa')
  }
}