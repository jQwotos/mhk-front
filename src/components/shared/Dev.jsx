import React, {
  // useState,
  // useContext,
  // useEffect
} from 'react';
import Container from './Container';
import Button from '../ui-elements/Button';
import { useHttpClient } from '../../hooks/http-hook';

const Dev = ({ lobby }) => {

  const { sendRequest } = useHttpClient('Dev');
  const getDataHandler = async event => {
    event.preventDefault();
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/admin/data`
      );
      console.log(responseData);
    } catch (err) { console.log(`GetDataHandler Error: ${err}`); };
  };

  return (
    <Container className="dev">
      <div>
        <Button onClick={getDataHandler}>
          SERVER
        </Button>
        <Button onClick={() => console.log(lobby)}>
          CLIENT
        </Button>
      </div>
    </Container>
  );
};

export default Dev;
