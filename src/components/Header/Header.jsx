import React from 'react';
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
  const {
    id,
    user,
    queryId,
    first_name,
    last_name,
    username,
    language_code,
    allows_write_to_pm,
    photo_url,
    auth_date,
    is_bot,
    hash,
    onClose } = useTelegram();

  return (
    <div className={'header'}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={'username'}>
        {['id=', id,
          ' queryId=',queryId,
          ' first_name=',first_name,
          ' last_name=',last_name,
          ' username=',username,
          ' language_code=',language_code,
          ' allows_write_to_pm=',allows_write_to_pm,
          ' photo_url=',photo_url,
          ' auth_date=',auth_date,
          ' is_bot=',is_bot,
          ' hash=',hash]}
      </span>
    </div>
  );
};

export default Header;