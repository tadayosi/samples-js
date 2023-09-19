const hello = require('./hello')

test('hello', () => {
  expect(hello('Test')).toEqual('Hello Test!')
})
