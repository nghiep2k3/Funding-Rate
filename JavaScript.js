const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const button = $("#Caculator");
const Cost = $("#Cost");
const marginPosition = $("#marginPosition");
const FDA = $("#FDA");
const FDB = $("#FDB");
const Fee_A = $("#Fee_A");
const Fee_B = $("#Fee_B");
const Total_Profit = $("#Total");
const Reduce_A = $(".reduce_A");
const Reduce_B = $(".reduce_B");
const ClearButton = $("#Clear")
var Dem = 0;

Reduce_A.addEventListener("click", () => {
  Dem += 1;
  if (Dem >= 2) {
    return;
  }
  const currentValue = FDA.value;
  FDA.value = "-" + currentValue;
});

Reduce_B.addEventListener("click", () => {
  Dem += 1;
  if (Dem >= 2) {
    return;
  }
  const currentValue2 = FDB.value;
  FDB.value = "-" + currentValue2;
});

ClearButton.addEventListener('click', function() {
  const inputElements = document.querySelectorAll('input[type="text"]');
  
  inputElements.forEach(function(inputElement) {
    inputElement.value = '';
  });
});
// chọn sàn bắt được data-index
var select = Fee_A;

select.addEventListener("change",  () => {
  var selectedOption = select.options[select.selectedIndex];

  var dataIndex1 = selectedOption.getAttribute("data-index");
  var Choose_Ecommerce_Level1 = dataIndex1
  console.log("data-index1: " + dataIndex1);
});

var select2 = Fee_B;

select2.addEventListener("change",  () => {
  var selectedOption = select.options[select.selectedIndex];

  var dataIndex2 = selectedOption.getAttribute("data-index");
  var Choose_Ecommerce_Level2 = dataIndex2
  console.log("data-index2: " + dataIndex2);
});

button.addEventListener("click", () => {
  const Don_Bay = marginPosition.value;
  const Cost_Value = Cost.value;
  const Cost_Margin = Cost_Value * Don_Bay;
  console.log("Cost_Margin: ", Cost_Margin);
  const FDA_Percent = (FDA.value / 100).toFixed(8);
  const FDB_Percent = (FDB.value / 100).toFixed(8);
  console.log("FDA_Percent: ", FDA_Percent);
  console.log("FDB_Percent: ", FDB_Percent);

  // Lợi nhuận mỗi sàn
  const Profit_A = parseFloat((Cost_Margin * FDA_Percent).toFixed(8));
  const Profit_B = parseFloat((Cost_Margin * FDB_Percent).toFixed(8));

  // Tiền lãi
  console.log("Loi nhuan san A: ", Profit_A.toFixed(8));
  console.log("Loi nhuan san B: ", Profit_B.toFixed(8));

  // Phí sàn
  //Phí mở
  const Fee_A_Martket_Open = (Cost_Margin * (Fee_A.value / 100)).toFixed(8);
  const Fee_B_Martket_Open = (Cost_Margin * (Fee_B.value / 100)).toFixed(8);
  
  

  // switch (name) {
  //   case "red":
  //     console.log("Màu đỏ");
  //     break;

  //   case "blue":
  //     console.log("Màu xanh");
  //     break;

  //   case "green":
  //     console.log("Màu xanh lá cây");
  //     break;

  //   default:
  //     console.log("Không xác định màu");
  // }


  // In ra giá trị name
  console.log(1111, name); // string
  //Phí đóng
  const Fee_A_Martket_Close = (Cost_Margin * 2).toFixed(8);
  const Fee_B_Martket_Close = (Cost_Margin * 2).toFixed(8);

  console.log("Phi san A mo cua: ", Fee_A_Martket_Open);
  console.log("Phi san B mo cua: ", Fee_B_Martket_Open);
  console.log("Phi san A dong cua: ", Fee_A_Martket_Close);
  console.log("Phi san B dong cua: ", Fee_B_Martket_Close);

  const Total_Fee = parseFloat(Fee_A_Martket_Open + Fee_A_Martket_Open).toFixed(5);

  console.log(parseFloat(Fee_A_Martket_Open + Fee_A_Martket_Open).toFixed(5));
  console.log("Total_Fee: ", Total_Fee);

  //Đầu vào 2 số âm
  if (Profit_A < 0 && Profit_B < 0) {
    console.log(111);
    const Total1 =
      parseFloat(Math.abs(Profit_A - Profit_B)).toFixed(8) -
      parseFloat(Total_Fee);

    console.log(parseFloat(Math.abs(Profit_A - Profit_B)).toFixed(8));
    console.log(parseFloat(Total_Fee));
    console.log("Total: ", Total1.toFixed(8));

    Total_Profit.innerText = `${Total1.toFixed(8)}`;
  }

  // Đầu vào 2 cái trái dấu với A < 0 && B > 0
  if ((Profit_A > 0 && Profit_B < 0) || (Profit_A < 0 && Profit_B > 0)) {
    console.log(222);
    const Profit_A_abs = parseFloat(Math.abs(Profit_A)).toFixed(8);
    const Profit_B_abs = parseFloat(Math.abs(Profit_B)).toFixed(8);

    console.log("A", Profit_A_abs);
    console.log("B", Profit_B_abs);

    const Total3 =
      parseFloat(Profit_A_abs) +
      parseFloat(Profit_B_abs) -
      parseFloat(Total_Fee);

    console.log(parseFloat(Profit_A_abs) + parseFloat(Profit_B_abs).toFixed(8));
    console.log("Total: ", Total3.toFixed(8));

    Total_Profit.innerText = `${Total3.toFixed(8)}`;
  }
});
