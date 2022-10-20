import './App.css';
import Card from './app/components/pokemon/Card';
import Header from './app/components/pokemon/Header';
import SideHeader from './app/components/pokemon/SideHeader';

function App() {
  return (
    <div className="App d-flex">
      <SideHeader />
      <div className='d-flex flex-column'>
        <Header />
        <Card imgUrl="	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png" title='Pokemon' btnOne='Fire' btnTwo='Smoke' />
      </div>
    </div>
  );
}

export default App;
