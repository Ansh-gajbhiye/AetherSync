cat > src/App.js << 'EOL'
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io('http://localhost:5000');
    
    socketRef.current.on('chat message', (msg) => {
      setMessages(prev => [...prev, msg]);
    });
    
    return () => socketRef.current.disconnect();
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socketRef.current.emit('chat message', message);
      setMessage('');
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: '0 auto' }}>
      <h1>AetherSync Chat</h1>
      
      <div style={{ 
        height: 300, 
        overflowY: 'auto', 
        border: '1px solid #ccc', 
        padding: 10, 
        marginBottom: 10 
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ padding: '5px 0' }}>{msg}</div>
        ))}
      </div>
      
      <form onSubmit={sendMessage} style={{ display: 'flex' }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          style={{ flex: 1, padding: 8, fontSize: 16 }}
        />
        <button 
          type="submit"
          style={{ 
            padding: '8px 15px', 
            marginLeft: 10, 
            background: '#007bff', 
            color: 'white', 
            border: 'none', 
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
EOL