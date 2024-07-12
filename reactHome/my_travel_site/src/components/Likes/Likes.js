import {connect} from 'react-redux'; // функция connect поможет интегрировать react компонент c redux
import { incrementLikes, decrementLikes } from '../../redux/actions';

function Likes(propps) {

    return (
        <div className="button-controls">
            <button className="feedbackTravel__saveFeedback" onClick={propps.onIncrementLikes}>🎔 {propps.likes}</button> {/**🎔 - heart symbol unicode */}
            <button className="feedbackTravel__saveFeedback" onClick={propps.onDecrementLikes}>Dislike</button>
        </div>
    )
}

function mapStateToProps(state) { // доступ к глобальному объекту state
    const {likesReducer} = state;
    return {
        likes: likesReducer.likes // свойство likes будет равнять likes, которое хранится в state
    }     
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => {
            // const action = { type: 'INCREMENT'}; // создаем действие
            // dispatch(action); // запускаем действие
            return dispatch(incrementLikes());
        },
        onDecrementLikes: () => {
            // const action = { type: 'DECREMENT'}; // создаем действие
            // dispatch(action); // запускаем действие
            return dispatch(decrementLikes());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes); //соединение функции mapStateToProps с компонентом Likes, мы оборачиваем в компонент высшего порядка - функцию connect компонент Likes и на выходе получаем новый компонент, в котором будут доступны свойства  для взаимодействия с хранилищем redux