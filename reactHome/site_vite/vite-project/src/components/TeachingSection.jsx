import WayToTeach from '../components/WayToTeach'
import { myMotivation } from "../data"

export default function TeachingSection() {
    return (
        <section>
            <h3>Мотивация</h3>
            <ul>
                {myMotivation.map((motiv) => (<WayToTeach key={motiv.title} {...motiv} />))}
                {/* <WayToTeach title={myMotivation[0].title} description={myMotivation[0].description} />
            <WayToTeach {...myMotivation[1]} />
            <WayToTeach {...myMotivation[2]} />
            <WayToTeach {...myMotivation[3]} /> */}
            </ul>
        </section>
    )
}