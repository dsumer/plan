import React from 'react';
import { Card, Label, Icon, Button } from 'semantic-ui-react';

const TaskItem = ({color, name, duration, until}) => {
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
                <Card.Meta>{duration}</Card.Meta>
                <Card.Description><Label color={color}>{until}</Label></Card.Description>
            </Card.Content>

            <style jsx>{`
                .button-wrapper {
                    position: absolute;
                    left: 10px;
                    top: 12px;
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
                <h3 className="header">{this.props.header}</h3>

                {
                    this.props.items.map((item) => {
                        return (
                            <TaskItem key={item.id} color={this.props.color} {...item}/>
                        );
                    })
                }

                <style jsx>{`
                    .header {
                        margin-top: 50px;
                    }
                `}</style>
            </React.Fragment>
        );
    }
}