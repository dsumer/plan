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
    import axios from 'axios';
    import TaskList from './TaskList.vue';

    export default {
        name: 'TasksApp',
        components: {
            TaskList
        },
        data: () => ({
            loading: true,
            now: Date.now(),
            tasks: []
        }),
        computed: {
            overdueTasks() {
                return this.tasks.filter((task) => new Date(task.nextTime) > this.now);
            },
            todayTasks() {
                return [];
            },
            futureTasks() {
                return this.tasks.filter((task) => new Date(task.nextTime) < this.now);
            },
        },
        mounted() {
            this.dateInterval = setInterval(() => {
                this.now = Date.now();
            }, 10000);

            axios.get('/api/task/list').then((response) => {
                this.tasks = response.data;
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
