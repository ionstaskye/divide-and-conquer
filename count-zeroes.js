function countZeroes(arr) {
  
    let firstZero =findFirstZero(arr)
    if (firstZero === -1) {
        return 0
    }

    return arr.length - firstZero
}

function findFirstZero(arr, low = 0, high = (arr.length-1)){
    if (high > low){
        let middle = low + math.floor((high-low)/2)
        if ((middle === 0 || arr[middle-1] === 1) && arr[middle] === 0){
            return middle
        }
    }
    else if (arr[mid] === 1)    {
        return findFirstZero(arr, middle +1, high)
    }
    else{
        return findFirstZero(arr, low, middle -1)
    }
    return -1
}
module.exports = countZeroes