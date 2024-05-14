function findRotatedIndex(arr, num) {
    let rotation = findRotation(arr)
    if (rotation > 0 && num >= arr[0] && num<= array[rotation -1]){
        return search(arr, num, 0, pivot-1)
    }
    else {
        return search(arr, num, pivot, arr.length-1)
    }
}

function search(arr, num, start, end)   {
    if (arr.length === 0) return -1;
    if ( num < arr[start] || num >arr [end]) return -1;

    if (high >= low){
        let middle = math.floor((high-low)/2)
        if ( arr[middle] === num){
            return middle
        }
    }
    else if (arr[start] <= arr[middle])    {
        return search(arr, middle +1, high)
    }
    else{
        return search(arr, low, middle -1)
    }
    return -1
}


function findRotation(arr,low = 0, high = (arr.length-1)){
    if (high >= low){
        let middle = math.floor((high-low)/2)
        if ( arr[middle+1] < arr[middle]){
            return middle+1
        }
    }
    else if (arr[start] <= arr[middle])    {
        return findRotation(arr, middle +1, high)
    }
    else{
        return findRotation(arr, low, middle -1)
    }
    return -1
}

module.exports = findRotatedIndex