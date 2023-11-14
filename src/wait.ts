/**
 * Wait for a number of milliseconds.
 * @param milliseconds The number of milliseconds to wait. Defaults to 1000 milliseconds if not specified.
 * @returns {Promise<string>} Resolves with 'done!' after the wait is over.
 */
export async function wait(milliseconds = 1000): Promise<string> {
  return new Promise(resolve => {
    if (isNaN(milliseconds)) {
      throw new Error('milliseconds not a number')
    }

    setTimeout(() => resolve('done!'), milliseconds)
  })
}
