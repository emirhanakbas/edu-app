import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🎓 Edu App</h1>
        <p>
          Modern eğitim uygulaması - React + TypeScript + Node.js ile geliştirildi
        </p>
        <div className="tech-stack">
          <h2>Teknoloji Yığını</h2>
          <ul>
            <li>⚛️ React 18 - Modern UI bileşenleri</li>
            <li>📘 TypeScript - Tip güvenli geliştirme</li>
            <li>🚀 Vite - Hızlı build tool</li>
            <li>🟢 Node.js - Backend runtime</li>
            <li>🌐 Express.js - Web framework</li>
          </ul>
        </div>
        <div className="getting-started">
          <h2>Başlangıç</h2>
          <p>Bu eğitim uygulaması modern web teknolojileri ile geliştirilmiştir.</p>
          <p>Geliştirme için: <code>npm run dev</code></p>
        </div>
      </header>
    </div>
  )
}

export default App