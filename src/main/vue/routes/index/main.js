import Vue from 'vue';
import TasksApp from './component/TasksApp.vue';

new Vue({
    el: '#app',
    render: r => r(TasksApp)
});