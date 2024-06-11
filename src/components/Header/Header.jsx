import React , { useState, useEffect } from 'react';
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
  const {
    id,
    username,
    onClose } = useTelegram();

    const [refId, setRefId] = useState(null);

    useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const refIdParam = params.get('ref_id');
      setRefId(refIdParam);
    }, []);

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