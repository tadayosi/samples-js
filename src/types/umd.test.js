const GreetingUmd = require('./umd')

describe('umd', () => {
  test('new greeting', () => {
    const g = new GreetingUmd('Test')
    expect(g.name).toEqual('Test')
    expect(g.hello()).toEqual('Hello Test!')
  })

  test('greeting', () => {
    const g = GreetingUmd('Test')
    expect(g.name).toEqual('Test')
    expect(g.hello()).toEqual('Hello Test!')
  })
})
