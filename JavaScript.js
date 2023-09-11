const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const button = $("#Caculator");
const Cost = $("#Cost");
const marginPosition = $("#marginPosition");
const FDA = $("#FDA")
const FDB = $("#FDB")
const Fee_A = $('#Fee_A')
const Fee_B = $('#Fee_B')
const Total_Profit = $("#Total")

button.addEventListener("click", () => {
    const Don_Bay = marginPosition.value;
    const Cost_Value = Cost.value
    const Cost_Margin = Cost_Value * Don_Bay
    console.log("Cost_Margin: ", Cost_Margin);
    const FDA_Percent = (FDA.value / 100).toFixed(4)
    const FDB_Percent = (FDB.value / 100).toFixed(4)
    console.log('FDA_Percent: ', FDA_Percent);
    console.log('FDB_Percent: ', FDB_Percent);
    // Lợi nhuận mỗi sàn
    const Profit_A = parseFloat((Cost_Margin * FDA_Percent).toFixed(1));
    const Profit_B = parseFloat((Cost_Margin * FDB_Percent).toFixed(1));

    // Tiền lãi
    console.log(Profit_A);
    console.log(Profit_B);

    // Phí sàn
    const Fee_A_Martket = Cost_Margin * (Fee_A.value / 100) * 2
    const Fee_B_Martket = Cost_Margin * (Fee_B.value / 100) * 2

    console.log(Fee_A_Martket);
    console.log(Fee_B_Martket);

    const Total_Fee = Fee_A_Martket + Fee_B_Martket
    console.log('Total_Fee: ',Total_Fee);

    const Total = parseFloat(Math.abs(Profit_A - Profit_B)).toFixed(1) - parseFloat(Total_Fee)
    console.log(parseFloat(Math.abs(Profit_A - Profit_B)).toFixed(1));
    console.log(parseFloat(Total_Fee));
    console.log("Total: ",Total.toFixed(3));
    Total_Profit.innerText = `${Total.toFixed(3)}`;
});
