<template>
    <div class="ui middle aligned center aligned grid">
        <div v-if="loading" class="column">
            <h2>Loading...</h2>
        </div>
        <div v-else class="column">
            <h2>Your Tasks</h2>
            <div class="ui animated button green">
                <div class="visible content">
                    <i class="add icon"></i>
                </div>
                <div class="hidden content">Add</div>
            </div>
            <task-list header="Overdue" color="red" :tasks="overdueTasks"/>
            <task-list header="Today" color="green" :tasks="todayTasks"/>
            <task-list header="Future" color="blue" :tasks="futureTasks"/>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import axios from 'axios';
    import TaskList from './TaskList.vue';

    export default {
        name: 'TasksApp',
        components: {
            TaskList
        },
        data: () => ({
            loading: true,
            now: moment(),
            tasks: []
        }),
        computed: {
            overdueTasks() {
                return this.tasks.filter((task) => this.now.isAfter(task.nextTime, 'day'));
            },
            todayTasks() {
                return this.tasks.filter((task) => this.now.isSame(task.nextTime, 'day'));
            },
            futureTasks() {
                return this.tasks.filter((task) => this.now.isBefore(task.nextTime, 'day'));
            },
        },
        mounted() {
            this.dateInterval = setInterval(() => {
                this.now = moment();
            }, 10000);

            axios.get('/api/task/list').then((response) => {
                this.tasks = response.data;
                for (let task of this.tasks) {
                    task.nextTime = moment([task.nextTime.year, task.nextTime.monthValue - 1, task.nextTime.dayOfMonth]);
                }
                this.loading = false;
            });
        },
        beforeDestroy() {
            clearInterval(this.dateInterval)
        }
    }
</script>

<style lang="less" scoped>
    .grid {
        padding: 10px;
    }

    .column {
        max-width: 700px;
    }
</style>
