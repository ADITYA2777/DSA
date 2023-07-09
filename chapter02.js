

// insert the array 

let data  = [89,33,44,2,40,20];
// let newEl= 25;
// let position = 3;
// console.warn(data);

// for(let i = data.length-1;i>0;i--){
//     // console.log(data[i]);
//     if (i>=position) {
//         data[i+1]=data[i];
//         if (i==position) {
//             data[i]=newEl
//         }
//     }
// }
// console.warn(data);


function insertEl(){
    let newEl = document.getElementById('newEl').value
    newEl = parseInt(newEl)
let position = document.getElementById('position').value
console.warn(data);


for(let i = data.length-1;i>0;i--){
        // console.log(data[i]);
        if (i>=position) {
            data[i+1]=data[i];
            if (i==position) {
                data[i]=newEl
            }
        }
    }
    console.warn(data);

}
// defualt function 
let data2 = [22,33,44,55,66]

data2.splice(2,0,200000)
console.log(data2);