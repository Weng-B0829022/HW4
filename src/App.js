import MultiButton from'./cgu_multiButton.js'
import HelloCGU from './cgu_hello.js'
import BasicTextFields from './input.js'
import ContainedButtons from './Button.js'

function App(){
  return (<div className = "App">
  <center><div>{ HelloCGU()}</div></center>
  <center><div>{ BasicTextFields()}</div></center>
  <div>{ContainedButtons()}</div>
  </div>  

  );
}
export default App;
//<div>{ MultiButton(10) }</div>