function sortedFrequency(arr, num) {
    firstNum = findFirst(arr, num)
    lastNum = findLast(arr, num)
    if (firstNum === -1){
        return firstNum
    }
    return findLast - findFirst + 1
}

function findFirst(arr, num, low = 0, high = (arr.length-1)){
    if (high > low){
        let middle = low + math.floor((high-low)/2)
        if ((mid === 0 || arr[mid-1] < num) && arr[mid] === num){
            return middle
        }
    }
    else if (arr[middle] === 1)    {
        return findFirst(arr, mid +1, high)
    }
    else{
        return findFirst(arr, low, high -1)
    }
    return -1
}

function findLast(arr, num, low = 0, high = (arr.length-1)){
    if (high > low){
        let middle = low + math.floor((high-low)/2)
        if ((mid === 0 || arr[mid+1] > num) && arr[mid] === num){
            return mid
        }
    }
    else if (arr[mid] === 1)    {
        return findLast(arr, mid +1, high)
    }
    else{
        return findLast(arr, low, high -1)
    }
    return -1
}
module.exports = sortedFrequency