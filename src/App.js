import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: "9-12-2022"}, {weight: 176, date: "9-13-2022"}])

  return (
    <div>
      <DisplayEntries parentEntries = {entries}/>
    </div>
  );
}

export default App;
