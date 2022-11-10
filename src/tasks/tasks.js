import React from 'react'

let arr = [0,1,2,3,4,5,6,7,8,9]
let d = 2

const divisibleBy = (array, divider) => {
    return array.filter((number) => {
        return (number % divider === 0)
    })
}

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

export const Task = () => {
    // console.log(arr)
    // console.log(divisibleBy(arr, d))
    // console.log(oddCount(7))
    return <></>
}