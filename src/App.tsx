import './App.css';
import {  Select } from '@mantine/core';
import React, { useState } from 'react';
import {
  Container,
  Table,
  Image,
  Button, 
  Box,
  Grid,
  Center
} from '@mantine/core';
import { createStyles } from '@mantine/core';
import { getAccounts } from './api/GetBestAccountsService';

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

function App() {  
  
  const { classes } = useStyles();
  const [accounts, setAccounts] = useState([])
  const [typeAccount, setTypeAccount] = useState([])
  const [accountFilter, setAccountFilter] = useState([])


  const rows = accounts.map(( { bank, bundleName, customerFriendlyLogoUri, minimum, maximum }) => (
    <tr>
      <td>
          <Image
                radius="md"
                width={70}
                height={50}
                fit="contain"
                src={customerFriendlyLogoUri}
                alt="Random unsplash image"
          />
      </td>
      <td>{bank}</td>
      <td>{bundleName}</td>
      <td>{minimum}</td>
      <td>{maximum}</td>
    </tr>
  ));

  const searchBestAccounts = async () => {
    setAccounts(await getAccounts(`${typeAccount}` === 'PERSONAL', `${accountFilter}`))
   }

  return (
    <>

    <div className={classes.wrapper}>
      <Container className={classes.child}>
        text
      </Container>
    </div>

    <div className={classes.wrapper}>
      <Container className={classes.child}>
        <Grid>
          <Grid.Col span={12}>
              <Select
                label="Tipo da Conta"
                placeholder="Selecione"
                value={typeAccount} 
                onChange={setTypeAccount}
                data={[
                  { value: 'PERSONAL', label: 'Pessoa Fisica' },
                  { value: 'BUSINESS', label: 'Pessoa Juridica' },
                ]}
              />
              <Select
                label="Filtro"
                placeholder="Selecione"
                value={accountFilter} 
                onChange={setAccountFilter}
                data={[
                  { value: 'CONTA_DEPOSITO_A_VISTA', label: 'Conta Corrente' },
                  { value: 'CONTA_POUPANCA', label: 'Conta Poupança' },
                  { value: 'CONTA_PAGAMENTO_PRE_PAGA', label: 'Conta Pré Paga' },
                ]}
              />
          </Grid.Col>
          <Grid.Col span={12}>
            <Center>
              <Button onClick={searchBestAccounts}>
                  Search
              </Button>
            </Center>
          </Grid.Col>

        </Grid>
        <Table striped>
          <thead>
            <tr>
              <th>Logo</th>
              <th>Banco</th>
              <th>Pacote</th>
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

export default App;
