function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6">
      <div className="max-w-md rounded-2xl bg-white/10 p-8 text-center shadow-xl backdrop-blur-md border border-white/20">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Tailwind v4 + React Sukses! 🚀
        </h1>
        <p className="text-slate-300 mb-6">
          Sekarang kamu sudah bisa membangun antarmuka web yang keren di dalam folder <span className="font-mono text-cyan-300">brandku-react</span> ini.
        </p>
        <button className="cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 font-semibold text-white shadow-lg transition-all hover:scale-105 active:scale-95">
          Mari Memulai
        </button>
      </div>
    </div>
  )
}

export default App