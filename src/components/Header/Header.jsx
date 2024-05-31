import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const tg = window.Telegram.WebApp;
const onClose = () => {
  tg.close()
}

const Header = () => {

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {tg.initDataUnsafe}
            </span>
            <span className={'username'}>
                {tg.initData}
            </span>
        </div>
    );
};

export default Header;