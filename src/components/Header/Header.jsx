import React from 'react';
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import './Header.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Header = () => {
  const {
    id,
    username,
    onClose } = useTelegram();

  let query = useQuery();
  let refId = query.get('ref_id');

  return (
    <div className={'header'}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={'username'}>
        {['id=', id,
          ' username=', username,
          ' ref_id=', refId]}
      </span>
    </div>
  );
};

export default Header;