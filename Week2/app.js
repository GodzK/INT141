let n = 00000010100101000001111010011100;
console.log(n.toString(2));
let ans = "";
function reverseBits(n) {
    for(let i = 0 ;i< 32; i--){
        ans += n.charAt(i);
        console.log(ans);
    }
}