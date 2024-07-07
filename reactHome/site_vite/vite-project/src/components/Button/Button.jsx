import "./Button.css"

// export default function Button({text}) { // передача через props
//     return <button className="button">{text}</button>
// }

export default function Button({ children, buttonClick, isActive }) { // с помощью дабавления парамера buttonClick можно передавать функции при воздействие на кнопку в App

let classes = 'button'
if (isActive) classes += ' active'

    return (<button className={classes} // или className={isActive ? 'button active' : 'button'}
                   onClick={buttonClick} 
                   onDoubleClick={() => console.log('double')} // еще один синтаксис
                   >
                    {children}
                   </button> // в onClick(событие) передается функция handleClick без вызова (без ()), чтобы она вызывалась только при клике, а не один раз
    )
}