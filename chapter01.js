// ARRAY 
// TRAVERSING OPERATIONS

let asumeWeTake = [2,4,5,6,7,55,77,0,3,1,80]

// for (let i = 0; i< asumeWeTake.length; i++)
 {
    // console.log(`Array ${i} is ${asumeWeTake[i]} br`);
}

// console.log(asumeWeTake[0,3]);
function GEtelement () {
    let el = document.getElementById("element").value
    if (el<asumeWeTake.length && typeof parseInt(el)=== "number" && el>=0) {

    alert(asumeWeTake[el])
    }else{
        alert("plz enter valid input")
    }
}