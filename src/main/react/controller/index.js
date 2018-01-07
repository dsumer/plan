import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from 'semantic-ui-react';
import TaskList from 'component/TaskList';

class App extends React.Component {
    render() {
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
                            items={[
                                {
                                    name: 'Code',
                                    duration: 'Every 2 weeks',
                                    until: 'Since 3 days'
                                }
                            ]}
                        />

                        <TaskList
                            header="Today"
                            color="green"
                            items={[
                                {
                                    name: 'Code',
                                    duration: 'Every 4 weeks',
                                    until: 'Do it! :)'
                                },
                                {
                                    name: 'Code',
                                    duration: 'Every 4 weeks',
                                    until: 'Do it! :)'
                                }
                            ]}
                        />

                        <TaskList
                            header="Future"
                            color="blue"
                            items={[
                                {
                                    name: 'Code',
                                    duration: 'Every 4 weeks',
                                    until: 'In 7 days'
                                }
                            ]}
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