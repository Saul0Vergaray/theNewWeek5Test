const {shuffleArray} = require('./utils')
let testArr=[1, 2, 3, 6, 5, 4]
describe('shuffleArray should', () => {

    test('check that shuffleArray returns an array', () =>{
        expect(Array.isArray(shuffleArray(testArr))).toBe(true)
    }),
    
    it('checks that it returns an array of the same length as the argument sent in', () =>{
        expect(shuffleArray(testArr)).toHaveLength(testArr.length)
    })
})