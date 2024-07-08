export default function MotivationPointRender({ title, description, id }) {
    return (
        <li className={`${id}__point`}>
            Это <strong className={`${id}__point_bold`}>{title}</strong> {description}
        </li>
    )
}