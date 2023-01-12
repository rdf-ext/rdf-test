import { strictEqual } from 'assert'
import { describe, it } from 'mocha'
import isDataset from '../isDataset.js'

function createDataset () {
  return {
    add: () => {},
    delete: () => {},
    has: () => {},
    match: () => {},
    size: 0
  }
}

describe('isDataset', () => {
  it('should be a function', () => {
    strictEqual(typeof isDataset, 'function')
  })

  it('should return true if the given object implements the DatasetCore interface', () => {
    strictEqual(isDataset(createDataset()), true)
  })

  it('should check the .add method', () => {
    const obj = createDataset()
    obj.add = undefined

    strictEqual(isDataset(obj), false)
  })

  it('should check the .delete method', () => {
    const obj = createDataset()
    obj.delete = undefined

    strictEqual(isDataset(obj), false)
  })

  it('should check the .has method', () => {
    const obj = createDataset()
    obj.has = undefined

    strictEqual(isDataset(obj), false)
  })

  it('should check the .match method', () => {
    const obj = createDataset()
    obj.match = undefined

    strictEqual(isDataset(obj), false)
  })

  it('should check the .size property', () => {
    const obj = createDataset()
    obj.size = undefined

    strictEqual(isDataset(obj), false)
  })
})
