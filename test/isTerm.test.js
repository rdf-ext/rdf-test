import { strictEqual } from 'assert'
import { describe, it } from 'mocha'
import isTerm from '../isTerm.js'

function createTerm () {
  return {
    equals: () => {},
    termType: '',
    value: ''
  }
}

describe('isTerm', () => {
  it('should be a function', () => {
    strictEqual(typeof isTerm, 'function')
  })

  it('should return true if the given object implements the Term interface', () => {
    strictEqual(isTerm(createTerm()), true)
  })

  it('should check the .equals method', () => {
    const obj = createTerm()
    obj.equals = undefined

    strictEqual(isTerm(obj), false)
  })

  it('should check the .termType property', () => {
    const obj = createTerm()
    obj.termType = undefined

    strictEqual(isTerm(obj), false)
  })

  it('should check the .value property', () => {
    const obj = createTerm()
    obj.value = undefined

    strictEqual(isTerm(obj), false)
  })
})
