import { useEffect, useRef, useState } from 'react'

function ChatPanel() {
  const [message, setMessage] = useState('')

  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hola, soy tu asistente de factoring.',
    },
    {
      type: 'bot',
      text: '¿Con qué adquirente tienes facturas por cobrar?',
    },
    {
      type: 'user',
      text: 'Tengo facturas de Backus.',
    },
    {
      type: 'bot',
      text: 'Perfecto, Backus ya es cliente nuestro. ¿Puedes darme tu RUC para identificarte?',
    },
  ])

  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function handleSend() {
    if (message.trim() === '') {
      return
    }

    const userMessage = {
      type: 'user',
      text: message,
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
    ])

    setMessage('')

    setTimeout(() => {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          type: 'bot',
          text: 'Mensaje recibido. Más adelante esta respuesta vendrá del Backend y del LLM.',
        },
      ])
    }, 800)
  }

  return (
    <main className="chat-panel">
      <header className="chat-header">
        <h1>Cotizador de Factoring</h1>
        <p>Conversa conmigo para cotizar tus facturas.</p>
      </header>

      <section className="chat-messages">
        {messages.map((item, index) => (
          <div
            key={index}
            className={`message ${item.type}`}
          >
            {item.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </section>

      <div className="chat-input">

        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSend()
            }
          }}
        />

        <button
          type="button"
          onClick={handleSend}
        >
          Enviar
        </button>
      </div>
    </main>
  )
}

export default ChatPanel