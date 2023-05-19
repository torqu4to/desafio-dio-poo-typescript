import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PrimeAccount } from './class/PrimeAccount'


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.getName())
companyAccount.deposit(200)
console.log('Saldo atual: R$' + companyAccount.getBalance())
companyAccount.withdraw(300)
console.log('Saldo atual: R$' + companyAccount.getBalance())
companyAccount.getLoan(1200)
console.log(companyAccount)

// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
// console.log(peopleAccount)
// peopleAccount.deposit()

const testAccount: PeopleAccount = new PeopleAccount(1384908230, 'Bruno', 33)
console.log(testAccount.getName()) 
testAccount.deposit(133.3)
console.log('Saldo atual: R$' + testAccount.getBalance())
testAccount.withdraw(100)
console.log('Saldo atual: R$' + testAccount.getBalance())
console.log(testAccount)

const FirstPrimeAccount: PrimeAccount = new PrimeAccount('Jorge', 23)
console.log(FirstPrimeAccount.getName()) 
FirstPrimeAccount.deposit(133.3)
console.log('Saldo atual: R$' + FirstPrimeAccount.getBalance())
FirstPrimeAccount.withdraw(100)
console.log('Saldo atual: R$' + FirstPrimeAccount.getBalance())
FirstPrimeAccount.depositBonus(23.33, 10)
console.log(FirstPrimeAccount)
