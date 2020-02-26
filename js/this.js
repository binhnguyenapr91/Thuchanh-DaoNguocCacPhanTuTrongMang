arrange();

function arrange() {
    let arr=[1,2,3,6,7,8];
    let arr2=[8,6,4,2,0,-1];
    let first = 0;
    let last = arr.length-1;
    while (first<last){
        let b = arr[first];
        arr[first]=arr[last];
        arr[last]=b;
        first++;
        last--;
    }
    console.log(arr);
    console.log(arr2.reverse());
}
