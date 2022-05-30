exports.runTest = (wpt, url, options) => {
  const tempOptions = JSON.parse(JSON.stringify(options))
  return new Promise((resolve, reject) => {
    console.info(`Submitting test for ${url}`)
    wpt.runTest(url, tempOptions, async (err, result) => {
      try {
        if (!err) {
          return resolve({ result: result })
        } else {
          return reject(err)
        }
      } catch (e) {
        console.info(e)
      }
    })
  })
}
