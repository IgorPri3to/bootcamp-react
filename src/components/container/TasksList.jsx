import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const TasksList = () => {
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            {/* TODO: Use for/map to renderize a list */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
}

export default TasksList;