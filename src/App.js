import React ,{Component} from 'react';
import Options from './components/options';
import Add from './components/additeam';
import './App.css';



class App extends Component{
  

  render(){
    return(
      <div className="App">
        <Options/>
        <Add/>
      </div>
    )
  }

}

export default App;