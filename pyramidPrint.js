const mainFx = function(n){
    let startArr;
    let arr = [1];
    for(let i = 0; i < n; i++){
        console.log(arr.join(" ").padStart(2*n+1, "*").padEnd(3*n, "*") );
        startArr = arr;
        startArr.unshift(0);
        for(let i = 1; i < startArr.length; i++){
            arr[i-1] = parseInt(startArr[i]) + parseInt(startArr[i - 1]);
        }
    }
}

const num = parseInt(process.argv[2]);
mainFx(num);