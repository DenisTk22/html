import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentCreate, commentsLoad } from '../../redux/actions';
import uniqid from 'uniqid';
import SingleComment from './SingleComment';

export default function Comments(props) {

    const [textComment, setTextComment] = useState('');
    const comments = useSelector(state => { // передаем в переменную comments наши комментарии из commentsReducer.comments
        const {commentsReducer} = state;
        return commentsReducer.comments;
    });
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setTextComment(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(textComment, id))
    }

    // useEffect(() => {
    //     dispatch(commentsLoad());
    // }, []);

    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} className='comments-item-create'>
                <input type="text" value={textComment} onChange={handleInput}/>
                <input type="submit" hidden/> {/**будет срабатывать при нажатии enter */}
            </form>
            {!!comments.length && comments.map(res => { // если в comments есть комментарии, то мы пробегаемся по массиву comments, и отображаем каждый комментарий res
                return <SingleComment key={res.id} data={res}/> // возвращаем компонент SingleComment, присваиваем ему key и передаем в него data
            })}
        </div>
    )
}