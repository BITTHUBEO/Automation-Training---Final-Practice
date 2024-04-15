exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    menOuterwearPage: "./page_object/men_outerwear.js", 
    checkoutPage: "./page_object/checkout.js",
    checkoutForm: "./page_object/checkoutForm.js"
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/men_outerwear.js','./step_definitions/checkoutPage.js','./step_definitions/checkoutForm.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'Polymer-FinalPractice',
  plugins: {
    qase: {
      require: "codeceptjs-qase",
      apiKey: "e0922330af51acc5cf4aa9ec0e692ace901409996e988d4d6fa7cc7275a33987",
      projectName: "PP", //process.env.QASE_PROJECT_NAME,
      enabled: true, //process.env.QASE_REPORT || false,
      // runId: process.env.TEST_RUN_ID,
      // testRunTags: ['smoke-tests']
    }
  }
}