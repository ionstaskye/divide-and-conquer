function findFloor(arr, num, low=0, high = arr.length -1) {
    if (high < low) return -1;
    if (num >= arr[high]) return arr[high];
    let middle = math.floor((high-low)/2)
    
    if (arr[middle] === num){
            return arr[middle]
        }
    
    if (middle > 0&& arr[middle-1] <= arr[middle]){
        return arr[middle - 1]
    }
    if (num < arr[middle])    {
        return findFloor(arr, low, middle -1)
    }
    else{
        return findFloor(arr, middle +1, high)
    }
}

module.exports = findFloor