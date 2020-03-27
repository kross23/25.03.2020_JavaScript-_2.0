let  money=20000, //переменныйе для задания
    income = '', 
    addExpenses = 'автоэлектрик в автосервисе, электрик обычный, работа на севере', 
    deposit = 0, 
    mission = 1000000, 
    period = 6,
    budgetDay = Math.floor(money/30);
  let  arr = addExpenses.split(',');
    alert('модальное окно-(alert!)');
    console.log(' сообщение для консоли!');
    console.log(typeof(money));
    console.log(typeof(income));
    console.log(typeof(deposit));
    console.log('длина строки',addExpenses.length);
    console.log('Период равен',period,'месяцев');
    console.log('Цель заработать',mission ,'рублей/долларов/гривен/юани');
    let a = addExpenses.toLocaleLowerCase();
    console.log(a);
    let b = addExpenses.toLocaleUpperCase();
    console.log(b);
    console.log( 'budgetDay', budgetDay);
    console.log(arr,' строка разбита по запятым ');
    arr = addExpenses.split('');
    console.log(arr,' строка разбита по символам ');