const WebPageTest = require('webpagetest')
const { runTest } = require('./wptHelpers')

module.exports = {
  onPostBuild: async ({ netlifyConfig, inputs }) => {
    console.log(inputs.location.location)
    console.log('🔥🔥Warming Up The WebPageTest🔥🔥')
    const wpt = new WebPageTest(
      'https://www.webpagetest.org',
      netlifyConfig.build.environment.WPT_API_KEY,
    )
    const url = netlifyConfig.build.environment.DEPLOY_PRIME_URL
    let options = {
      location: inputs.location.location,
      firstViewOnly: inputs.firstViewOnly.firstViewOnly,
      connectivity: inputs.connectivity.connectivity,
      runs: 1,
      pollResults: 5,
    }
    console.log('WPT Test Started 💨💨💨')
    await runTest(wpt, url, options)
      .then(async (test) => {
        if (test) {
          console.log('Config: ⬇️')
          console.log({
            Test_ID: test.result.data.id,
            Full_WebPageTest_Results: test.result.data.summary,
            Test_Location: test.result.data.location,
            Test_Origin: test.result.data.from,
            Connectivity: test.result.data.connectivity,
          })
          console.log('Your Scores Are Here: ⬇️')
          console.log({
            TTFB: test.result.data.average.firstView['TTFB'],
            StartRender:
              test.result.data.average.firstView[
                'chromeUserTiming.LargestContentfulPaint'
              ],
            FCP: test.result.data.average.firstView['firstContentfulPaint'],
            LCP: test.result.data.average.firstView[
              'chromeUserTiming.LargestContentfulPaint'
            ],
            CLS: test.result.data.average.firstView[
              'chromeUserTiming.CumulativeLayoutShift'
            ],
            TBT: test.result.data.average.firstView['TotalBlockingTime'],
            Full_WebPageTest_Results: test.result.data.summary,
          })
        }
      })
      .catch(async (err) => {
        console.log(err)
      })
  },
}
