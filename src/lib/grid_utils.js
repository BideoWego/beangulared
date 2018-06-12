
/**
 * Creates and returns a 2d array range from the source array
 * @param {Array} array - The source array
 * @param {number} y - The y position from which to start the range
 * @param {number} x - The x position from which to start the range
 * @param {number} h - The height of the range
 * @param {number} w - The width of the range
 * @returns {Array} The selected range
 */
export function range2d(array, y, x, h, w) {
  const range = [];

  for (let i = y; i < y + h; i++) {
    const row = array[i];
    const segment = [];
    for (let j = x; j < x + w; j++) {
      const value = row[j];
      segment.push(value);
    }
    range.push(segment);
  }

  return range;
}


/**
 * Creates and returns all the possible 2d array ranges from the source array
 * @param {Array} array - The source array
 * @param {number} h - The height of the range
 * @param {number} w - The width of the range
 * @returns {Array} The array of 2d ranges
 */
export function ranges2d(array, h, w) {
  const ranges = [];

  if (h <= 0 || h > array.length) {
    return ranges;
  }

  if (w <= 0 || w > array[0].length) {
    return ranges;
  }

  for (let y = 0; y <= array.length - h; y++) {
    const row = array[y];
    for (let x = 0; x <= row.length - w; x++) {
      const range = range2d(array, y, x, h, w);
      ranges.push(range);
    }
  }

  return ranges;
}


/**
 * Extracts values from a 2d array given a 2d pattern. Values are returned as a
 * flattened array where values are placed in the order they were extracted,
 * top to bottom, right to left
 * @param {Array} pattern - The pattern array
 * @param {Array} array - The source array
 * @returns {Array} The extracted values
 */
export function extract2d(pattern, array) {
  // TODO: Add option to only extract matching values or create another function that does this

  const values = [];

  for (let y = 0; y < pattern.length; y++) {
    const row = pattern[y];
    for (let x = 0; x < row.length; x++) {
      const placeholder = row[x];
      if (placeholder) {
        values.push(array[y][x]);
      }
    }
  }

  return values;
}
