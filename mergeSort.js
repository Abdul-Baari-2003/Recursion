function mergeSort(arr){
 if(arr.length <= 1){
    return arr;
 }
 else{
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid)
    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
 }
}

function merge(left, right){
    let newArray = []
    let i = 0, j = 0;
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            newArray.push(left[i]);
            i++;
        }
        else{
            newArray.push(right[j]);
            j++;
        }
    }
    return newArray.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([5,2,8,1,3,7,6,4]));