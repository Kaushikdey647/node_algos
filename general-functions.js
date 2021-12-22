exports.swap = (a, b) => {
    return [b,a];
}

exports.isOdd = (num) => {
    return num % 2;
}

exports.merge = (arr,l,m,r) => {
    var i, j, k;
    var n1 = m - l + 1;
    var n2 =  r - m;

    /* create temp arrays */
    var L = new Array(n1);
    var R = new Array(n2);

    /* Copy data to temp arrays L[] and r[] */
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1+ j];

    /* Merge the temp arrays back into arr[l..r]*/
    i = 0; // Initial index of first subarray
    j = 0; // Initial index of second subarray
    k = l; // Initial index of merged subarray
    while (i < n1 && j < n2)
    {
        if (L[i] <= R[j])
        {
            arr[k] = L[i];
            i++;
        }
        else
        {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    /* Copy the remaining elements of L[], if there
        are any */
    while (i < n1)
    {
        arr[k] = L[i];
        i++;
        k++;
    }
    /* Copy the remaining elements of R[], if there
        are any */
    while (j < n2)
    {
        arr[k] = R[j];
        j++;
        k++;
    }
    return arr;
}

exports.partition  = function(arr, low, high)
{
    pivot = arr[high];    // pivot
    i = (low - 1);  // Index of smaller element
 
    for (var j = low; j <= high- 1; j++)
    {
        // If current element is smaller than or
        // equal to pivot
        if (arr[j] <= pivot)
        {
           i++;    // increment index of smaller element
//            swap(&arr[i], &arr[j]);
           [ arr[i] , arr[j] ]  = swap(arr[i], arr[j]);
        }
    }
//          swap(&arr[i + 1], &arr[high]);
           [arr[i+1],arr[high]] = swap(arr[i+1], arr[high]);
    return (i + 1);
}