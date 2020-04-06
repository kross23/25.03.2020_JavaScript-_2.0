'use strict';
let money,
  IsNamber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };
const statr = () => {
  do {
    money = prompt('Ваш месячный доход?');
  } while (!IsNamber(money) || money === '' || money === null);
};
statr();


let appData = {
  target: 150000,
  budget: money,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  manyDeposit: 0,
  mission: 150000,
  period: 3,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,

  //---методы----
  asking: () => {
    if (confirm('есть ли у вас дополнительный заработок?')) {
      let itemIncome = prompt('какой дополнительный заработок', 'такси');
      let cashIncome = prompt('сколько на этом выходит?', '500');
      appData.income[itemIncome] = cashIncome;
    }

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) {
      let sum, text;
      text = prompt('введите статью расходов:', 'текст');
      sum = +prompt('во сколько это обойдется?', '1500');
      if (!IsNamber(sum)) {

        while (!IsNamber(sum)) {
          sum = +prompt('во сколько это обойдется?', '1500');
        }
        appData.expenses[text] = sum;

      } else {
        appData.expenses[text] = sum;
      }
    }
    console.log('обьект с расходами', appData.expenses);
  },
  getExpensesMonth: () => {
    for (let i in appData.expenses) {
      appData.expensesMonth += appData.expenses[i];
    }
    console.log('сумма расходов-', appData.expensesMonth);
  },
  getBudget: () => { // пере
    appData.budget = money;
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.ceil(appData.budgetMonth / 30);

  },
  getTargetMonth: (a) => {
    return appData.mission / appData.budgetMonth;
  },
  getStatusIncome: () => { // функция урвень дохода  
    if (appData.budgetDay > 1200) {
      console.log('у вас высокий уровень дохода');
    } else if (appData.budgetDay > 600 && appData.budgetDay < 1200) {
      console.log('у вас средний уровень дохода');
    } else if (appData.budgetDay < 600 && appData.budgetDay >= 1) {
      console.log('у вас низкий уровень дохода');
    } else {
      console.log('Что то пошло не так');
    }
  },
  getInfoDeposit: () => {
    if (appData.deposit) {
      appData.percentDeposit = prompt('годовой процент ?', '0,5');
      appData.manyDeposit = prompt('сумма депозита ', ' 10000');
    }
  },
  calcSavedMoney: () => {
    return appData.budgetMonth * appData.period;
  }

};

//..........................................................
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();

console.log('appData.calcSavedMoney(): ', appData.calcSavedMoney());
console.log(typeof (money));
console.log(appData.deposit);
console.log('расходы за месяц' + appData.expensesMonth);

console.log('Наша программа включает в себя данные:');
for (let i in appData) {
  console.log('ключ : ' + i + '   значение : ' + appData[i]);
}
console.log('money', appData.calcSavedMoney);
console.log('процент', appData.percentDeposit);
console.log('deposit', appData.manyDeposit);