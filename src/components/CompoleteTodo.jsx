import React from "react";

export const CompleteTodo = (props) => {
    const { todos, onClickBack } = props;

    return (
        <div className="complete-area">
            <p className="title">完了のTODO</p>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <div key={todo}>
                            <li>
                                <div className="list-row">
                                    <p>{todo}</p>
                                    <button onClick={() => onClickBack(index)}>
                                        戻す
                                    </button>
                                </div>
                            </li>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};
