import {types, flow} from 'mobx-state-tree';
import TaskService from '../service/TaskService';

const TaskStore = types.model({
    loading: true,
    tasks: types.frozen
}).actions((self) => {
    return {
        fetchTasks: flow(function* () {
            self.tasks = yield TaskService.getTasks();
            self.loading = false;
        })
    }
}).views((self) => ({
    getOverdueTasks() {
        return self.tasks.filter((task) => new Date(task.nextTime) > new Date());
    },
    getFutureTasks() {
        return self.tasks.filter((task) => new Date(task.nextTime) < new Date());
    }
}));
export default TaskStore;