import React from 'react';
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
  const {
    user,
    queryId,
    first_name,
    last_name,
    username,
    language_code,
    allows_write_to_pm,
    auth_date,
    hash,
    onClose } = useTelegram();

  return (
    <div className={'header'}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={'username'}>
        {[user,
          queryId,
          first_name,
          last_name,
          username,
          language_code,
          allows_write_to_pm,
          auth_date,
          hash]}
      </span>
    </div>
  );
};

export default Header;