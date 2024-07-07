import { useState } from 'react'
import Button from '../components/Button/Button'
import { differences } from "../data";

export default function Camping() {

    // const stateArray = useState('Нажми на кнопку!')
    // const content = stateArray[0];
    // const setContent = stateArray[1]; // метод для изменения состояния

    //или другая запись
    const [contentType, setContentType] = useState(null);

    const handleClick = (type) => {
        // console.log('Button clicked', type);
        setContentType(type);
        // content = type;
    }

    // let tabContent = null;
    // if (contentType) {
    //   tabContent = <p>{differences[contentType]}</p>
    // } else {
    //   tabContent = <p>Нажми на кнопку!</p>
    // }

    return (
        <section>
            <h3>Хочу в поход</h3>
            {/* <Button text='button1'/> *передача через props */}
            <Button
                isActive={contentType === 'way'}
                buttonClick={() => handleClick('way')}
            >
                Хочу в поход
            </Button> {/**передача через children - более предпочтительно*/}
            <Button isActive={contentType === 'easy'} buttonClick={() => handleClick('easy')}><span>И я!</span></Button> {/**передача через children - более предпочтительно*/}
            <Button isActive={contentType === 'program'} buttonClick={() => handleClick('program')}><span>И мы!</span></Button> {/**передача через children - более предпочтительно*/}

            {/* {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Нажми на кнопку!</p>
          )} */}
            {/**или */}
            {/* {!contentType ? <p>Нажми на кнопку!</p> : null}
          {contentType ? <p>{differences[contentType]}</p> : null} */}
            {/**или */}
            {!contentType && <p>Нажми на кнопку!</p>}
            {contentType && <p>{differences[contentType]}</p>}
            {/**или */}
            {/* {tabContent} */}
        </section>
    )
}