// REMOVE ARRAY ELEMENT AND DELECTED!!!!!!!

function removeEl()
{
    let data = [20,12,14,11,14,22]
    let position = document.getElementById('element').value
    position = parseInt(position)
    console.log(data);
    
    for( let i=position;i<data.length-1;i++)
    {
     data[i]=data[i+1]
    }
    data.length = data.length-1;
    console.log(data); 
}
// let data = [20,12,14,11,14,22]
// let position =2
// console.log(data);

// for( let i=position;i<data.length-1;i++)
// {
//  data[i]=data[i+1]
// }
// data.length = data.length-1;
// console.log(data);


// let data2 = [22,33,11,5,55]
// data2.pop(1)
// console.log(data2);