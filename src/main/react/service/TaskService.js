import GlobalService from './GlobalService';

class _TaskService {

    async getTasks() {
        return await GlobalService.getAsync(`/api/task/`);
    }
}

const TaskService = new _TaskService();

export default TaskService;