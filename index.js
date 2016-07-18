import Vue from 'vue'

const App = {
  render(h) {
    return (
      <h1>Hello Vue 2!</h1>
    )
  }
}

new Vue({
  el: '#app',
  render: h => h(App)
})