//  let arr = ['test1','test2','test3'];

//  for( let i = 0; i < arr.length; i+=1)
//     {
//     alert(arr[i]);
//  }


// let arr = ['test1','test2','test3'];

// for(let i = 0; i < arr.length; i+=1)
//     {
//         if (arr[i] === 'test2')
//         {
//             continue;
//         }
//         else{
//         console.log(arr[i]);
//         }

// }


// function showMessage(a,b,c){
//    return a*b/c;
   
// }

// let result = showMessage(5,6,7)

// if (result = 0){
//     console.log('hi');
// } else{
//     alert('Nigga');
// }

// function myDigit(a,b){
//     if(b === undefined) {
//         b = 1;
//         return a*b;
//     }

// }
// console.log(myDigit(5));


// function myMessage(){
    
//     let result = 0;
//     for(let element of arguments){
//         result += element;
//     }
//     return result;
// }

// console.log(myMessage(1,2,3,4,5,6,7,8,9));

// let arr = function()
// {
//     console.log('Hi Test');
// }

// arr();

function myTest()
{
    return 5 + 5;
}

function mySecondFunc(a,func)
{
  let result = a + myTest();
  console.log(result);
}

mySecondFunc(10,myTest);
