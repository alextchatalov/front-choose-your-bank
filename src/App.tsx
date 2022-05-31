import './App.css';
import {  Select } from '@mantine/core';
import { Center } from '@mantine/core';
import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Table,
  Image
} from '@mantine/core';

const elements = [
  { customerFriendlyLogoUri: 'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80', bank: 'teste', bundleName: 'C', minimum: 'Carbon', maximum: '1' },
  { customerFriendlyLogoUri: 'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80', bank: 'teste2', bundleName: 'C', minimum: 'Carbon', maximum: '1' },
  { customerFriendlyLogoUri: 'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80', bank: 'teste3', bundleName: 'C', minimum: 'Carbon', maximum: '1' },
  { customerFriendlyLogoUri: 'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80', bank: 'teste4', bundleName: 'C', minimum: 'Carbon', maximum: '1' },
  { customerFriendlyLogoUri: 'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80', bank: 'teste5', bundleName: 'C', minimum: 'Carbon', maximum: '1' },
];
function App() {

  const rows = elements.map((element) => (
    <tr key={element.bank}>
      <td>
        <div style={{ width: 100}}>
          <Image
                radius="md"
                src={element.customerFriendlyLogoUri}
                alt="Random unsplash image"
          />
        </div>
      </td>
      <td>{element.bank}</td>
      <td>{element.bundleName}</td>
      <td>{element.minimum}</td>
      <td>{element.maximum}</td>
    </tr>
  ));

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Text>Application navbar</Text>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
        </Header>
      }
    >
      <Center style={{ width: 400, height: 200 }}>
        <Select
          label="Tipo da Conta"
          placeholder="Selecione"
          data={[
            { value: 'PERSONAL', label: 'Pessoa Fisica' },
            { value: 'BUSINESS', label: 'Pessoa Juridica' },
          ]}
        />
        <Select
          label="Filtro"
          placeholder="Selecione"
          data={[
            { value: 'CONTA_DEPOSITO_A_VISTA', label: 'Conta Corrente' },
            { value: 'CONTA_POUPANCA', label: 'Conta Poupança' },
            { value: 'CONTA_PAGAMENTO_PRE_PAGA', label: 'Conta Pré Paga' },
          ]}
        />
      </Center>
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

    </AppShell>
  );
}

export default App;
