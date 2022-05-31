import './App.css';
import {  Select } from '@mantine/core';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Container,
  useMantineTheme,
  Table,
  Image,
  Button
} from '@mantine/core';
import { createStyles } from '@mantine/core';
import { getAccounts } from './api/GetBestAccountsService';

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    // subscribe to color scheme changes right in your styles
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
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

const elements = [
  { customerFriendlyLogoUri: 'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80', bank: 'teste', bundleName: 'C', minimum: 'Carbon', maximum: '1' },
  { customerFriendlyLogoUri: 'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80', bank: 'teste2', bundleName: 'C', minimum: 'Carbon', maximum: '1' },
  { customerFriendlyLogoUri: 'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80', bank: 'teste3', bundleName: 'C', minimum: 'Carbon', maximum: '1' },
  { customerFriendlyLogoUri: 'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80', bank: 'teste4', bundleName: 'C', minimum: 'Carbon', maximum: '1' },
  { customerFriendlyLogoUri: 'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80', bank: 'teste5', bundleName: 'C', minimum: 'Carbon', maximum: '1' },
];

var accountsData: any[] = []

function App() {  
  
  const { classes } = useStyles();
  const [accounts, setAccounts] = useState([])
  const [typeAccount, setTypeAccount] = useState([])
  const [accountFilter, setAccountFilter] = useState([])

  const rows = accountsData.map((element) => (
    <tr key={element[1]}>
      <td>
        <div style={{ width: 100}}>
          <Image
                radius="md"
                src={element[0]}
                alt="Random unsplash image"
          />
        </div>
      </td>
      <td>{element[1]}</td>
      <td>{element[2]}</td>
      <td>{element[3]}</td>
      <td>{element[4]}</td>
    </tr>
  ));

  return (
    <>

    <div className={classes.wrapper}>
      <Container className={classes.child}>
        text
      </Container>
    </div>

    <div className={classes.wrapper}>
      
      
      <Container className={classes.child}>
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
        <Button onClick={searchBestAccounts()}>
            Search
        </Button>
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
   </>
  );


}

async function searchBestAccounts() {
  accountsData = await getAccounts(true, 'CONTA_DEPOSITO_A_VISTA')
 }



export default App;
