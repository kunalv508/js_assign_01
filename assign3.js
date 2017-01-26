const values=process.argv
let val1=Number(values[2])
let val2=Number(values[3])
let total=val1+val2
let output
if(total>10 && total<100)
{
    
    output="total is greater than 10 but less than 100"
}
else if(total>100 && total<1000)
{
    output="total is greater than 100 but less than 1000"
}
console.log(output)