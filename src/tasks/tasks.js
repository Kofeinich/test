import React from 'react'
// const divisibleBy = (array, divider) => {
//     return array.filter((number) => {
//         return (number % divider === 0)
//     })
// }

// let dad = 40
// let son = 15
//
// const twiceAsOld = (dadOld, sonOld) => {
//     let count = 0
//     if (dadOld/sonOld === 2){
//         return count
//     } else if (dadOld/sonOld > 2){
//         while (dadOld/sonOld === 2) {
//             dadOld++;
//             sonOld++;
//             count++;
//         }
//         return count
//     }
// }


// const oddCount = (number) => {
//     let result = 0
//     while (number > 0){
//         let numberM = number--
//         if (numberM % 2 !== 0){
//             result++
//         }
//         number--
//     }
//     return result
// }

// let arr = [0,1,2,3,4,5,6,7,8,9]
// let d = 2
// const dividable = (arr, divider) => {
//     return arr.filter((number) => {
//         return number%divider
//     })
// }
//
// const stringToNumber = (str) => {
//     return Number(str)
// }
//
// const triagle = () => {
//     let str =''
//     let subStr = ''
//     for (let i=0; i<7; i++){
//         subStr = subStr + '#'
//         str =  str + subStr + '\n'
//     }
//     return str
// }
// const returnArray = () => {
//     let arr = []
//     for (let i=0; i<16; i++){
//         arr.push(i)
//     }
//     return arr
// }

// const fizzBuzz = (array) => {
//     return array.map((item) => {
//         if (item % 3 === 0 && item % 5 === 0 ){
//             console.log('FizzBuzz')
//         } else if (item % 3 === 0){
//             console.log('Fizz')
//         } else if (item % 5 === 0){
//             console.log('Buzz')
//         } else {
//             console.log(item)
//         }
//     })
// }
//
// fizzBuzz(returnArray())
// const checkmate = () => {
//     for (let i=0; i<7; i++){
//         let sep = ''
//         if (i%2 === 1){
//             sep = ' '
//         }
//         console.log(sep + '# # # #')
//     }
// }
//
// checkmate()

// const min = (num1, num2) => {
//     return (num1 < num2) ? num1 : num2
// }
// console.log(min(8, 6))
// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
//
// const createMatrix = (m, n) => {
//     let matrix = []
//     let interval = n*m;
//     let intervalArray = []
//
//     for (let i=0; i<interval; i++){
//         intervalArray.push(i)
//     }
//     for (let i=0; i<m; i++){
//         let arr = []
//         for (let j=0; j<n; j++){
//             let value =  Math.floor(Math.random() * intervalArray.length);
//             arr.push(intervalArray[value])
//         }
//         matrix.push(arr)
//     }
//     return matrix
// }
//
// console.log(createMatrix(5,5))
//
//
//

//
// function getFuncContext(){
//     console.log(this)
// }
//
// const getArrowContext = () =>{
//     console.log(this)
// }
//
// const person = {
//     age: 24,
//     name: 'Hui',
//     f: getFuncContext,
//     a: getArrowContext,
//     b: function (){
//         setTimeout(() => {
//             console.log(this.name + this.age)
//         })
//     }
// }
//
// person.a()
// let name = 'Name'
// function getName() {
//     setTimeout(() => {
//         console.log(this)
//     },)
// }
//
// const obj = {
//     age: 25,
//     f: getName,
// }
//
// obj.f()
//
// const obj = {
//     age: 25,
//     name: 'Jane',
//     log(){
//         return Object
//             .keys(this)
//             .filter((key) => key !== 'log')
//             .map((key) => this[key]).join(' ')
//     }
// }
//
// console.log(obj.log())
// const f = (...args) => {
//     return args.map((arg) => {
//         return ++arg
//     })
// }

// Strings
// const f = (str) => {
//     return str.toUpperCase()
// }
//
// console.log(f('ejcnejrnckjren'))


//Matrix


// Objects


// Algorithms

const sort = (...arr) => {
    return arr.sort((a,b) => {
        return a-b
    })
}

const binarySearch = (arr, key) =>{
    let left = -1
    let right = arr.length
    while (left < right - 1){
        let mid = (left + right) / 2
        if (arr[mid] < key){
            left = mid
        } else {
            right = mid
        }
    }
    return right
}

console.log(sort(12,2,4,4,4,1,2,3,3,15,6,7,8,9,0),)
console.log(binarySearch(sort(12,2,4,4,4,1,2,3,3,15,6,7,8,9,0), 4))


//Promises, async JS

export const Task = () => {


    return <div>

    </div>
}