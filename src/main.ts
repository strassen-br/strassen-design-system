import { Plugin } from 'vue'
import StButton from './components/atoms/StButton.vue'
import './index.css'

const plugin: Plugin = {
  install(app) {
    app.component('StButton', StButton)
  },
}

export default plugin
