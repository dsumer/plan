<template>
    <div class="task-list">
        <div class="ui horizontal divider">
            {{ header }}
        </div>

        <task-item v-for="task in tasks" :key="task.id" :color="color" :task="task"/>
    </div>
</template>

<script>
    import TaskItem from './TaskItem.vue';

    export default {
        name: 'TaskList',
        props: ['header', 'color', 'tasks'],
        components: {
            TaskItem
        }
    }
</script>

<style lang="less" scoped>
    .task-list {
        margin-top: 50px;
    }
</style>
