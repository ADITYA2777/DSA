

// SEARCH AND ARRAY 

let data = [22,33,44,55,11,66,14,8]

// let items = 22;

// let index = undefined;

// for(i = 0;i<=data.length-1;i++)
// // console.log(data);

// {
//    if (data[i]===items) {
//     index = i;
//     break;

//    }
// }
// console.log(index);
// console.log(data.indexOf(items));///shortcut method use of indexof
// console.log(data.splice(2,3));///delect method use of splice

function serachElement(){

    let items = document.getElementById('element').value;

let index = undefined;

for(i = 0;i<=data.length-1;i++)
// console.log(data);

{
   if (data[i]=== parseInt(items) ) {
    index = i;
    break;

   }
}
console.log(index);
}