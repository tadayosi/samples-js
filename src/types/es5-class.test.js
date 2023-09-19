const Greeting = require('./es5-class')

describe('greeting', () => {
  test('new greeting', () => {
    const g = new Greeting('Test')
    expect(g.name).toEqual('Test')
    expect(g.hello()).toEqual('Hello Test!')
  })

  test('greeting', () => {
    const g = Greeting('Test')
    expect(g.name).toEqual('Test')
    expect(g.hello()).toEqual('Hello Test!')
  })
})
