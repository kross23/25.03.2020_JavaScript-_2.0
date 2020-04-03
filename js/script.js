'use strict';
let  money=0,
 IsNamber=(n)=>{
  return !isNaN(parseFloat(n)) && isFinite(n);
 };
const statr = ()=>{
  do{
    money = prompt('Ваш месячный доход?');
  }while(!IsNamber(money) || money === '' || money === null);
  };
  statr();

let target = 150000;
  let appData={
    target : 150000,
       budget:money,
       income:{},
    addIncome:[],
     expenses:{},
     addExpenses:[],
     deposit: false,
     mission: 150000,
      period: 3,
      budgetDay:0,
      budgetMonth:0,
      expensesMonth:0,

      //---методы----
      ascing:()=>{
        let  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
          appData.addExpenses = addExpenses.toLowerCase().split(',');
          appData.deposit = confirm('Есть ли у вас депозит в банке?');

          for(let i=0;i<2;i++){
            let sum , text;
              text = prompt('введите статью расходов:','текст');
              sum = +prompt('во сколько это обойдется?','1500');
              if(!IsNamber(sum)){

               while(!IsNamber(sum)){
                sum = +prompt('во сколько это обойдется?','1500');
               }
                   appData.expenses[text] = sum;
                   
              }else{
                    appData.expenses[text]= sum;               
              }
          }
          console.log('обьект с расходами',appData.expenses);
      },
      getExpensesMonth:()=>{  
        for(let i in appData.expenses){
          
          appData.expensesMonth += appData.expenses[i];
        }
console.log('сумма расходов-', appData.expensesMonth);
      },
      getBudget:(s)=>{  // пере
        appData.budget = s;
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay   = Math.ceil(appData.budgetMonth/30);
        console.log('appData.budgetDay: ', appData.budgetDay);
        console.log('appData.budgetMonth: ', appData.budgetMonth);
    },

    getTargetMonth : (a)=>{     
      if(Math.ceil(a / appData.budgetMonth) < 0 ||Math.ceil(a / appData.budgetMonth) === Infinity){
        console.log('Цель не будет достигнута');
       } else{
      console.log('цель будет достигнута за ',Math.ceil(a / appData.budgetMonth),'месяцев');
       } 
      },
      getStatusIncome :()=>{    // функция урвень дохода  
        if(appData.budgetDay > 1200){
          console.log('у вас высокий уровень дохода');
        }else if(appData.budgetDay > 600 && appData.budgetDay < 1200){
          console.log('у вас средний уровень дохода');
        }else if(appData.budgetDay < 600 && appData.budgetDay >= 1){
        console.log('у вас низкий уровень дохода');
        }else{
          console.log('Что то пошло не так');
        }
      }
  };

//..........................................................

 appData.ascing();
 appData.getExpensesMonth();
appData.getBudget(money);

appData.getTargetMonth(target);
appData.getStatusIncome();
 console.log(typeof(money));
 console.log(appData.deposit);
 console.log('income', appData.income);
