import { strictEqual } from 'assert'
import { join, resolve } from 'path'
import rdf from 'rdf-ext'

const datasetFileEqual = datasetFileEqualFactory()
const quadStreamFileEqual = quadStreamFileEqualFactory()

function datasetEqual (actual, expected) {
  actual = rdf.dataset(actual).toCanonical()
  expected = rdf.dataset(expected).toCanonical()

  strictEqual(actual, expected)
}

function datasetFileEqualFactory ({ base = 'test/assets', ext = '.ttl' } = {}) {
  return async (dataset, name) => {
    const filename = join(resolve(base), `${name}${ext}`)

    datasetEqual(dataset, await rdf.io.dataset.fromURL(filename))
  }
}

function quadEqual (actual, expected) {
  actual = rdf.fromTerm(actual).toCanonical()
  expected = rdf.fromTerm(expected).toCanonical()

  strictEqual(actual, expected)
}

async function quadStreamEqual (actual, expected) {
  actual = (await rdf.dataset().import(actual)).toCanonical()
  expected = rdf.dataset(expected).toCanonical()

  strictEqual(actual, expected)
}

function quadStreamFileEqualFactory ({ base = 'test/assets', ext = '.ttl' } = {}) {
  return async (quadStream, name) => {
    const filename = join(resolve(base), `${name}${ext}`)

    await quadStreamEqual(quadStream, await rdf.io.dataset.fromURL(filename))
  }
}

function termEqual (actual, expected) {
  actual = rdf.fromTerm(actual).toCanonical()
  expected = rdf.fromTerm(expected).toCanonical()

  strictEqual(actual, expected)
}

export {
  datasetEqual,
  datasetFileEqual,
  datasetFileEqualFactory,
  quadEqual,
  quadStreamEqual,
  quadStreamFileEqual,
  quadStreamFileEqualFactory,
  termEqual
}
