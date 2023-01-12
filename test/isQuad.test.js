import { strictEqual } from 'assert'
import { describe, it } from 'mocha'
import isQuad from '../isQuad.js'

function createQuad () {
  return {
    equals: () => {},
    graph: {},
    object: {},
    predicate: {},
    subject: {},
    termType: '',
    value: ''
  }
}

describe('isQuad', () => {
  it('should be a function', () => {
    strictEqual(typeof isQuad, 'function')
  })

  it('should return true if the given object implements the Term interface', () => {
    strictEqual(isQuad(createQuad()), true)
  })

  it('should check the .equals method', () => {
    const obj = createQuad()
    obj.equals = undefined

    strictEqual(isQuad(obj), false)
  })

  it('should check the .graph property', () => {
    const obj = createQuad()
    obj.graph = undefined

    strictEqual(isQuad(obj), false)
  })

  it('should check the .object property', () => {
    const obj = createQuad()
    obj.object = undefined

    strictEqual(isQuad(obj), false)
  })

  it('should check the .predicate property', () => {
    const obj = createQuad()
    obj.predicate = undefined

    strictEqual(isQuad(obj), false)
  })

  it('should check the .subject property', () => {
    const obj = createQuad()
    obj.subject = undefined

    strictEqual(isQuad(obj), false)
  })

  it('should check the .termType property', () => {
    const obj = createQuad()
    obj.termType = undefined

    strictEqual(isQuad(obj), false)
  })

  it('should check the .value property', () => {
    const obj = createQuad()
    obj.value = undefined

    strictEqual(isQuad(obj), false)
  })
})
