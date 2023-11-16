// フォームを取得
let $input = document.querySelectorAll('.input');
let inputValue = $input.value;


// 追加ボタンを取得
const $addButton = document.querySelectorAll('.add_button');


// spanタグを取得
const $spanTag = document.querySelectorAll('span');

// 履歴ボタンを取得
const $pastButton = document.querySelectorAll('.past_button');


// 履歴ボックスを取得
const $outerBox = document.querySelectorAll('.outer_box');


// 予算の要素を取得
const $budget = document.querySelector('.budget');
const $myMoney = document.querySelector('#my_money');
const $budgetButton = document.querySelector('.budget_button');

// 支出総額の要素を取得
const $sumSpending = document.querySelector('.sum_spending');
const $sumButton = document.querySelector('.sum_button');

// 残高の要素を表示
const $baranceNumber = document.querySelector('.barance_number');


// ページロード時に配列データを引き継ぐor無かったら空配列を作る
let arrayValue0 = JSON.parse(localStorage.getItem('array0'));
if (arrayValue0 == null) {
  arrayValue0 = [];
}
let arrayValue1 = JSON.parse(localStorage.getItem('array1'));
if (arrayValue1 == null) {
  arrayValue1 = [];
}
let arrayValue2 = JSON.parse(localStorage.getItem('array2'));
if (arrayValue2 == null) {
  arrayValue2 = [];
}
let arrayValue3 = JSON.parse(localStorage.getItem('array3'));
if (arrayValue3 == null) {
  arrayValue3 = [];
}
let arrayValue4 = JSON.parse(localStorage.getItem('array4'));
if (arrayValue4 == null) {
  arrayValue4 = [];
}


// 食費データ追加
$addButton[0].addEventListener('click', () => {
  const inputValue0 = $input[0].value;
  arrayValue0.push(inputValue0);
  const jsonArrayValue0 = JSON.stringify(arrayValue0);
  localStorage.setItem('array0', jsonArrayValue0);
//   spanタグに表示
 $spanTag[0].textContent = `-${inputValue0}円`;

  $input[0].value = '';
});
const getArray0 = localStorage.getItem('array0');
if(getArray0 !== null) {
      const jsonGetArray0 = JSON.parse(getArray0);
      const p0 = jsonGetArray0[jsonGetArray0.length - 1];
      $spanTag[0].textContent = `-${p0}円`;
}


// 娯楽費データ追加
$addButton[1].addEventListener('click', () => {
  const inputValue1 = $input[1].value;
  arrayValue1.push(inputValue1);
  const jsonArrayValue1 = JSON.stringify(arrayValue1);
  localStorage.setItem('array1', jsonArrayValue1);
//   spanタグに表示
  $spanTag[1].textContent = `-${inputValue1}円`;

  $input[1].value = '';
});
const getArray1 = localStorage.getItem('array1');
//   nullでなかったらデータを取得してspanタグに表示
if(getArray1 !== null) {
      const jsonGetArray1 = JSON.parse(getArray1);
      const p1 = jsonGetArray1[jsonGetArray1.length - 1];
      $spanTag[1].textContent = `-${p1}円`;
}

// 交通費データ追加
$addButton[2].addEventListener('click', () => {
  const inputValue2 = $input[2].value;
  arrayValue2.push(inputValue2);
  const jsonArrayValue2 = JSON.stringify(arrayValue2);
  localStorage.setItem('array2', jsonArrayValue2);
//   spanタグに表示
  $spanTag[2].textContent = `-${inputValue2}円`;

  $input[2].value = '';
});
const getArray2 = localStorage.getItem('array2');
//   nullでなかったらデータを取得してspanタグに表示
if(getArray2 !== null) {
      const jsonGetArray2 = JSON.parse(getArray2);
      const p2 = jsonGetArray2[jsonGetArray2.length - 1];
      $spanTag[2].textContent = `-${p2}円`;
}


// 交際費データ追加
$addButton[3].addEventListener('click', () => {
  const inputValue3 = $input[3].value;
  arrayValue3.push(inputValue3);
  const jsonArrayValue3 = JSON.stringify(arrayValue3);
  localStorage.setItem('array3', jsonArrayValue3);
//   spanタグに表示
  $spanTag[3].textContent = `-${inputValue3}円`;
  $input[3].value = '';
});
//   nullでなかったらデータを取得してspanタグに表示
const getArray3 = localStorage.getItem('array3');
if(getArray3 !== null) {
      const jsonGetArray3 = JSON.parse(getArray3);
      const p3 = jsonGetArray3[jsonGetArray3.length - 1];
      $spanTag[3].textContent = `-${p3}円`;
}



// 日用品データ追加
$addButton[4].addEventListener('click', () => {
  const inputValue4 = $input[4].value;
  arrayValue4.push(inputValue4);
  const jsonArrayValue4 = JSON.stringify(arrayValue4);
  localStorage.setItem('array4', jsonArrayValue4);
//   spanタグに表示
  $spanTag[4].textContent = `-${inputValue4}円`;
  $input[4].value = '';
});
//   nullでなかったらデータを取得してspanタグに表示
const getArray4 = localStorage.getItem('array4');
if(getArray4 !== null) {
      const jsonGetArray4 = JSON.parse(getArray4);
      const p4 = jsonGetArray4[jsonGetArray4.length - 1];
      $spanTag[4].textContent = `-${p4}円`;
}

// それぞれの最後の要素を取得して文字列を数字に変換
const getdataArray0 = JSON.parse(localStorage.getItem("array0"));
const numDataArray0 = Number(getdataArray0[getdataArray0.length - 1]);
console.log(numDataArray0);
const getdataArray1 = JSON.parse(localStorage.getItem("array1"));
const numDataArray1 = Number(getdataArray1[getdataArray1.length - 1]);
console.log(numDataArray1);
const getdataArray2 = JSON.parse(localStorage.getItem("array2"));
const numDataArray2 = Number(getdataArray2[getdataArray2.length - 1]);
console.log(numDataArray2);
const getdataArray3 = JSON.parse(localStorage.getItem("array3"));
const numDataArray3 = Number(getdataArray3[getdataArray3.length - 1]);
console.log(numDataArray3);
const getdataArray4 = JSON.parse(localStorage.getItem("array4"));
const numDataArray4 = Number(getdataArray4[getdataArray4.length - 1]);
console.log(numDataArray4);
// 合計を取得
let todayTotal = numDataArray0 + numDataArray1 + numDataArray2 + numDataArray3 + numDataArray4;
localStorage.setItem("todayTotal", todayTotal);


// 更新ボタンをクリックした処理
$budgetButton.addEventListener('click', function(){
      let inputMoney = $myMoney.value;
      $budget.textContent = `${inputMoney}円`;
      localStorage.setItem("inputMoney", inputMoney);
      $myMoney.value = "";
})
const getInputMoney = localStorage.getItem("inputMoney");
if(getInputMoney !== null) {
      $budget.textContent = `${getInputMoney}円`;
}

// 算出ボタンをクリックした処理
$sumButton.addEventListener('click', function(){
      $sumSpending.textContent = `-${todayTotal}円`;
});
$sumSpending.textContent = `-${todayTotal}円`;

// 残高の計算
const total = localStorage.getItem("todayTotal");
$baranceNumber.textContent = `${Number(getInputMoney) - todayTotal}円`;




// 各履歴ボタンのページ遷移
$pastButton[0].addEventListener('click', () => {
      window.location.href = './food.html';
});
$pastButton[1].addEventListener('click', () => {
      window.location.href = './play.html';
});
$pastButton[2].addEventListener('click', () => {
      window.location.href = './transport.html';
});
$pastButton[3].addEventListener('click', () => {
      window.location.href = './date.html';
});
$pastButton[4].addEventListener('click', () => {
      window.location.href = './use.html';
});
