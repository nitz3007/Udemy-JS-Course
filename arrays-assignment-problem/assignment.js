const arr = [2,7,4,39,24,12];
const filterArr = arr.filter((element)=> element >5);
console.log(filterArr);

const numArr = arr.map((element)=> ({num: element}));
console.log(numArr);

const totalProduct = arr.reduce((accumulator, currentEl)=>{
    const product = accumulator * currentEl;
    return product;
});
console.log(totalProduct);

//here we are using REST Operator to accumulate all the parameters into a single array nums. This way there can be varied number of arguments.
const findMax = (...nums) => {
    let max = nums[0];
    for (const num of nums) {
        if(num > max) {
            max = num;
        }
    }
    return max;
}

//here we use SPREAD operator in arguments while calling the function to spread out the array into comma separated list of arguments.
console.log(findMax(...arr));

const findMinMax = (...nums) => {
    let curMin = nums[0];
    let curMax = nums[0];
    for(const num of nums) {
        if(num > curMax) {
            curMax = num;
        }
        if(num< curMin) {
            curMin = num;
        }
    }
    return [curMin, curMax];
};

const [minVal, maxVal] = findMinMax(...arr);
console.log(minVal, maxVal);

const uniqueList = new Set([1,4,5]);
uniqueList.add(4);
console.log(uniqueList);