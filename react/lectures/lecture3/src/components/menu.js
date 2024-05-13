import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Nav() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <>
                <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button>Главная</Button>
            <Button>Католог</Button>
            <Button>Контакты</Button>
        </ButtonGroup>
         <Switch {...label} defaultChecked />
    
        </>
);
}