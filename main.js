/*
1. Дан массив [1, 2, 3, 4, 5] с помощью метода reduce сделать объект в котором ключ
будет равен элементу массива, а значение (элемент * 100)
    input: [1, 2, 3, 4, 5]
    output: {1: 100, 2: 200, 3: 300 ...}
*/

// const inputArr = [1, 2, 3, 4, 5]

// const resultObject = inputArr.reduce((acc, currentElement) => {
//   acc[currentElement] = currentElement * 100
//   return acc
// }, {})

// console.log(resultObject)



/*
2. Дан массив ['skill1', 'skill2', ... 'skilln'] скиллы произвольные самим придумать. 
Написать функцию которая создает из массива skills объект с рандомными значениями от 1 до 100, 
использовать reduce и Math.random()
    input: ['hook', 'blackhole']
    output: {'hook': 20, 'blackhole: 100'}
*/

// const inputSkills = ['swordsmanship', 'magic', 'stealth', 'archery', 'alchemy']

// function randomSkillsObject(skills) {
//     const randomSkillsObj = skills.reduce((acc, skill) => {

//     const randomValue = Math.floor(Math.random() * 100) + 1
    
//     acc[skill] = randomValue

//     return acc
// }, {})

//     return randomSkillsObj
// }

// const randomSkills = randomSkillsObject(inputSkills)

// console.log(randomSkills)
  
  

/*
3. Дан произвольный массив из чисел больше 0 с помощью reduce посчитать сумму четных и нечетных чисел.
    input: [1,2,3,4,5,6,7,8,9,10,11, 100, 200, 300]
    output: { even: 100, odd: 100 } // 100 это для примера, сумма должна высчитываться.
*/

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 100, 200, 300]

// const result = numbers.reduce((acc, number) => {
//   if (number % 2 === 0) {
//     acc.even += number
//   } else {
//     acc.odd += number
//   }
//   return acc
// }, { even: 0, odd: 0 })

// console.log(result)



/*
4. Дан массив  [ { name: 'Harry Potter', house: 'Gryfindor' }, { name: 'Cedric Diggory', house: 'Hufflepuff' }, 
{ name: 'Tonks', house: 'Hufflepuff' }, { name: 'Ronald Weasley', house: 'Gryfindor' }, 
{ name: 'Hermione Granger', house: 'Gryfindor' }]; Создайте новый массив, 
который будет содержать только имена мастеров из Хаффлпаффа. 
    Сделайте эту задачу двуми способоами:
        C помощью filter и map
*/

// const wizards = [
//     { name: 'Harry Potter', house: 'Gryffindor' },
//     { name: 'Cedric Diggory', house: 'Hufflepuff' },
//     { name: 'Tonks', house: 'Hufflepuff' },
//     { name: 'Ronald Weasley', house: 'Gryffindor' },
//     { name: 'Hermione Granger', house: 'Gryffindor' }
//  ]
  
//   const hufflepuffWizards = wizards
//     .filter(wizard => wizard.house === 'Hufflepuff')
//     .map(wizard => wizard.name)
  
//   console.log(hufflepuffWizards)

/* C помощью reduce */

// const wizards = [
//     { name: 'Harry Potter', house: 'Gryffindor' },
//     { name: 'Cedric Diggory', house: 'Hufflepuff' },
//     { name: 'Tonks', house: 'Hufflepuff' },
//     { name: 'Ronald Weasley', house: 'Gryffindor' },
//     { name: 'Hermione Granger', house: 'Gryffindor' }
// ]

// const hufflepuffWizards = wizards.reduce((result, wizard) => {
//     if (wizard.house === 'Hufflepuff') {
//         result.push(wizard.name)
//     }
//     return result
// }, [])

// console.log(hufflepuffWizards)



/*
5. Дан массив [3, 4, 1, 2, 7]. Создайте две переменные и запишите туда результат сортировки:
    От большего к меньшему
    /* От меньшего к большему 
*/

// const nums = [3, 4, 1, 2, 7]

// const descendingOrder = nums.slice().sort((a, b) => {
//     return b - a
// })

// const ascendingOrder = nums.slice().sort((a, b) => {
//     return a - b
// })

// console.log(descendingOrder)
// console.log(ascendingOrder)



/*
1. Создайте произвольный массив из строк и также создайте две переменные, куда запишите результат сортировки: 
    От A-Z
    От Z-A
*/

// const str = ['Apple', 'Year', 'Tree', 'Date', 'Umbrella']

// const strAZ = [...str].sort((a, b) => a.localeCompare(b));
// const strZA = [...str].sort((a, b) => b.localeCompare(a));

// console.log("Сортировка от A-Z:", strAZ)
// console.log("Сортировка от Z-A:", strZA)