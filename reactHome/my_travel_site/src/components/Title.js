import { useDispatch, useSelector } from "react-redux"; // useDispatch вместо функции mapDispatchToProps, useSelector вместо mapStateToProps
import { inputText } from "../redux/actions";

function Title(props) {

    const text = useSelector(state => {
        const {inputReducer} = state;
        return inputReducer.text;
    });
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(inputText(event.target.value))
    }

    return (
        <div>
            <div className="card-title">
                <div className="card-title-top">
                    <input type="text" onChange={handleChange}/>
                </div>
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Title;