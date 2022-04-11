const { checkInputs} = require('../components/Home/Home')

describe('Save date user',()=>{
  beforeAll(() =>{
      console.log('test start')
  })
  it('save localStorage and GlobalState', () =>{
    expect(checkInputs('')).toBe(filled == false)
  })
})


module.exports = {}
