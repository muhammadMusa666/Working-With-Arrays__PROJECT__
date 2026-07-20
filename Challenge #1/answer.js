'use strict';

const checkDogs = function(dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    // dogsJulia.slice(1, 3);
    // console.log(dogsJuliaCorrected);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);


    // ("Dog Number 1 Is An Adult, And Is 5 Years Old"), Or A Puppy,
    // ("Dog Number 2 Is Still A Puppy")
    dogs.forEach(function(dog, i) {
        if(dog >= 3) {
            console.log(`Dog Number ${i + 1} Is An Adult, And Is ${dog} Years Old`);
        } else {
            console.log(`Dog Number ${i + 1} Is Still A Puppy`);
        }
    }) 
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
// Hopefully You Atleast Tried The Challenge, Sometimes It Can Be Difficult😊!