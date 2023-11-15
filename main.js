// フォームを取得
let $input = document.querySelectorAll('.input');
let inputValue = $input.value;
const inputIndex = 0;
const inputLength = $input.length;

// 追加ボタンを取得
const $addButton = document.querySelectorAll('.add_button');
const addButtonIndex = 0;
const addButtonLength = $addButton.length;

// 履歴ボタンを取得
const $pastButton = document.querySelectorAll('.past_button');
const pastButtonIndex = 0;
const pastButtonLength = $pastButton.length;

// 履歴ボックスを取得
const $outerBox = document.querySelectorAll('.outer_box');
const outerBoxIndex = 0;
const $outerBoxLength = $outerBox.length;


// const localStorageInputValue0 = localStorage.getItem("arrayvalue0");

let arrayValue0 = [];
let arrayValue1 = [];
let arrayValue2 = [];
let arrayValue3 = [];
let arrayValue4 = [];

// 食費データ追加
$addButton[0].addEventListener('click', (e) => {
      const inputValue0 = $input[0].value;
      arrayValue0.push(inputValue0);
      const jsonArrayValue0 = JSON.stringify(arrayValue0);
      localStorage.setItem("array0", jsonArrayValue0);
      // if(localStorageInputValue0 === null) {
      //       arrayValue0 = [];
      // } else {
      //       arrayValue0 = JSON.parse( localStorageInputValue0 )
      // }
      // arrayValue0.push(inputValue0);
      // localStorage.setItem("arrayvalue0", JSON.stringify( arrayValue0 ));
      // const p = document.createElement('p');
      // p.textContent = `- ${inputValue0}円`;
      // $outerBox[0].appendChild(p);
      // localStorage.setItem("0", inputValue0);
      const getarray = localStorage.getItem("array0");
      const jsssonGetArray = JSON.parse(getarray);
      const numberArr = jsssonGetArray.map(Number);
      console.log(numberArr);
      const result = numberArr.reduce(function(sum, element) {
            return sum + element;
      },0);
      console.log(result);
      console.log(numberArr.slice(-1)[0]);
      $input[0].value = "";
})
let getdata0 = Number(localStorage.getItem("0"));
$pastButton[0].addEventListener('click', () => {
      const p = document.createElement('p');
      p.innerHTML = getdata0;
      $outerBox[0].appendChild(p);
})

// 娯楽費データ追加
$addButton[1].addEventListener('click', (e) => {
      const inputValue1 = $input[1].value;
      arrayValue1.push(inputValue1);
      const jsonArrayValue1 = JSON.stringify(arrayValue1);
      localStorage.setItem("array1", jsonArrayValue1);
      const p = document.createElement('p');
      p.textContent = `- ${inputValue1}円`;
      $outerBox[1].appendChild(p);
      localStorage.setItem('1', inputValue1);
      $input[1].value = "";
})
let getdata1 = Number(localStorage.getItem("1"));
$pastButton[1].addEventListener('click', () => {
      const p = document.createElement('p');
      p.innerHTML = getdata1;
      $outerBox[1].appendChild(p);
})

// 交通費データ追加
$addButton[2].addEventListener('click', (e) => {
      const inputValue2 = $input[2].value;
      arrayValue2.push(inputValue2);
      const jsonArrayValue2 = JSON.stringify(arrayValue2);
      localStorage.setItem("array2", jsonArrayValue2);
      const p = document.createElement('p');
      p.textContent = `- ${inputValue2}円`;
      $outerBox[2].appendChild(p);
      localStorage.setItem("2", inputValue2);
      $input[2].value = "";
})
let getdata2 = Number(localStorage.getItem("2"));
$pastButton[2].addEventListener('click', () => {
      const p = document.createElement('p');
      p.innerHTML = getdata2;
      $outerBox[2].appendChild(p);
})

// 交際費データ追加
$addButton[3].addEventListener('click', (e) => {
      const inputValue3 = $input[3].value;
      arrayValue3.push(inputValue3);
      const jsonArrayValue3 = JSON.stringify(arrayValue3);
      localStorage.setItem("array3", jsonArrayValue3);
      const p = document.createElement('p');
      p.textContent = `- ${inputValue3}円`;
      $outerBox[3].appendChild(p);
      localStorage.setItem("3", inputValue3);
      $input[3].value = "";
})
let getdata3 = Number(localStorage.getItem("3"));
$pastButton[3].addEventListener('click', () => {
      const p = document.createElement('p');
      p.innerHTML = getdata3;
      $outerBox[3].appendChild(p);
});

// 日用品データ追加
$addButton[4].addEventListener('click', (e) => {
      const inputValue4 = $input[4].value;
      arrayValue4.push(inputValue4);
      const jsonArrayValue4 = JSON.stringify(arrayValue4);
      localStorage.setItem("array4", jsonArrayValue4);
      const p = document.createElement('p');
      p.textContent = `- ${inputValue4}円`;
      $outerBox[4].appendChild(p);
      localStorage.setItem("4", inputValue4);
      $input[4].value = "";
});
let getdata4 = Number(localStorage.getItem("4"));
$pastButton[4].addEventListener('click', () => {
      const p = document.createElement('p');
      p.innerHTML = getdata4;
      $outerBox[4].appendChild(p);
});




// 繰り返し処理してみたけど上手くいかない！！
// $addButton[addButtonIndex].addEventListener('click', () => {
//       const p = document.createElement('p');
//       p.textContent = $input[inputIndex].value;
//       $pastButton[pastButtonIndex].appendChild(p);
// })
localStorage.clear();