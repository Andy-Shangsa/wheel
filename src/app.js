import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Content from './content'
import Sider from './sider'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'
import Popover from './popover'


Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-input', Input)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-row', Row)
Vue.component('w-col', Col)
Vue.component('w-layout', Layout)
Vue.component('w-header', Header)
Vue.component('w-content', Content)
Vue.component('w-footer', Footer)
Vue.component('w-sider', Sider)
Vue.use(plugin)
Vue.component('w-tabs', Tabs)
Vue.component('w-tabs-head', TabsHead)
Vue.component('w-tabs-item', TabsItem)
Vue.component('w-tabs-body', TabsBody)
Vue.component('w-tabs-pane', TabsPane)
Vue.component('w-popover', Popover)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: '',
    selectedTab: 'sports'
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value)
    },
    showToast1() {
      this.showToast('top')
    },
    showToast2() {
      this.showToast('middle')
    },
    showToast3() {
      this.showToast('bottom')
    },
    showToast(position) {
      this.$toast(`您的余额为 ${parseInt(Math.random() * 100)}. 需要充值`, {
        enableHtml: false,
        autoClose: false,
        position,
        closeButton: {
          text: '充值',
          callback: (toast) => {
            toast.log()
          }
        }
      })
    }
  }
})

// // 单元测试
// try {
//   import chai from 'chai'
//   import spies from 'chai-spies'
//   chai.use(spies)
//   const expect = chai.expect
//   {
//     // 测试传入icon
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting'
//       }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-setting')
//     vm.$el.remove()
//     vm.$destroy()
//   }
//   {
//     // 测试loading与icon同时传入
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting',
//         loading: true
//       }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-loading')
//     vm.$el.remove()
//     vm.$destroy()
//   }
//   {
//     // 测试传入iconPosition
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting',
//         iconPosition: 'right'
//       }
//     })
//     // 挂载到具体实例上才能取到css样式
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     vm.$mount(div)
//     let useElement = vm.$el.querySelector('svg')
//     let { order } = window.getComputedStyle(useElement)
//     expect(order).to.eq("2")
//     // 销毁测试实例，防止内存泄露
//     vm.$el.remove()
//     vm.$destroy()
//   }

//   {
//     // 测试 click 事件
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting',
//       }
//     })
//     vm.$mount()
//     let spy = chai.spy(() => {})
//     vm.$on('click', spy)
//     // 希望 click 事件被触发
//     let button = vm.$el
//     button.click()
//     expect(spy).to.have.been.called()
//     vm.$el.remove()
//     vm.$destroy()
//   }
// } catch (error) {
//   window.errors = [error]
// } finally {
//   window.errors && window.errors.forEach((error) => {
//     console.error(error.message)
//   })
// }