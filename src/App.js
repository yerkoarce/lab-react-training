import IdCard from './components/IdCard'
import './App.css';
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating';

function App() {
  return (
    <>
      <IdCard 
        lastName='Arce' 
        firstName='Yerko'
        gender='Male'
        height={185}
        birth={new Date('2000-01-01')}
        picture='unaImagen'
      />
      <Greetings lang='en'>Yerko</Greetings>
      <Random
        min={1}
        max={10}
      />
      <BoxColor
        r={255}
        g={123}
        b={255}
      />
      <CreditCard
        type="Master card"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <Rating>4.4</Rating>
      
    </>
  );
}

export default App;
