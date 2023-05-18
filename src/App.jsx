import './App.css'
import { Provider } from 'react-redux';
// import store from './store/store';
import Comp1 from './toolkit/comp1';
import store from './toolkit/store';
// import Comp1 from './component/comp1';
function App() {
  return (
      <Provider store={store}>
          {/* <Comp1/> */}
          <Comp1/>
      </Provider>
  )
}

export default App
