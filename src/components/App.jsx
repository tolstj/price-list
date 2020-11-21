import React from 'react';
import Row from './Row';
import css from '../app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          name: '',
          count: 0,
          price: 0,
        },
      ],
    };
  }

  updateValue(id, valueType, value) {
    if (valueType !== 'name' && isNaN(value)) return;
    this.setState(state => ({
      items: state.items.map(item => item.id === id ? {...item, [valueType]: value} : item),
    }));
  }

  addRow() {
    this.setState(state => ({
      items: [...state.items, {
        id: state.items.length,
        name: '',
        count: 0,
        price: 0,
      }],
    }));
  }

  deleteRow() {
    this.setState(state => ({
      items: state.items.slice(0, -1),
    }));
  }

  render() {
    return (
      <>
        <table>
          <thead>
          <tr>
            <th>Название</th>
            <th>Количество</th>
            <th>Цена</th>
            <th>Стоимость</th>
          </tr>
          </thead>
          <tbody>
          {this.state.items.map(item =>
            <Row
              key={item.id}
              id={item.id}
              name={item.name}
              count={item.count}
              price={item.price}
              updateValue={this.updateValue.bind(this)}
            />
          )}
          <tr style={{fontWeight: 600}}>
            <td colSpan="3" style={{paddingTop: '2%', textAlign: 'right'}}>Итого:</td>
            <td style={{
              paddingTop: '2%',
              textAlign: 'center'
            }}>{this.state.items.reduce((totalPrice, item) => totalPrice + item.count * item.price, 0)}</td>
          </tr>
          </tbody>
        </table>
        <div className="buttons">
          <button onClick={this.addRow.bind(this)} style={{background: '#51B12D'}}>
            +
          </button>
          <button onClick={this.deleteRow.bind(this)} style={{background: '#D43F3F'}}>
            -
          </button>
        </div>
      </>
    );
  }
}

export default App;
