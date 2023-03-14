
import './App.css';
import Card from './components/Card';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Card 
      nombre="Adrian" 
      cargo="Modelo"
      comment="Modelo para multiples marcas de ropa, perfumes, etc."
      imagen="adrian"
      />

      <Card 
      nombre="Marinette" 
      cargo="Diseñadora de modas"
      comment="Diseñadora para la marca de Gabriel Agreste, reconocida por sus exoticos diseños."
      imagen="marinette"
      />

<Card 
      nombre="Luka" 
      cargo="Guitarrista"
      comment="Uno de los mejores guitarristas de Paris, recomendado por famosos y por su padre, rey de la musica Jagged Stone"
      imagen="luka"
      />
    
    <Products
    titulo="Order Summary"
    texto="You can now listen to millions of songs, audiobooks, and podcasts on any 
    device anywhere you like!"
    imagen="illustration-hero"
    imagen2="icon-music"
    plan="Annual Plan"
    valor="$59.99/year"
    cambio="Change"
    boton="Proceed to Payment"
    boton2="Cancel Order"

    />

    
    </div>
       
      
     

    
  );
}

export default App;
