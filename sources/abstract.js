export default class AbstractSource {
  name = 'Missing name'
  description = 'No description provided'
  /** @type {import('./types.js').Accuracy} */
  accuracy = 'Low'
  /** @type {import('./types.js').Config} */
  config = {}

  /**
   * Gets results for single episode
   * @type {import('./types.js').SearchFunction}
   */
  single (options) {
    throw new Error('Source doesn\'t implement single')
  }

  /**
   * Gets results for batch of episodes
   * @type {import('./types.js').SearchFunction}
   */
  batch (options) {
    throw new Error('Source doesn\'t implement batch')
  }

  /**
   * Gets results for a movie
   * @type {import('./types.js').SearchFunction}
   */
  movie (options) {
    throw new Error('Source doesn\'t implement movie')
  }
}
