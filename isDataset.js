function isDataset (obj) {
  return typeof obj === 'object' &&
    typeof obj.add === 'function' &&
    typeof obj.delete === 'function' &&
    typeof obj.has === 'function' &&
    typeof obj.match === 'function' &&
    typeof obj.size === 'number'
}

export default isDataset
