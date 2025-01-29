//array[]
//object{}
//boolean(true/false)
//string(non-zero/zero/non-number/empty)
//number(0,non-zero,NaN)
//null
//undefined

function plusSign() {
    console.log("---------------------------PlusSign-------------------------------");
    
    const a = [] + {}
    console.log("array and object:", typeof(a) , `value : ${a}`)
    const b = null + 5
    console.log(`null + Number = ${b} and type of it is ${typeof(b)}`)
    console.log(`Empty Array + number is : ${[]+1} and its type is ${typeof([]+1)}`)
    console.log(6 == "") 
}

function arithmetic() {
    console.log("---------------------------Arithmetic-------------------------------");

    //null can add nums
    const b = null + 5
    console.log(`null + Number = ${b} and type of it is ${typeof(b)}`)
    const C = undefined + 5
    console.log(`Undefined + Number = ${C} and type of it is ${typeof(C)}`)
    
}
//null can add nums หลังจาก + ก็เหมือนการ concat หลังจากนั้นจะเป็นstringทั้งหมดถ้าค่าข้างหน้าไม่ใช่ nums

function equality() {
    console.log("---------------------------Equality-------------------------------");
    console.log(`null is equal false is ${null == false}`)
    console.log("undefined + NaN = ",undefined + NaN)
    console.log(`Nan + [] is ${NaN + []}`)
    console.log(`undefine + null  = `, undefined + null, ` and type of it is ${typeof(undefined + null)}`)
    console.log("But!!! NaN is number is " , NaN == typeof(4))
    console.log("compare undefined == null : ",undefined == null)
    //Nan cant add num
    console.log("Undefined + Number = ",undefined + 5 ,`and type of it is ${typeof(undefined + 5)}`)
}

// Not a number if add to anything it will Nan
// Undefine + null is Nan and type is number but Nan is not number

function relational() {
    console.log("--------------------------Relational-------------------------------");
    console.log(`type of Nan is ${typeof(NaN)}`)
    console.log(`undefined > 0 is ${undefined > 0}`)
    console.log(`undefined < 0 is ${undefined < 0}`)
    console.log(`undefined >= 0 is ${undefined >= 0}`)
}


plusSign()
arithmetic()
equality()
relational()


const z = {}

console.log([1] == [1])