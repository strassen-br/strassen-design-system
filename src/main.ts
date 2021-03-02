import { Plugin } from 'vue'
import StButton from './components/atoms/StButton.vue'
import StLink from './components/atoms/StLink.vue'
import StIcon from './components/atoms/StIcon.vue'
import StTextInput from './components/atoms/StTextInput.vue'
import './index.css'

const plugin: Plugin = {
  install(app) {
    app.component('StButton', StButton)
    app.component('StLink', StLink)
    app.component('StIcon', StIcon)
    app.component('StTextInput', StTextInput)
  },
}

export default plugin
