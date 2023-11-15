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




// 食費データ追加
$addButton[0].addEventListener('click', (e) => {
      // e.preventDefault();
      // console.log($input[0].value);
      const p = document.createElement('p');
      const inputValue0 = $input[0].value;
      p.textContent = `- ${inputValue0}円`;
      $outerBox[0].appendChild(p);
      localStorage.setItem("0", inputValue0);
})
let getdata0 = Number(localStorage.getItem("0"));
$pastButton[0].addEventListener('click', () => {
      const p = document.createElement('p');
      p.innerHTML = getdata0;
      $outerBox[0].appendChild(p);
})

// 娯楽費データ追加
$addButton[1].addEventListener('click', (e) => {
      // e.preventDefault();
      // console.log($input[0].value);
      const p = document.createElement('p');
      const inputValue1 = $input[1].value
      p.textContent = `- ${inputValue1}円`;
      $outerBox[1].appendChild(p);
      localStorage.setItem('1', inputValue1);
})
let getdata1 = Number(localStorage.getItem("1"));
$pastButton[1].addEventListener('click', () => {
      const p = document.createElement('p');
      p.innerHTML = getdata1;
      $outerBox[1].appendChild(p);
})

// 交通費データ追加
$addButton[2].addEventListener('click', (e) => {
      // e.preventDefault();
      // console.log($input[0].value);
      const p = document.createElement('p');
      const inputValue2 = $input[2].value
      p.textContent = `- ${inputValue2}円`;
      $outerBox[2].appendChild(p);
      localStorage.setItem("2", inputValue2);
})
let getdata2 = Number(localStorage.getItem("2"));
$pastButton[2].addEventListener('click', () => {
      const p = document.createElement('p');
      p.innerHTML = getdata2;
      $outerBox[2].appendChild(p);
})

// 交際費データ追加
$addButton[3].addEventListener('click', (e) => {
      // e.preventDefault();
      // console.log($input[0].value);
      const p = document.createElement('p');
      const inputValue3 = $input[3].value
      p.textContent = `- ${inputValue3}円`;
      $outerBox[3].appendChild(p);
      localStorage.setItem("3", inputValue3);
})
let getdata3 = Number(localStorage.getItem("3"));
$pastButton[3].addEventListener('click', () => {
      const p = document.createElement('p');
      p.innerHTML = getdata3;
      $outerBox[3].appendChild(p);
});

// 日用品データ追加
$addButton[4].addEventListener('click', (e) => {
      // e.preventDefault();
      // console.log($input[0].value);
      const p = document.createElement('p');
      const inputValue4 = $input[4].value
      p.textContent = `- ${inputValue4}円`;
      $outerBox[4].appendChild(p);
      localStorage.setItem("4", inputValue4);
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