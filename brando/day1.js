const data = input.split("\n");

const split = data.map((item) => {
  return item.split("   ");
});

const left = split.map((item)=>{
    return item[0]
}).sort()

const right = split.map((item)=>{
    return item[1]
}).sort()

let total = 0;
for(let i = 0; i < left.length; i++){
    total += Math.abs(left[i] - right[i]);
}
console.log(total)