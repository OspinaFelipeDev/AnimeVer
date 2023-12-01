import React from "react";
import { TodoIcon } from './';

function CompleteIcon({ completed, 
    onComplete }) {
    return (
    <TodoIcon
    type="check"
    color={completed ? '#BB030B' : 'gray'}
    onClick={onComplete}
    />
    );
}

export { CompleteIcon };