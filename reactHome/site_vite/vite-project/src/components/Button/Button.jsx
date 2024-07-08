import classes from "./Button.module.css" // .module - зарезервированое значение для локализации стилей, добавляется объект classes - такое название принято, но может быть любое

// export default function Button({text}) { // передача через props
//     return <button className="button">{text}</button>
// }

export default function Button({ children, buttonClick, isActive }) { // с помощью дабавления парамера buttonClick можно передавать функции при воздействие на кнопку в App

// let buttonClasses =  'button'
// if (isActive) buttonClasses += ' active'

    return (<button className={isActive ? `${classes.button} ${classes.active}` : classes.button} // или  className={buttonClasses}
                   onClick={buttonClick} 
                //    onDoubleClick={() => console.log('double')} // еще один синтаксис
                   >
                    {children}
                   </button> // в onClick(событие) передается функция handleClick без вызова (без ()), чтобы она вызывалась только при клике, а не один раз
    )
}