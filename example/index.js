import Vue from 'vue';
import VueRating from '../src';

Vue.config.debug = true;

new Vue({
  el: 'body',
  components: {
    'vue-rating': VueRating,
  },
});
