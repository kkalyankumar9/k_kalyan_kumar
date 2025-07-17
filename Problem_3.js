// Problem-3: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]
 
//   Output: (examples)
//     1) input a = 1, then output : 1
//     2) input a = 2, then output : 1
//     3) input a = 3, then output : 1, 3, 5
//     4) input a = 4, then output : 1, 3, 5
//     5) input a = 5, then output : 1, 3, 5, 7, 9
//     6) input a = 6, then output : 1, 3, 5, 7, 9
//     .
//     .
//     7) input a = x, then output : 1, 3, 5, 7, .....

function pro3(input){
    if(input<0){
        return "Invalid input. Please enter a positive number.";
    }else if(input==="x"){
        return ["1", "3", "5", "..."];
    }else{
        let container=[];
        for(let i=1;;i++){
            if(i%2!==0){
                container.push(i);
            }else{
              if(input%2!==0){
                if(container.length===input){
                    return container;
                    break
              }
            }else{
                if(container.length===input-1){
                    return container;
                    break
                }
            }
        }
       
    }

}
}
console.log(...pro3(14).join(", "));