'use client';

import { useChat } from 'ai/react';
import Markdown from 'react-markdown';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className='flex flex-col w-full max-w-lg py-24 mx-auto stretch'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>TTN Chatbot</h1>
        <p>Using Model - Gemini 1.5</p>
        <p className='text-gray-500'>
          Author : <a href='https://github.com/rishabhgusain'>Rishabh Gusain</a>
        </p>
      </div>
      {messages.map((m) => (
        <div key={m.id} className='whitespace-pre-wrap'>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          <Markdown>{m.content}</Markdown>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className='fixed bottom-0 w-full max-w-lg p-2 mb-8 border border-gray-300 rounded shadow-xl text-black'
          value={input}
          placeholder='Say something...'
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
