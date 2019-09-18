import React, { useState, useEffect } from 'react';



function Home() {

  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState({
    num: 0,
    all: 20
  });

  // 相当于 componentDidMount 和 componentDidUpdate
  useEffect(() => {
    document.title = `You clicked ${count.num} times`
  },[]);

  const add = () => {
    setCount(count => ({
      ...count,
      num: count.num + 1
    }))
  }

  return (
    <div>
      <p>You clicked {count.num} times</p>
      <p>All {count.all} times</p>
      <button onClick={add}>
        Click me
      </button>
    </div>
  );
}

export default Home;
