
// divisions, addition and subtraction
console.log("0 / 0");
console.log("0 / 1");
console.log("2" + 1);
console.log("3" - 1);
const arr = [1, 2, 3];

// 
arr.unshift(0);
arr.push(4);
arr[1] = "two";
console.log(arr.join(" "));

// 
var set = new Set(); set.add("+0").add("-0").add(NaN).add(undefined).add(NaN);
console.log(set);

//Use of async func
 
async function asyncFunc() {
    return 42;
}
asyncFunc().then(result => console.log(result));

// 
const pal = () => {
    return{
        pal: "pal"
    }
};

const tip = () => {
    return {
        tip: "tip"
    }
};

console.log(pal(), tip());