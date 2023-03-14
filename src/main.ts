import { createApp, defineComponent, h } from 'vue'
import HelloWorldVue from './components/HelloWorld.vue'
// import App from './App.vue'
const img = require('./assets/logo.png') //eslint-disable-line
const App = defineComponent({
  render() {
    return h('div', { id: 'app' }, [
      h('img', {
        alt: 'Vue logo',
        src: img,
      }),
      h(HelloWorldVue, {
        age: 12,
      }),
    ])
  },
})

createApp(App).mount('#app')
