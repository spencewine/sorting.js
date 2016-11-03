function split(wholeArray) {
    let firstHalf = wholeArray.slice(0,wholeArray.length/2)
    let secondHalf = wholeArray.slice(wholeArray.length/2)
    
  return [firstHalf, secondHalf];
}

let mergeSort = function(array) {
    if (array.length < 2) {
        return array;
    }

    else {
        // let [firstHalf, secondHalf] = split(array);
        let twoHalves = split(array);
        let firstHalf = twoHalves[0];
        let secondHalf = twoHalves[1];
        return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }
    // return array;
}

let merge = function(firstArray, secondArray) {
    debugger;
    // [3], [4]
    let mergedArray = [];
    if (firstArray.length === 0 || secondArray.length === 0) {
        mergedArray = mergedArray.concat(firstArray, secondArray);
        // console.log(mergedArray);
    }

    else {
        if (firstArray[0] < secondArray[0]) {
            mergedArray.push(firstArray.shift());
            // console.log(mergedArray)
            // mergedArray1 = [1]
            // mergedArray3 = [3]
            mergedArray = mergedArray.concat(merge(firstArray, secondArray));
            console.log(mergedArray)

        }

        else {
            mergedArray.push(secondArray.shift());
            // mergedArray2 = [2]
            mergedArray = mergedArray.concat(merge(firstArray, secondArray))
            console.log(mergedArray)
        }
    }

    return mergedArray;
}