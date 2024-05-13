import  {useState} from 'react';
import Button from '@mui/material/Button';

// демонстрация работы виртуального DOM - передача свойств от дечеренго компонента к родительскому
function ParentCounter() {

    const [count, setCount] = useState(0);
    console.log('parent');
    const upCount = () => {
        setCount(count + 1);
    }
    return ( 
        <>
            <h2>Родитель</h2>
            <ChildCount count={count}/>
            <Button onClick={upCount} variant="contained">Плюс 1</Button>
            {/* <button onClick={upCount}>Плюс 1</button> */}
        </>
     );
}

function ChildCount({count}) {
    console.log('click');
    return (  
        <>
            <p>Счетчик внутри</p>
            <p>Значение счетчика {count} </p>
        </>
    );
}



export default ParentCounter;