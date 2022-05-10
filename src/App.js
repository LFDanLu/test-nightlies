import logo from './logo.svg';
import './App.css';
import {Cell, Column, Row, TableBody, TableHeader, TableView} from '@react-spectrum/table';
import {Provider, defaultTheme} from '@adobe/react-spectrum'
import {useState} from "react";

const cols = [
  {
    key: "name",
    label: "Name"
  },
  {
    key: "date",
    label: "Date"
  },
  {
    key: "age",
    label: "age"
  },
  {
    key: "height",
    label: "height"
  },
  {
    key: "width",
    label: "width"
  },
  {
    key: "range",
    label: "range"
  },
  {
    key: "pitch",
    label: "pitch"
  },
  {
    key: "yaw",
    label: "yaw"
  },
  {
    key: "beep",
    label: "beep"
  },
  {
    key: "boop",
    label: "boop"
  }
];


function App() {
  const items = [
    {
      key: "a",
      name: "A",
      date: "1/1/22",
      age: 17,
      height: "4'11\"",
      width: "20 meters",
      range: "ahhrrh",
      pitch: 29,
      yaw: 49,
      beep: "ROBOT",
      boop: "ROBOTICOOOOO"
    },
    {
      key: "b",
      name: "B",
      date: "2/1/22",
      age: 27,
      height: "4'11\"",
      width: "20 meters",
      range: "ahhrrh",
      pitch: 29,
      yaw: 49,
      beep: "ROBOT",
      boop: "ROBOTICOOOOO"
    },
    {
      key: "c",
      name: "C",
      date: "2/1/22",
      age: 42,
      height: "4'11\"",
      width: "20 meters",
      range: "ahhrrh",
      pitch: 29,
      yaw: 49,
      beep: "ROBOT",
      boop: "ROBOTICOOOOO"
    },
    {
      key: "d",
      name: "D",
      date: "2/1/22",
      age: 18,
      height: "4'11\"",
      width: "20 meters",
      range: "ahhrrh",
      pitch: 29,
      yaw: 49,
      beep: "ROBOT",
      boop: "ROBOTICOOOOO"
    },
    {
      key: "e",
      name: "E",
      date: "2/1/22",
      age: 50,
      height: "4'11\"",
      width: "20 meters",
      range: "ahhrrh",
      pitch: 29,
      yaw: 49,
      beep: "ROBOT",
      boop: "ROBOTICOOOOO"
    },
    {
      key: "f",
      name: "F",
      date: "2/1/22",
      age: 30,
      height: "4'11\"",
      width: "20 meters",
      range: "ahhrrh",
      pitch: 29,
      yaw: 49,
      beep: "ROBOT",
      boop: "ROBOTICOOOOO"
    },
    {
      key: "g",
      name: "G",
      date: "2/1/22",
      age: 90,
      height: "4'11\"",
      width: "20 meters",
      range: "ahhrrh",
      pitch: 29,
      yaw: 49,
      beep: "ROBOT",
      boop: "ROBOTICOOOOO"
    },
    {
      key: "h",
      name: "H",
      date: "2/1/22",
      age: 10,
      height: "4'11\"",
      width: "20 meters",
      range: "ahhrrh",
      pitch: 29,
      yaw: 49,
      beep: "ROBOT",
      boop: "ROBOTICOOOOO"
    },
    {
      key: "i",
      name: "I",
      date: "2/1/22",
      age: 24,
      height: "4'11\"",
      width: "20 meters",
      range: "ahhrrh",
      pitch: 29,
      yaw: 49,
      beep: "ROBOT",
      boop: "ROBOTICOOOOO"
    },
    {
      key: "j",
      name: "J",
      date: "2/1/22",
      age: 27,
      height: "4'11\"",
      width: "20 meters",
      range: "ahhrrh",
      pitch: 29,
      yaw: 49,
      beep: "ROBOT",
      boop: "ROBOTICOOOOO"
    },
    {
      key: "k",
      name: "K",
      date: "2/1/22",
      age: 18,
      height: "4'11\"",
      width: "20 meters",
      range: "ahhrrh",
      pitch: 29,
      yaw: 49,
      beep: "ROBOT",
      boop: "ROBOTICOOOOO"
    }
  ];

  const [sd, setSd] = useState({
    column: "date",
    direction: "ascending"
  });

  const [sortedItems, setSortedItems] = useState(items);

  const onSortChange = (newSort) => {
    let newSortedItems = [...sortedItems];
    newSortedItems.sort((a, b) => a[newSort.column] - b[newSort.column]);
    newSort.direction === "descending" && newSortedItems.reverse(); //reverse list if descending
    setSortedItems(newSortedItems);
    setSd(newSort);
  };

  return (
    <div className="App">
      <Provider theme={defaultTheme}>
        <TableView sortDescriptor={sd} onSortChange={onSortChange}>
          <TableHeader columns={cols}>
            {(column) => (
              <Column allowsSorting allowsResizing key={column.key}>
                <div>{column.label}</div>
              </Column>
            )}
          </TableHeader>
          <TableBody items={sortedItems}>
            {(item) => (
              <Row>
                {(column) => {
                  return <Cell>{item[column]}</Cell>;
                }}
              </Row>
            )}
          </TableBody>
        </TableView>
      </Provider>
    </div>
  );
}

export default App;
