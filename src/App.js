import logo from './logo.svg';
import './App.css';
import {Cell, Column, Row, TableBody, TableHeader, TableView} from '@react-spectrum/table';
import {Provider} from '@react-spectrum/provider'
import {theme} from '@react-spectrum/theme-default';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Provider theme={theme}>
        <TableView aria-label="TableView with resizable columns" width={800} height={200}>
          <TableHeader>
            <Column allowsResizing defaultWidth={200} minWidth={175} maxWidth={300}>File Name</Column>
            <Column allowsResizing defaultWidth="1fr" minWidth={175} maxWidth={500}>Size</Column>
            <Column allowsResizing defaultWidth={200} minWidth={175} maxWidth={300}>Type</Column>
          </TableHeader>
          <TableBody>
            <Row>
              <Cell>2018 Proposal</Cell>
              <Cell>PDF</Cell>
              <Cell>214 KB</Cell>
            </Row>
            <Row>
              <Cell>Budget</Cell>
              <Cell>XLS</Cell>
              <Cell>120 KB</Cell>
            </Row>
          </TableBody>
        </TableView>
      </Provider>
    </div>
  );
}

export default App;
