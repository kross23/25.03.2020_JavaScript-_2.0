'use strict';
let  money=20000, //переменныйе для задания
    income = 'автоэлектрик в автосервисе, электрик обычный, работа на севере', 
    addExpenses = '', 
    deposit = true, 
    mission = 100000, 
    period = 6,
   // budgetMonth = 0, //бютжет на месятц  //  5
    expenses = 0;
  
   // alert('модальное окно-(alert!)');
    console.log(' сообщение для консоли!');
    console.log('Цель заработать',mission ,'рублей/долларов/гривен/юани');
//..........................................................
 money = +prompt('Ваш месячный доход?');
 addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
 let  arr = addExpenses.split(',');
 deposit = confirm('Есть ли у вас депозит в банке?');
 console.log(typeof(money));
 console.log('длина', addExpenses.length);
 console.log(deposit);

 let amount1 = 0;
 let amount2 = 0;
 let expenses1;
 let expenses2;
   expenses1 = prompt(' статья расходов:');
   amount1 = +prompt('сумма?');
   expenses2 = prompt('статья расходов:');
   amount2 = +prompt('сумма?');


//........................function
const getExpensesMonth =(a,b)=>{  //   1
  return a+b;
  };

  const getAccumulatedMonth =(mon,callBack)=>{  //  2
  return mon - callBack;
  };

  const getTargetMonth =(a, b)=>{      // 4
  return  Math.ceil(a / b);
  };
  let accumulatedMonth = getAccumulatedMonth(money ,getExpensesMonth(amount1, amount2)); // 3
  let budgetDay = Math.floor(accumulatedMonth/30);

  const getStatusIncome =()=>{    // функция урвень дохода  
    if(budgetDay > 1200){
      console.log('у вас высокий уровень дохода');
    }else if(budgetDay > 600 && budgetDay < 1200){
      console.log('у вас средний уровень дохода');
    }else if(budgetDay < 600 && budgetDay >= 1){
    console.log('у вас низкий уровень дохода');
    }else{
      console.log('Что то пошло не так');
    }
  };
  
  //.........................
  const showTypeOf= ()=>{   //-7
    console.log(' чистый доход в месяц getExpensesMonth:', accumulatedMonth);
    console.log('Вывод возможных расходов в виде массива (addExpenses)',arr);
    console.log('цель будет достигнута за ',getTargetMonth(mission,accumulatedMonth),'месяцев');
    console.log( 'budgetDay',budgetDay );
  
  };
 showTypeOf();
  getStatusIncome();

//заготовка )
//  let ArrExpenses = [];
//  let ArrMoney = []; 
//  if(confirm('Введите обязательную статью расходов?')){
//   let int = +prompt('сколько статей хотите добавить?');
//  for(let i=0; i < int; i++){
//     ArrExpenses[i] = prompt('Введите обязательную статью расходов:');
//     ArrMoney[i] = +prompt('Введите сумму');
//  }
// }else{
// console.log('расходов  нет ');
// }