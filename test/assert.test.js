import { rejects, strictEqual, throws } from 'assert'
import { describe, it } from 'mocha'
import rdf from 'rdf-ext'
import {
  datasetEqual,
  datasetFileEqual,
  datasetFileEqualFactory,
  quadEqual,
  quadStreamEqual,
  quadStreamFileEqual,
  quadStreamFileEqualFactory,
  termEqual
} from '../assert.js'

describe('assert', () => {
  describe('datasetEqual', () => {
    it('should be a function', () => {
      strictEqual(typeof datasetEqual, 'function')
    })

    it('should do nothing if the given datasets are equal', () => {
      const a = [rdf.quad(rdf.namedNode('subject'), rdf.namedNode('predicate'), rdf.namedNode('object'))]
      const b = [rdf.quad(rdf.namedNode('subject'), rdf.namedNode('predicate'), rdf.namedNode('object'))]

      datasetEqual(a, b)
    })

    it('should throw if the given datasets are not equal', () => {
      const a = [rdf.quad(rdf.namedNode('subject'), rdf.namedNode('predicate'), rdf.namedNode('object'))]
      const b = [rdf.quad(rdf.namedNode('subject'), rdf.namedNode('predicate'), rdf.literal('object'))]

      throws(() => {
        datasetEqual(a, b)
      })
    })
  })

  describe('datasetFileEqual', () => {
    it('should be a function', () => {
      strictEqual(typeof datasetFileEqual, 'function')
    })

    it('should do nothing if the given datasets are equal', async () => {
      const a = [rdf.quad(rdf.namedNode('subject'), rdf.namedNode('predicate'), rdf.namedNode('object'))]

      await datasetFileEqual(a, 'equal')
    })

    it('should throw if the given datasets are not equal', async () => {
      const a = [rdf.quad(rdf.namedNode('subject'), rdf.namedNode('predicate'), rdf.namedNode('object'))]

      await rejects(async () => {
        await datasetFileEqual(a, 'not-equal')
      })
    })
  })

  describe('datasetFileEqualFactory', () => {
    it('should be a function', () => {
      strictEqual(typeof datasetFileEqualFactory, 'function')
    })

    it('should create a datasetFileEqual with alternative parameters', async () => {
      const a = [rdf.quad(rdf.namedNode('subject'), rdf.namedNode('predicate'), rdf.namedNode('object'))]

      const datasetFileEqual = datasetFileEqualFactory({ base: 'test/assets-alternative', ext: '.nt' })

      await datasetFileEqual(a, 'alternative-equal')

      await rejects(async () => {
        await datasetFileEqual(a, 'alternative-not-equal')
      })
    })
  })

  describe('quadEqual', () => {
    it('should be a function', () => {
      strictEqual(typeof quadEqual, 'function')
    })

    it('should do nothing if the given quads are equal', async () => {
      const a = rdf.quad(rdf.namedNode('subject'), rdf.namedNode('predicate'), rdf.namedNode('object'))
      const b = rdf.quad(rdf.namedNode('subject'), rdf.namedNode('predicate'), rdf.namedNode('object'))

      quadEqual(a, b)
    })

    it('should throw if the given quads are not equal', async () => {
      const a = rdf.quad(rdf.namedNode('subject'), rdf.namedNode('predicate'), rdf.namedNode('object'))
      const b = rdf.quad(rdf.namedNode('subject'), rdf.namedNode('predicate'), rdf.literal('object'))

      throws(() => {
        quadEqual(a, b)
      })
    })
  })

  describe('quadStreamEqual', () => {
    it('should be a function', () => {
      strictEqual(typeof quadStreamEqual, 'function')
    })

    it('should do nothing if the given quadStream is equal to the dataset', async () => {
      const a = rdf.dataset([rdf.quad(rdf.namedNode('subject'), rdf.namedNode('predicate'), rdf.namedNode('object'))]).toStream()
      const b = [rdf.quad(rdf.namedNode('subject'), rdf.namedNode('predicate'), rdf.namedNode('object'))]

      await quadStreamEqual(a, b)
    })

    it('should reject if the given quadStream is not equal to the dataset', async () => {
      const a = rdf.dataset([rdf.quad(rdf.namedNode('subject'), rdf.namedNode('predicate'), rdf.namedNode('object'))]).toStream()
      const b = [rdf.quad(rdf.namedNode('subject'), rdf.namedNode('predicate'), rdf.literal('object'))]

      await rejects(async () => {
        await quadStreamEqual(a, b)
      })
    })
  })

  describe('quadStreamFileEqual', () => {
    it('should be a function', () => {
      strictEqual(typeof quadStreamFileEqual, 'function')
    })

    it('should do nothing if the given quadStream is equal to the file content', async () => {
      const a = rdf.dataset([rdf.quad(rdf.namedNode('subject'), rdf.namedNode('predicate'), rdf.namedNode('object'))]).toStream()

      await quadStreamFileEqual(a, 'equal')
    })

    it('should reject if the given quadStream is not equal to the file content', async () => {
      const a = rdf.dataset([rdf.quad(rdf.namedNode('subject'), rdf.namedNode('predicate'), rdf.namedNode('object'))]).toStream()

      await rejects(async () => {
        await quadStreamFileEqual(a, 'not-equal')
      })
    })
  })

  describe('quadStreamFileEqualFactory', () => {
    it('should be a function', () => {
      strictEqual(typeof quadStreamFileEqualFactory, 'function')
    })

    it('should create a quadStreamFileEqual with alternative parameters', async () => {
      const a = rdf.dataset([rdf.quad(rdf.namedNode('subject'), rdf.namedNode('predicate'), rdf.namedNode('object'))])

      const quadStreamFileEqual = quadStreamFileEqualFactory({ base: 'test/assets-alternative', ext: '.nt' })

      await quadStreamFileEqual(a.toStream(), 'alternative-equal')

      await rejects(async () => {
        await quadStreamFileEqual(a.toStream(), 'alternative-not-equal')
      })
    })
  })

  describe('termEqual', () => {
    it('should be a function', () => {
      strictEqual(typeof termEqual, 'function')
    })

    it('should do nothing if the given terms are equal', async () => {
      const a = rdf.namedNode('object')
      const b = rdf.namedNode('object')

      termEqual(a, b)
    })

    it('should throw if the given terms are not equal', async () => {
      const a = rdf.namedNode('object')
      const b = rdf.literal('object')

      throws(() => {
        termEqual(a, b)
      })
    })
  })
})
