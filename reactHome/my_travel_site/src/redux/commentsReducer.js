import { 
    COMMENT_CREATE, 
    COMMENTS_LOAD, 
    COMMENT_UPDATE, 
    COMMENT_DELETE 
} from "./types"

const initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) => { // reducer принимает state и actionб а на выходе дает state
console.log('comments reduser >>>', action);
    switch (action.type) { //ловим тип экшина

        case COMMENT_CREATE:
            return {
                ...state, // делаем копию state
                comments: [...state.comments, action.data] // ...state.comments - сохраняем копию комментариев, передаем в action data
            }

        case COMMENTS_LOAD:
            const commentsNew = action.data.map(res => {
                return {
                    text: res.name, //name из объекта c загруженными комментариями с сайта
                    id: res.id
                }
            })
            return {
                ...state, // делаем копию state
                comments: commentsNew
            }

        case COMMENT_UPDATE:
            const {data} = action; // приcваиваем переменной data обновленный комментарий
            const {comments} = state;
            const itemIndex = comments.findIndex(res => res.id === data.id) // ловим индекс комментария, id которого = id обновленного комментария

            const nextComments = [ // используем оператор спред и метод slice чтобы скопировать в наш новый массив nextComments все элементы старого массива comments, начиная с 1го элемента и до элемента с нашим индексом (этот элемент не копируется в новый массив nextComments)
                ...comments.slice(0, itemIndex),
                data, // Добавляем новый комментарий в наш массив, это переменная data
                ...comments.slice(itemIndex + 1) // копируем в новый массив оставшиеся элементы после обновленного элемента
            ];

            return {
                ...state, // делаем копию state
                comments: nextComments // передаем в массив comments обновленный массив nextComments с измененным комментарием
            }

        case COMMENT_DELETE: // Логика похожа на COMMENT_UPDATE, изолируем её в самовызывающейся функции
            return (() => {
                const { id } = action; // приcваиваем переменной data обновленный комментарий
                const { comments } = state;
                const itemIndex = comments.findIndex(res => res.id === id) // ловим индекс комментария, id которого = id удаленного комментария

                const nextComments = [ // используем оператор спред и метод slice чтобы скопировать в наш новый массив nextComments все элементы старого массива comments, начиная с 1го элемента и до элемента с нашим индексом (этот элемент не копируется в новый массив nextComments)
                    ...comments.slice(0, itemIndex),
                    ...comments.slice(itemIndex + 1) // копируем в новый массив оставшиеся элементы после обновленного элемента
                ];

                return {
                    ...state, // делаем копию state
                    comments: nextComments // передаем в массив comments обновленный массив nextComments с измененным комментарием
                }
            })();

        default:
            return state;
    }
}