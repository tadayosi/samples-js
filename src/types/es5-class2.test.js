const Greeting = require('./es5-class2')

describe('es5 class 2', () => {
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
