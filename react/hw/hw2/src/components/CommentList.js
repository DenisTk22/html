//Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.
// Можно использовать заготовку:
// const [comments, setComments] = useState([
// { id: 1, text: "Это первый комментарий" },
// { id: 2, text: "Это второй комментарий" },
// { id: 3, text: "Это третий комментарий" }
// ]);

import React, { useState } from 'react';

const CommentList = () => {

    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const removeComment = (id) => {
        setComments(
            comments.filter((comment) => comment.id !== id)
        );
    }
    return (
        <>
            <ul>
                {comments.map((comment) => (
                <li key={comment.id}>{comment.text} <button type="click" onClick={() => removeComment(comment.id)}>Удалить комментарий</button></li>
                ))}
            </ul>
        </>
    )
}

export default CommentList;