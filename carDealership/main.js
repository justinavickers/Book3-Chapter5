const sales = require("./cars")
// Total profit for 2017
// In which month did they sell the most cars?
// Which salesperson sold the most cars?
// Which salesperson made the most profit?
// Which model was the most popular?
// Which bank provided the most loans to our customers?
const filteredSales = sales.filter((sale) => new Date(sale.purchase_date).getFullYear() === 2017)
let totalProfits = 0
let monthSales = [0,0,0,0,0,0,0,0,0,0,0,0]
const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

filteredSales.forEach((sale)=>{
  const {gross_profit, purchase_date} = sale;
  totalProfits += gross_profit;

  const month = new Date(purchase_date).getMonth()
  monthSales[month] += gross_profit
})

const maxMonthSales = monthSales.reduce((a,b,c) => {
  return Math.max(a,b)
})
console.log("Total profit for 2017: ", totalProfits)
console.log("In which month did they sell the most cars?", maxMonthSales)

