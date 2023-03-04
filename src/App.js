import { MathJaxContext } from 'better-react-mathjax';
import ComingSoon from './components/ComingSoon.js';
import Header from './components/Header/Header.js';
// import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <MathJaxContext>
    <div >
      <Header/>
      <Main/>
      <ComingSoon/>
    </div>
    </MathJaxContext>
  );
}

export default App;
