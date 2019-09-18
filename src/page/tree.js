import React from 'react';
import { types } from 'mobx-state-tree';
import { observer } from 'mobx-react';

const CountModel = types.model('CountModel', {
  count: types.number
}).actions(self => ({
  increase() {
    self.count += 1;
  }
}));

const store = CountModel.create({count: 0});
const DemoTree = observer(() => {
  const { count, increase } = store;
  return (
    <div>
      <p>DemoTree: {count}</p>
      <button onClick={increase}>addDemo</button>
    </div>
  )
})


const Tree = observer(() => {
  // const store = React.useMemo(()=> CountModel.create({count: 0}), []);
  const { count, increase } = store;
  return (
    <div>
      <p>countTree: {count}</p>
      <button onClick={increase}>addtres</button>
      <DemoTree />
    </div>
  )
})

export default Tree;