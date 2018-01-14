<template>
    <div class="ui fluid card" :class="color">
        <div class="content">
            <div class="button-wrapper">
                <div class="ui button animated green">
                    <div class="visible content">
                        <i class="check icon"/>
                    </div>
                    <div class="hidden content">
                        Done
                    </div>
                </div>
            </div>
            <div class="button-wrapper right">
                <div class="ui button animated">
                    <div class="visible content">
                        <i class="write icon"/>
                    </div>
                    <div class="hidden content">
                        Edit
                    </div>
                </div>
                <div class="ui button animated red">
                    <div class="visible content">
                        <i class="delete icon"/>
                    </div>
                    <div class="hidden content">
                        Delete
                    </div>
                </div>
            </div>

            <div class="header">{{ task.name }}</div>
            <div class="meta">Every {{ task.duration }} {{ task.durationUnit }}</div>
            <div class="description">{{ task.description }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TaskItem',
        props: ['color', 'task']
    }
</script>

<style lang="less" scoped>
    .button-wrapper {
        position: absolute;
        left: 10px;
        top: 8px;
    }
    .button-wrapper.right {
        left: auto;
        right: 10px;
    }
    .card .button {
        display: block;
        margin-bottom: 5px;
    }
</style>
