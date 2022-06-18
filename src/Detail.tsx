import './App.css';
import React, { useState, useEffect } from 'react';
import {
  Container,
  Table
} from '@mantine/core';
import { createStyles } from '@mantine/core';
import { getDetailBundle } from './api/GetBestAccountsService';
import { useParams } from 'react-router-dom';

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    // subscribe to color scheme changes right in your styles
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: theme.radius.sm,

    // Dynamic media queries, define breakpoints in theme, use anywhere
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      // Type safe child reference in nested selectors via ref
      [`& .${getRef('child')}`]: {
        fontSize: theme.fontSizes.xs,
      },
    },
  },

  child: {
    // assign ref to element
    ref: getRef('child'),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

function Detail() {

  const { id, bundleName } = useParams();
  
  const { classes } = useStyles();

  const [details, setDetails] = useState([])

  const rows = details.map(( { bundle, code, info, eventLimit, freeLimit, minimum, maximum }) => (
    <tr key={code}>
      <td>
          {bundle}
      </td>
      <td>{code}</td>
      <td>{info}</td>
      <td>{eventLimit}</td>
      <td>{freeLimit}</td>
      <td>{minimum}</td>
      <td>{maximum}</td>
    </tr>
  ));

  useEffect(() => {
    getDetailBundle(`${id}`).then(details => {
      setDetails(details);
    })
  }, [])

  return (
    <>
    
    <div className={classes.wrapper}>
      <Container className={classes.child}>
        Detalhes - { bundleName }
      </Container>
    </div>

    <div className={classes.wrapper}>
      <Container className={classes.child}>
        
      <Table striped>
          <thead>
            <tr>
              <th>Pacote</th>
              <th>Serviço</th>
              <th>Informaçoes Adicionais</th>
              <th>Quantidade Maxima do Serviço</th>
              <th>Quantidade Maxima Gratuita</th>
              <th>Valor Minimo</th>
              <th>Valor Maximo</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Container>
   </div>
  <div className='light x1'></div>
  <div className='light x2'></div>
  <div className='light x3'></div>
  <div className='light x4'></div>
  <div className='light x5'></div>
  <div className='light x6'></div>
  <div className='light x7'></div>
  <div className='light x8'></div>
  <div className='light x9'></div>
   </>
  );


}

export default Detail;
