import React from 'react';
import { Card, Label, Icon, Button, Divider } from 'semantic-ui-react';

const TaskItem = ({color, name, duration, durationUnit, until}) => {
    return (
        <Card fluid color={color}>
            <Card.Content>
                <div className="button-wrapper">
                    <Button animated color="green">
                        <Button.Content visible>
                            <Icon name='check' />
                        </Button.Content>
                        <Button.Content hidden>Done</Button.Content>
                    </Button>
                </div>
                <div className="button-wrapper right">
                    <Button animated>
                        <Button.Content visible>
                            <Icon name='write' />
                        </Button.Content>
                        <Button.Content hidden>Edit</Button.Content>
                    </Button>
                    <Button animated color="red">
                        <Button.Content visible>
                            <Icon name='delete' />
                        </Button.Content>
                        <Button.Content hidden>Delete</Button.Content>
                    </Button>
                </div>

                <Card.Header>{name}</Card.Header>
                <Card.Meta>Every {duration} {durationUnit}</Card.Meta>
                <Card.Description><Label color={color}>{until}</Label></Card.Description>
            </Card.Content>

            <style jsx>{`
                .button-wrapper {
                    position: absolute;
                    left: 10px;
                    top: 8px;
                }
                .button-wrapper.right {
                    left: auto;
                    right: 10px;
                }
                :global(.card .button) {
                    display: block;
                    margin-bottom: 5px;
                }
            `}</style>
        </Card>
    );
};

export default class TaskList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="tasklist">
                    <Divider horizontal>{this.props.header}</Divider>

                    {
                        this.props.items.map((item) => {
                            return (
                                <TaskItem key={item.id} color={this.props.color} {...item}/>
                            );
                        })
                    }
                </div>

                <style jsx>{`
                    .tasklist {
                        margin-top: 50px;
                    }
                `}</style>
            </React.Fragment>
        );
    }
}