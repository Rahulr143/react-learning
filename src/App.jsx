import { useState } from 'react';
import {CORE_CONCEPTS,EXAMPLES} from './data.js';
import CoreConcepts from './components/coreComponents.jsx'
import TapButton from './components/TapButton.jsx';

const  reactDescription = ['Fundamentals','core','Cruial']

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1))
}




function App() {
  const[selectedTopic, setSelectedTopic] = useState('components')
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
  }
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescription[genRandomInt(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core-Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) =><CoreConcepts  key={conceptItem.title} {...conceptItem} />)}
          
          </ul>
          

        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
              <TapButton onSelect={() => handleSelect('components')}>Components</TapButton>
              <TapButton onSelect={() => handleSelect('jsx')}>JSX</TapButton>
              <TapButton onSelect={() => handleSelect('props')}>Props</TapButton>
              <TapButton onSelect={() => handleSelect('state')}>State</TapButton>
          </menu>
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
