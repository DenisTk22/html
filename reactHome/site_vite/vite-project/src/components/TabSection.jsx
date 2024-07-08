import Button from './Button/Button'

export default function TabSection({ active, onChange }) {
    return (
        <section>
            <Button 
                isActive={active === 'main'} 
                buttonClick={() => onChange('main')}
            >
                Main
            </Button>
            <Button 
                isActive={active === 'feedback'} 
                buttonClick={() => onChange('feedback')}
            >
                Feedback
            </Button>
        </section>
    )
}