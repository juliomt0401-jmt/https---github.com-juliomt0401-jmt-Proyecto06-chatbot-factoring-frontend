import { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'

function ChatPanel({ onEtapaChange }) {
  const [message, setMessage] = useState('')

  const [sessionId] = useState(() => {
    let id = sessionStorage.getItem('factoring_session_id')

    if (!id) {
      id = crypto.randomUUID()
      sessionStorage.setItem('factoring_session_id', id)
    }

    return id
  })

  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hola, soy tu asistente virtual de IA especializado en el producto factoring.',
    },
    {
      type: 'bot',
      text: '¿Quieres conocer sobre el factoring? ¿Informarte de nuestro producto de factoring? ¿o deseas recibir una cotización?',
    },
  ])

  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [messages])


  async function handleSend() {
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

    try {
      const response = await fetch(
        'http://127.0.0.1:8000/chat',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            session_id: sessionId,
            message: userMessage.text,
          }),
        }
      )

      const data = await response.json()
      if (data.etapa) {
        onEtapaChange(data.etapa)
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        {type: 'bot', text: data.response, archivo: data.archivo,},
      ])

    } catch (error) {
      setMessages((currentMessages) => [
        ...currentMessages,
        {type: 'bot', text: 'No pude conectarme con el Backend.',},
      ])
    }
  }


  return (
    <main className="chat-panel">

      <header className="chat-header">
        <h1>Cotizador de Factoring</h1>
        <p>Conversa conmigo sobre el factoring y cotiza tus facturas.</p>
      </header>

      <section className="chat-messages">

        {messages.map((item, index) => (
          <div
            key={index}
            className={`message ${item.type}`}
          >
            <ReactMarkdown>{item.text?.replace(/\\n/g, '\n')}</ReactMarkdown>
            {item.archivo && (
              <a href={`http://127.0.0.1:8000${item.archivo.url}`}>Descargar cotización PDF</a>
            )}
          </div>
        ))}

        <div ref={messagesEndRef} />

      </section>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          value={message}
          onChange={(event) =>
            setMessage(event.target.value)
          }
          onKeyDown={(event) => {
            if (event.key === 'Enter') {handleSend()}
          }}
        />
        <button type="button" onClick={handleSend}>Enviar</button>
      </div>

    </main>
  )
}

export default ChatPanel