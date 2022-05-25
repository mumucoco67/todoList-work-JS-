//輸入待辦事項
const txt = document.querySelector(".txt");
const save = document.querySelector(".save");
const list = document.querySelector(".list");
const del = document.querySelector(".delete");
const checkbox = document.querySelector(".checkbox");
const finishList = document.querySelector(".finishList");

console.log(finishList);

let data = [];
function renderData() {
  let str = "";
  data.forEach(function (item, index) {
    str += `<li>
          <input class="checkbox" type="checkbox" value="完成" />
          ${item.content}
          <button class="delete" data-num="${index}" type="button" value="刪除">
            刪除
          </button>
        </li>`;
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
    txt.value = ""; //輸入後空值
  }
}

//刪除

list.addEventListener("click", function (e) {
  console.log(e.target.nodeName);
  if (e.target.nodeName === "BUTTON") {
    let num = e.target.getAttribute("data-num");
    data.splice(num, 1);
    renderData();
  }
});

// //加到完成清單

finishList.addEventListener("click", function (e) {
  console.log(e.target.nodeName);
  if (e.target.nodeName === "INPUT") {
    let str = "";
    data.forEach(function (item, index) {
      str += `<li>
          <input class="checkbox" type="checkbox" value="完成" />
          ${item.content}
          <button class="delete" data-num="${index}" type="button" value="刪除">
            刪除
          </button>
        </li>`;
    });

    finishList.innerHTML = str;
  }
});
