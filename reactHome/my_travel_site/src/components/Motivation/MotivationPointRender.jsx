export default function MotivationPointRender({ title, description, id }) {

    const thisIs = 'Это';

    return (
        <li className={`${id}__point`}>
            {thisIs} <strong className={`${id}__point_bold`}>{title}</strong> {description}
        </li>
    )
}