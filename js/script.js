'use strict';
let  money=20000, //переменныйе для задания
    income = 'автоэлектрик', 
    addExpenses = '', 
    deposit = true, 
    mission = 100000, 
    period = 6,
    expenses = [];
  
   // alert('модальное окно-(alert!)');
    console.log(' сообщение для консоли!');
    console.log('Цель заработать',mission ,'рублей/долларов');
//..........................................................
 //money = +prompt('Ваш месячный доход?');
 let IsNamber=(n)=>{
  return !isNaN  (parseFloat(n)) && isFinite(n);
 };
 const statr = ()=>{
  do{
    money = prompt('Ваш месячный доход?');
  }while(!IsNamber(money));
  };

 statr();
 addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
 let  arr = addExpenses.split(',');
 deposit = confirm('Есть ли у вас депозит в банке?');
 console.log(typeof(money));
 console.log('длина', addExpenses.length);
 console.log(deposit);
 

//  let amount1 = 0;
//  let amount2 = 0;
//  let expenses1;
//  let expenses2;
//    expenses1 
//    amount1 = +prompt('сумма?');
//    expenses2 = prompt('статья расходов:');
   


//........................function

const getExpensesMonth =()=>{  
let Monysum = 0;
  for(let i=0;i<2;i++){
    let sum = 0;
     expenses[i] = prompt('введите статью расходов:','текст');
     sum = +prompt('во сколько это обойдется?','1500');
     if(!IsNamber(sum)){
       while(!IsNamber(sum)){
        sum = +prompt('во сколько это обойдется?','1500');
       }
       Monysum +=sum;
     }else{
       Monysum += sum;
     }

  }
  expenses.push(Monysum);
  console.log('расходы', expenses);
  };

  getExpensesMonth();

  const getAccumulatedMonth =(mon,callBack)=>{  
  return mon - callBack;
  };

  const getTargetMonth =(a, b)=>{     
  if(Math.ceil(a / b) < 0 ||Math.ceil(a / b) === Infinity){
    console.log('Цель не будет достигнута');
   } else{
    console.log('цель будет достигнута за ',Math.ceil(a / b),'месяцев');
   } 
  };

  let accumulatedMonth = getAccumulatedMonth(money,expenses[expenses.length-1]); // 
  console.log('expenses[expenses.length-1]: ', expenses[expenses.length-1]);
  console.log(typeof(expenses[expenses.length-1]));
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
  const showTypeOf= ()=>{  
    console.log(' чистый доход в месяц getExpensesMonth:', accumulatedMonth);
    console.log('Вывод возможных расходов в виде массива (addExpenses)',arr);
    console.log( 'budgetDay',budgetDay );
    getTargetMonth(  mission ,accumulatedMonth );
  
  };
  showTypeOf();
  getStatusIncome();
