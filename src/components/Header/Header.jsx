import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {data, dataUnsafe, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {data}
            </span>
            <span className={'username'}>
                {dataUnsafe}
            </span>
        </div>
    );
};

export default Header;