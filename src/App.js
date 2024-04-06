import './App.css';

import {useState} from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  const handleKeyDown = event => {
    console.log('User pressed: ', event.key);

    // console.log(message);

    if (event.key === 'Backspace') {
      // 👇️ your logic here
      console.log('Backspace key pressed ✅');
    }
  };

  return (
    <div>
      <input
        value={message}
        onChange={event => setMessage(event.target.value)}
        onKeyDown={handleKeyDown}
        id="message"
        name="message"
        autoComplete="off"
      />
    </div>
  );
};

export default App;
