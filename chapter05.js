

// merge two array

let data = [22,33,44,55,66,77]
let data2 = [88,99,100,10000]
let data3 = []

for(i=0;i<data.length;i++){
    data3[i]=data[i]
}
// console.log(data);
// console.log(data3);

for(i=0;i<data2.length;i++)
{
    data3[data.length+i] = data2[i]
}
// console.log(data3);

data3=[...data , ...data2]
// console.log(data3);

// reverse merge

let dummy = [11,33,444,55,66]

dummy.reverse()
console.log(dummy);

dummy2 = [1000,10000,500,5000]
let dummy3 = [...dummy, ...dummy2]
console.log(dummy3);