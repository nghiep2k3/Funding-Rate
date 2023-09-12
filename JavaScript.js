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
  console.log(Profit_A.toFixed(8));
  console.log(Profit_B.toFixed(8));

  // Phí sàn
  const Fee_A_Martket = Cost_Margin * (Fee_A.value / 100) * 2;
  const Fee_B_Martket = Cost_Margin * (Fee_B.value / 100) * 2;

  console.log(Fee_A_Martket);
  console.log(Fee_B_Martket);

  const Total_Fee = parseFloat(Fee_A_Martket + Fee_B_Martket).toFixed(5);

  //   console.log(parseFloat(Fee_A_Martket + Fee_B_Martket).toFixed(5));
  console.log("Total_Fee: ", Total_Fee);

  const Total = parseFloat(Math.abs(Profit_A - Profit_B)).toFixed(8) - parseFloat(Total_Fee);

  console.log(parseFloat(Math.abs(Profit_A - Profit_B)).toFixed(8));
  const Total_abs = parseFloat(Total_Fee);

  console.log("Total: ", Total.toFixed(8));
  Total_Profit.innerText = `${Total.toFixed(8)}`;

  if (Profit_A < 0 && Profit_B < 0) {
    const Total1 =
      parseFloat(Math.abs(Profit_A - Profit_B)).toFixed(8) -
      parseFloat(Total_Fee);
    console.log(parseFloat(Math.abs(Profit_A - Profit_B)).toFixed(8));
    console.log(parseFloat(Total_Fee));
    console.log("Total: ", Total1.toFixed(8));
    Total_Profit.innerText = `${Total1.toFixed(8)}`;
  }
  if (Profit_A < 0 && Profit_B > 0) {
    const Total2 =
      parseFloat(Math.abs(Profit_B - Profit_A)).toFixed(8) -
      parseFloat(Total_Fee);
    console.log(parseFloat(Math.abs(Profit_B - Profit_A)).toFixed(8));
    console.log(parseFloat(Total_Fee));
    console.log("Total: ", Total2.toFixed(8));
    Total_Profit.innerText = `${Total2.toFixed(8)}`;
  }
  if (Profit_A > 0 && Profit_B < 0) {
    const Total3 =
      parseFloat(Math.abs(Profit_A - Profit_B)).toFixed(8) -
      parseFloat(Total_Fee);
    console.log(parseFloat(Math.abs(Profit_A - Profit_B)).toFixed(8));
    console.log(parseFloat(Total_Fee));
    console.log("Total: ", Total3.toFixed(8));
    Total_Profit.innerText = `${Total3.toFixed(8)}`;
  }
  
});
