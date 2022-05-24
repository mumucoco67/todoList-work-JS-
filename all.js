//輸入待辦事項
const txt = document.querySelector(".txt");
const save = document.querySelector(".save");
const list = document.querySelector(".list");
const del = document.querySelector(".delete");
const check = document.querySelector(".check");
const finish = document.querySelector(".finish-list");

let data = [];
function renderData() {
  let str = "";
  data.forEach(function (item, index) {
    str += `<li><input class="check" type="checkbox" value="完成">${item.content}<input class="delete" data-num=${index} type="button" value="X"> </li>`;
  });

  list.innerHTML = str;
}
//新增待辦事項
save.addEventListener("click", function (e) {
  eventSaveTxt();
});
//enter輸入
txt.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    eventSaveTxt();
  }
});
function eventSaveTxt() {
  if (txt.value.trim() == "") {
  } else {
    let obj = {};
    obj.content = txt.value;
    data.push(obj);
    renderData();
    txt.value = ""; //輸入完空值
  }
}
//點擊至完成清單
check.addEventListener("click", function (e) {
  eventCheckbox();
});
function eventCheckbox() {
  let str = "";
  if (e.click() === true) {
    data.forEach(function (item, index) {
      str += `<li><input class="check" type="checkbox" value="完成">${item.content}<input class="delete" data-num=${index} type="button" value="X"> </li>`;

      return (finsih.innerHTML = str);
    });
  }
}
console.log(eventCheckbox());

//刪除

list.addEventListener("click", function (e) {
  console.log(e.target.nodeName);
  if (e.target.nodeName == "input.delete") {
    let num = e.target.getAttribute("data-num");
    data.splice(num, 1);
    renderData();
  }
});

// //加到完成清單
