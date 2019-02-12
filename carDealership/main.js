const sales = require("./cars")
// Total profit for 2017(x)
// In which month did they sell the most cars?(x)
// Which salesperson sold the most cars?(x)
// Which salesperson made the most profit?
// Which model was the most popular?
// Which bank provided the most loans to our customers?
const filteredSales = sales.filter((sale) => new Date(sale.purchase_date).getFullYear() === 2017)
let totalProfits = 0
let monthSales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

filteredSales.forEach((sale) => {
  const { gross_profit, purchase_date } = sale;
  totalProfits += gross_profit;

  const month = new Date(purchase_date).getMonth()
  monthSales[month] += gross_profit
})

let currentMaxMonth = 0
let maxProfit = 0

 monthSales.forEach((profit, index) => {
  if (profit > maxProfit) {
    maxProfit = profit
    currentMaxMonth = index
  }
});


const salesPersonName = filteredSales.map(sales => [sales.sales_agent.first_name, sales.sales_agent.last_name].join(" "))
let profitPerSalesMan =
console.log(salesPersonName)

console.log("Total profit for 2017: ", totalProfits)
console.log("In which month did they sell the most cars?", months[currentMaxMonth])
console.log("Which sales person made the most profit?")

