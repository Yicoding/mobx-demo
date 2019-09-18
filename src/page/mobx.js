import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observable, action } from 'mobx';
import { inject, observer } from 'mobx-react';



class CounterModel {
  @observable
  count = 1

  @action
  increase = () => {
    this.count += 1;
  }
}

const store = new CounterModel({ count: 2 });
const Demo = observer(() => {
  const { count, increase } = store;
  return (
    <div>
      <p>countDemo: {count}</p>
      <button onClick={increase}>addDemo</button>
    </div>
  )
})

const Mobx = observer(() => {
  // const store = React.useMemo(() => new CounterModel({ count: 2 }), []);
  const { count, increase } = store;
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={increase}>add</button>
      <Demo />
    </div>
  )
})


export default Mobx;