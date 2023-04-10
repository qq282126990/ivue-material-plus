import { createWebHistory, createRouter } from 'vue-router';
import Affix from '../components/affix.vue';
import Icon from '../components/icon.vue';
import Button from '../components/button.vue';
import Loading from '../components/loading.vue';
import Elevation from '../components/elevation.vue';
import Layout from '../components/layout.vue';
import avatar from '../components/avatar.vue';
import backTop from '../components/back-top.vue';
import badge from '../components/badge.vue';
import carousel from '../components/carousel.vue';
import Switch from '../components/switch.vue';
import Form from '../components/form.vue';
import Select from '../components/select.vue';
import card from '../components/card.vue';
import popover from '../components/popover.vue';
import input from '../components/input.vue';
import bottomNav from '../components/bottom-nav.vue';
import breadcrumb from '../components/breadcrumb.vue';
import steps from '../components/steps.vue';
import upLoad from '../components/upLoad.vue';
import spin from '../components/spin.vue';
import image from '../components/image.vue';
import progress from '../components/progress.vue';
import circle from '../components/circle.vue';
import notice from '../components/notice.vue';
import message from '../components/message.vue';
import loadingbar from '../components/loading-bar.vue';
import tabs from '../components/tabs.vue';
import datepicker from '../components/date-picker.vue';
import skeleton from '../components/skeleton.vue';
import collapse from '../components/collapse.vue';

const routes = [
  {
    path: '/collapse',
    name: 'collapse',
    component: collapse,
  },
  {
    path: '/skeleton',
    name: 'skeleton',
    component: skeleton,
  },
  {
    path: '/date-picker',
    name: 'datepicker',
    component: datepicker,
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: tabs,
  },
  {
    path: '/loading-bar',
    name: 'loadingbar',
    component: loadingbar,
  },
  {
    path: '/message',
    name: 'message',
    component: message,
  },
  {
    path: '/notice',
    name: 'notice',
    component: notice,
  },
  {
    path: '/circle',
    name: 'circle',
    component: circle,
  },
  {
    path: '/progress',
    name: 'progress',
    component: progress,
  },
  {
    path: '/Affix',
    name: 'Affix',
    component: Affix,
  },
  {
    path: '/Icon',
    name: 'Icon',
    component: Icon,
  },
  {
    path: '/Button',
    name: 'Button',
    component: Button,
  },
  {
    path: '/Loading',
    name: 'Loading',
    component: Loading,
  },
  {
    path: '/Elevation',
    name: 'Elevation',
    component: Elevation,
  },
  {
    path: '/Layout',
    name: 'Layout',
    component: Layout,
  },
  {
    path: '/avatar',
    name: 'avatar',
    component: avatar,
  },
  {
    path: '/back-top',
    name: 'backTop',
    component: backTop,
  },
  {
    path: '/badge',
    name: 'badge',
    component: badge,
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: carousel,
  },
  {
    path: '/Switch',
    name: 'Switch',
    component: Switch,
  },
  {
    path: '/Form',
    name: 'Form',
    component: Form,
  },
  {
    path: '/select',
    name: 'Select',
    component: Select,
  },
  {
    path: '/card',
    name: 'card',
    component: card,
  },
  {
    path: '/popover',
    name: 'popover',
    component: popover,
  },
  {
    path: '/input',
    name: 'input',
    component: input,
  },
  {
    path: '/bottom-nav',
    name: 'bottomNav',
    component: bottomNav,
  },
  {
    path: '/breadcrumb',
    name: 'breadcrumb',
    component: breadcrumb,
  },
  {
    path: '/steps',
    name: 'steps',
    component: steps,
  },
  {
    path: '/upLoad',
    name: 'upLoad',
    component: upLoad,
  },
  {
    path: '/spin',
    name: 'spin',
    component: spin,
  },
  {
    path: '/image',
    name: 'image',
    component: image,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;