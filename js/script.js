'use strict';
let  money=20000, //переменныйе для задания
    income = 'автоэлектрик в автосервисе, электрик обычный, работа на севере', 
    addExpenses = 'комуналка , электричество ,топливо для автромобиля', 
    deposit = true, 
    mission = 100000, 
    period = 6,
    
   // budgetMonth = 0, //бютжет на месятц  //  5
    expenses = 0;
  let  arr = addExpenses.split(',');
   // alert('модальное окно-(alert!)');
    console.log(' сообщение для консоли!');
    console.log('Цель заработать',mission ,'рублей/долларов/гривен/юани');
//..........................................................
 money = +prompt('Ваш месячный доход?');
 addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
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
  const showTypeOf= (a)=>{   //-7
    console.log(typeof(a));
  };
const incomeLevel =( Day)=>{     // функция урвень дохода
    if(Day > 1200){
      console.log('e вас высокий уровень дохода');
    }else if(Day > 600 && Day < 1200){
    console.log('у вас средний уровень дохода');
    }else if(Day < 600 && Day >= 1){
    console.log('у вас низкий уровень дохода');
    }else{
    console.log('Что то пошло не так');
  }
};

  //................................
  let accumulatedMonth = getAccumulatedMonth(money ,getExpensesMonth(amount1, amount2)); // 3
  let budgetDay = Math.floor(accumulatedMonth/30);
//budgetMonth = money -(amount1 + amount2);// 5
//period = Math.ceil(mission / budgetMonth);//Math.ceil(5.1)округление в большую сторону



 console.log('amount1:',amount1);
 console.log('amount2:',amount2);
 console.log(' статья расходов1:',expenses1);
 console.log(' статься расходов2:',expenses2);
 console.log('бютжет на месяц :',accumulatedMonth);
 console.log('бютжет на день:',budgetDay);
 console.log('цель будет достигнута за ',getTargetMonth(mission,accumulatedMonth),'месяцев');
 console.log('результат',accumulatedMonth);
 console.log('getExpensesMonth',getExpensesMonth);


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