function isQuad (obj) {
  return typeof obj === 'object' &&
    typeof obj.equals === 'function' &&
    typeof obj.graph === 'object' &&
    typeof obj.object === 'object' &&
    typeof obj.predicate === 'object' &&
    typeof obj.subject === 'object' &&
    typeof obj.termType === 'string' &&
    typeof obj.value === 'string'
}

export default isQuad
