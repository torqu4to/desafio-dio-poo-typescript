import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PrimeAccount } from './class/PrimeAccount'

// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
// console.log(peopleAccount)
// peopleAccount.deposit()
// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// companyAccount.getLoan(1200)
// console.log(companyAccount)

// const testAccount: PeopleAccount = new PeopleAccount(13, 'Bruno', 33)
// testAccount.deposit(133.3)
// console.log(testAccount.getBalance())
// testAccount.deposit(20.5)
// testAccount.withdraw(10)
// console.log(testAccount);
 
const FirstPrimeAccount: PrimeAccount = new PrimeAccount('Jorge', 23)
FirstPrimeAccount.depositExtra(23.33)
console.log(FirstPrimeAccount)