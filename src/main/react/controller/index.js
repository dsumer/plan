import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { Button, Icon } from 'semantic-ui-react';
import TaskList from 'component/TaskList';
import TaskStore from '../store/TaskStore';

@observer
class App extends React.Component {
    constructor(props) {
        super(props);

        this.taskStore = TaskStore.create();
        this.taskStore.fetchTasks();
    }

    render() {
        if (this.taskStore.loading) {
            return 'Loading...';
        }

        return (
            <div>
                <div className="ui middle aligned center aligned grid">
                    <div className="column">
                        <h2>Your Tasks</h2>
                        <Button animated color="green">
                            <Button.Content visible>
                                <Icon name='add' />
                            </Button.Content>
                            <Button.Content hidden>Add</Button.Content>
                        </Button>

                        <TaskList
                            header="Overdue"
                            color="red"
                            items={this.taskStore.getOverdueTasks()}
                        />

                        <TaskList
                            header="Today"
                            color="green"
                            items={[]}
                        />

                        <TaskList
                            header="Future"
                            color="blue"
                            items={this.taskStore.getFutureTasks()}
                        />
                    </div>
                </div>

                <style jsx>{`
                  .grid {
                    padding: 10px;
                  }

                  .column {
                    max-width: 700px;
                  }
                `}</style>
            </div>
        );
    }
};

ReactDOM.render(<App/>, document.getElementById('app'));