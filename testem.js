/* eslint-env node */
module.exports = {
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,
  "launch_in_ci": [
    "PhantomJS",
    'Firefox',
    'Chrome'
  ],
  "launch_in_dev": [
    "PhantomJS",
    "Chrome"
  ],
  'browser_args': {
    'Chrome': {
      mode: 'ci',
      args: [
        '--disable-gpu',
        '--headless',
        '--remote-debugging-port=9222',
        // --no-sandbox is needed when running Chrome inside a container
        process.env.TRAVIS ? '--no-sandbox' : null
      ].filter(Boolean)
    }
  }
};
