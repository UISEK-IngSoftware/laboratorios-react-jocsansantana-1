import Header from './components/Header';
import { Container } from '@mui/material';
import PokemonList from './pages/PokemonList';
import './App.css';

function App() {

  return (
    <>
      <Header/>
        <PokemonList/>
      <Container></Container>
    </>
  );
}

export default App;
