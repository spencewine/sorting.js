var bubbleSort=function(arr){
    var temp;
   

    for(var i = 0; i<arr.length;i++){
        for(var j = 0; j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                temp= arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=temp;
            // console.log(arr)

            }
        }
        
    }
    console.log(arr)

    return arr;
}



