import Vue from 'vue'
import App from './App.vue'
import {Row, Col, Card, Button, MessageBox, Message, Loading, Notification} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Button);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
