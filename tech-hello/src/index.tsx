import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  title: string;
  color: string;
}

function App(props: AppProps) { // 인자로 전달될 때 props라는 객체로 전달
  return (
    <h1>{ props.title }</h1>
  )
}

ReactDOM.render( // 최상위에서 한 번만 호출함(단일 트리 형태의 virtual DOM)
  <React.StrictMode>
    <App title="Tech Hello?" color="red" />
  </React.StrictMode>,
  document.getElementById('root') // 상위의 컴포넌트를 어디에 가져다 붙일 건지
);