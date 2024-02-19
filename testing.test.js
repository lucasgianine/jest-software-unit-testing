const sum = require('./testing/sum')
const subtract = require('./testing/subtract')
const multiply = require('./testing/multiply')
const divide = require('./testing/divide')

test('Soma que deve resultar 3', function () {
  expect(sum(1, 2)).toBe(3)
})

test.skip('Soma que deve resultar 5 (fail test)', function () {
  expect(sum(2, 2)).toBe(5)
})

test('Subtração que deve resultar 2', function () {
  expect(subtract(5, 3)).toBe(2)
})

test('Multiplicação que deve resultar 10', function () {
  expect(multiply(2, 5)).toBe(10)
})

test('Divisão que deve resultar 2', function () {
  expect(divide(10, 5)).toBe(2)
})
