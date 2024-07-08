import React from "react"

// export default function IntroSection() {
//     return (
//         <section>
//             <h1 className="centered">Result Universaty</h1>
//             <h3 className="centered" style={{color: '#667'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, laudantium. Facere eaque asperiores, blanditiis id nostrum impedit sapiente nam necessitatibus sunt esse nihil reprehenderit odit cum fuga enim ullam! Cupiditate!</h3>
//         </section>
//     )
// }

export default function IntroSection() {
    return React.createElement(
        'section', 
        null, 
        [React.createElement('h1', { className: 'centered', key: 1}, 'Result Universaty'),
            React.createElement('h3', { className: 'centered', key: 2, style: { color: '#667' }}, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, laudantium. Facere eaque asperiores, blanditiis id nostrum impedit sapiente nam necessitatibus sunt esse nihil reprehenderit odit cum fuga enim ullam! Cupiditate!'),
    ])
}