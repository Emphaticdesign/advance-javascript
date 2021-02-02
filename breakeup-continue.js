const number = [1, 2, -3, 4, -5, 6, -7, 8, 9];
for(i = 0; i < number.length; i++){

    if(number[i]>3){
        break;
    }
    // console.log(number[i]);
}

for(i = 0; i < number.length; i++){

    if(number[i]<0){
        continue;
    }
    // console.log(number[i]);
}

function doSomething(x, y = 4){

    console.log(y);
    
    }
    
    doSomething(3,2);