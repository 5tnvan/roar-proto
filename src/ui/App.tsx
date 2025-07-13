import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl text-white text-center">
        <h1 className="text-4xl font-bold mb-6">🎤 Roar - Voice Transcription</h1>
        <p className="text-lg mb-8 opacity-90">Speak and watch your words appear in real-time!</p>
        
        <div className="space-y-4">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Count is {count}
          </button>
          
          <div className="mt-6 p-4 bg-white/5 rounded-lg">
            <p className="text-sm opacity-75">
              🎯 Tailwind CSS is working! This beautiful UI is powered by Tailwind classes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
