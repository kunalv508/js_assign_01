const values=process.argv
const mealCost = Number(values[2])
const tipPercent = Number(values[3])
const tipAmount = (tipPercent / 100) * mealCost
const totalOwing = tipAmount + mealCost
const outPut = `your meal was $${mealCost} + a ${tipPercent}% tip = ${totalOwing}`

console.log(outPut)