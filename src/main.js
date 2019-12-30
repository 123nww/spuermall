import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {request} from './network/request'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

// axios({
//   // /home/data?type=sell&page=3
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get',
// }).then(res => {
//   console.log(res.status);
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// axios.get('http://123.207.32.32:8000/home/data',
// {params:{
//   type: 'sell',
//   page: 1
// }}).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }),axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }),axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// })]).then(axios.spread((res1, res2, res3) => {
//   console.log(res1);  
//   console.log(res2);
//   console.log(res3);
// }))

request({
  url: '/home/multidata'
}).then(res => {
  console.log("main:"+res);
}).catch(err => {
  console.log(err);
})