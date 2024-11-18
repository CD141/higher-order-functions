
const pets = [
    { name: 'Luna', age: 6, type: 'cat' },
    { name: 'Luke', age: 6, type: 'cat' },
    { name: 'Leia', age: 6, type: 'cat' },
    { name: 'Daisy', age: 4, type: 'dog' },
    { name: 'Lilly', age: 1, type: 'dog' },
    { name: 'Noodle', age: 0, type: 'cat' },
    { name: 'Nugget', age: 0, type: 'cat' },
    { name: 'Freddy', age: 2, type: 'fish' },
    { name: 'Ethel', age: 2, type: 'fish' }
]

const kids = [
    { name: 'Blake', age: 6 },
    { name: 'Avery', age: 4 },
    { name: 'Riley', age: 1 }
]

// ForEach
const printName = ({ name }) => console.log(name)
// kids.forEach(printName)
// pets.forEach(printName)

// Filter -- returns an array (size <= original array)
const isCat = ({ type }) => type === 'cat'
// pets.filter(isCat).forEach(printName)
const getName = pets.filter(({ type }) => type === 'cat')

// MAP -- returns an array (same size, but transformed)
const names = kids.map(({ name }) => name)
console.log(names)

// Exercice 1 -- print all kids names where age > 3 to the console
// kids.filter(({ age }) => age > 3).forEach(printName)


// Exercice 1.5
// [
//    {name: 'BLAKE', age: 9 },
//    {name: 'AVERY', age: 7 },
//    {name: 'RILEY', age: 4 }
// ]

const older = kids.map((kid) => ({
    name: kid.name.toUpperCase(),
    age: kid.age + 3
}))
//console.log(older)

// FIND (finds an item) and SOME (true/false if its in there)
const firstCat = pets.find(isCat)
// console.log(firstCat)

const hasCat = pets.some(isCat)
// if (hasCat) console.log('Found a Cat')

const firstTurtle = pets.find(({ type }) => type === 'turtle')
// console.log(firstTurtle)
    
const hasTurtle = pets.find(({ type }) => type === 'turtle')
// if (hasTurtle) console.log('Found a Turtle')
    
// SORT and toSorted
const compareAge = (a, b) => a.age === b.age ? 0 : a.age < b.age ? -1 : 1
const compareString = (a, b) => a === b ? 0 : a > b ? -1 : 1
// console.log([...pets].sort(compareAge))
// console.log(pets)

// console.log(names.sort(compareString))

// Exercice 2 -- create an array called "sortedCatNames", print out the array

// const sortedCatNames = pets.filter(isCat).map(getName).sort()
// console.log(sortedCatNames)

// REDUCE -- king of array functions (get back anything)
// console.log(pets.reduced((acc, { age }) => acc + age, 0))

// Example 1
// console.log(pets.reduce((acc, { name }) => `${name}, ${acc}`, ''))

// CURRYING

// const getLogger = name => message => console.log(name, message)

// const rlog = getLogger('Ryan')
// const klog = getLogger('Kaiden')

// rlog('Hi Kaiden')
// klog('Hi Alex')