const multiplier={
    number : [2,4,6,8],
    multiplyBy: 3,
    multiply(){
        return this.number.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());