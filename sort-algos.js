gf = require('./general-functions')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
MERGE SORT
*/


mergeSort = (arr,l,r) =>{
    if (l < r)
    {
        // Same as (l+r)/2, but avoids overflow for
        // large l and h
        var m = Math.floor(l+(r-l)/2);
        //console.log("mid of ",l,"and",r,"is",m);
        // Sort first and second halves
        mergeSort(arr, l, m);
        mergeSort(arr, m+1, r);
 
        gf.merge(arr, l, m, r);
    }
    return arr;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
BUBBLE SORT
*/

bubbleSortLocal = (input, arrLen) => {
   var i, j;
   
   for (var i = 0; i < arrLen-1; i++)      
 
       // Last i elements are already in place   
       for (var j = 0; j < arrLen-i-1; j++) { 
           if (input[j] > input[j+1]){
            [input[j], input[j+1]] = gf.swap(input[j], input[j+1]);
            //console.log(i,j,input[j], input[j+1]);
           }
       }
   
   return input;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
QUICK SORT
*/