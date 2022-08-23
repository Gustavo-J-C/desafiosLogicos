// Given an array of integers, return a new array such that each element at index i 
// of the new array is the product of all the numbers in the original array except the 
// one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be 
// [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would 
// be [2, 3, 6].

let data = [1, 2, 3, 4, 5]
let newDatas = []

for (let i = 0; i < data.length; i++) {
    let newData = data[0];
    let control = 0;
    if (i == 0) {
        newData = data[1]
        control = 1;
    }

    for (let j = 0; j < data.length; j++) {
        if (i != j && j != control) {
            newData = newData * data[j];
        }
    }
    newDatas.push(newData)
}
console.log(newDatas);
// Follow-up: what if you can't use division?