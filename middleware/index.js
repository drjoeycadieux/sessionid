import Vue from 'vue'
import Bugsnag from '@bugsnag/js'
import BugsnagPluginVue from '@bugsnag/plugin-vue'
import BugsnagPerformance from '@bugsnag/browser-performance'

Bugsnag.start({
  apiKey: '14c1c8d893b9062b29f7fcc984154449',
  plugins: [new BugsnagPluginVue()]
})
BugsnagPerformance.start({ apiKey: '14c1c8d893b9062b29f7fcc984154449' })