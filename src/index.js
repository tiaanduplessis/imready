const imready = () =>
  new Promise((resolve, reject) => {
    if (!document && !document.readyState) {
      return reject(new Error('no document global with readyState'))
    }

    const { readyState } = document

    if (readyState !== 'loading') {
      return resolve(true)
    }

    document.addEventListener('DOMContentLoaded', () => resolve(true))
  })

export default imready()
