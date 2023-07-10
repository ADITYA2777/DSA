// merger with while loop 


let data1 = [3,7,20,43,45,55]
let data2 =[1,5,9,21]
let data3=[]
d1=0
d2=0
d3=0

while(d1<data1.length && d2<data2.length){
    if (data1[d1]<data2[d2])
     {
        data3[d3]=data1[d1]
        d1++;

    }
    else
    {
        data3[d3]=data2[d2]
        d2++;
        console.log(data3[d3]);
        
    }
    d3++;
}
console.log(data3);
while (d1<data1.length) {
    data3[d3]=data1[d1]
    d1++;
    d3++;
}
console.log(data3);
