let  money=20000, //переменныйе для задания
    income = 'автоэлектрик в автосервисе, электрик обычный, работа на севере', 
    addExpenses = 'комуналка , электричество ,топливо для автромобиля', 
    deposit = true, 
    mission = 1000000, 
    period = 6,
    budgetDay = Math.floor(money/30), 
    budgetMonth = 0, //бютжет на месятц
    expenses = 0;
  let  arr = addExpenses.split(',');
   // alert('модальное окно-(alert!)');
    console.log(' сообщение для консоли!');
   // console.log(typeof(money));
   // console.log(typeof(income));
   // console.log(typeof(deposit));
   // console.log('длина строки',addExpenses.length);
   // console.log('Период равен',period,'месяцев');
   // console.log('Цель заработать',mission ,'рублей/долларов/гривен/юани');
    //console.log('строка в нижнем регистре ', addExpenses.toLocaleLowerCase());
   // console.log('строка в верхнем регистре', addExpenses.toLocaleUpperCase());
   // console.log( 'budgetDay', budgetDay);
   // console.log(arr,' строка разбита по запятым ');
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
 //пункт 5
 if(confirm('Введите обязательную статью расходов?')){
   expenses1 = prompt('Введите обязательную статью расходов:');
   amount1 = +prompt('Во сколько это обойдется?');
   expenses += amount1;
   expenses2 = prompt('Введите обязательную статью расходов:');
   amount2 = +prompt('Во сколько это обойдется?');
   expenses += amount2;
 }else{
   alert(' статей нет');
 }

//пункт 6 
budgetMonth = money - expenses;
 //пунк 7
period = Math.ceil(mission / budgetMonth);//Math.ceil(5.1)округление в большую сторону
 //пункт 8
budgetDay = Math.floor((money - expenses)/30);
// 9 пункт
if(budgetDay > 1200){
  console.log('e вас высокий уровень дохода');
}else if(budgetDay > 600 && budgetDay < 1200){
 console.log('у вас средний уровень дохода');
}else if(budgetDay < 600 && budgetDay > 1){
console.log('у вас низкий уровень дохода');
}else{
console.log('Что то пошло не так');
}

 console.log('amount1:',amount1);
 console.log('amount2:',amount2);
 console.log('expenses1:',expenses1);
 console.log('expenses2:',expenses2);
 console.log('budgetMonth:',budgetMonth);
 console.log('budgetDay:',budgetDay);
 console.log('цель будет достигнута за ',period,'месяцев');


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