function AlternatingSum(arr) {
    let doi1 = 0;
    let doi2 = 0;
    
    arr.forEach((element,index) => {
      if (index % 2 === 0){
        doi1 += element
      } else {
        doi2 +=element;
      }
    });
    return [doi1,doi2]
  };
  
  console.log(AlternatingSum([46,48,98,57,74,62])) ;
