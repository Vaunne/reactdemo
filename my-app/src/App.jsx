import { useState } from 'react';
import './App.css';
import PollOption from './PollOption';

function App() {
  const [petes, setPetes] = useState([
    {option: 'Dog', count:0}, 
    {option: 'Cat', count:0},
    {option: 'Rabbit', count: 0},
  ]);

  const Vote = (index) =>{
    const updatedPetes = [...petes];
    updatedPetes[index].count += 1;
    setPetes(updatedPetes);
  }

  const Leader = () =>{
    return petes.reduce((leader,option) => 
      option.count > Leader.count ? option :leader
  );
};

  return (
      <div className="App">
        <div>
          {petes.map((pets, index) => (
            <PollOption 
            key={index}
            label={pets.option}
            count={pets.count}
            onVote={() => Vote(index)}
            />
          ))}
        </div>
      </div>
  );  
}

export default App;