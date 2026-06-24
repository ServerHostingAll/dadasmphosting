// Esempio di struttura Sidebar Professionale
export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-slate-900 text-white">
      <nav className="w-64 border-r border-slate-800 p-6">
        <h1 className="text-xl font-bold mb-10">DadaHosting</h1>
        <ul>
          <li className="mb-4 hover:text-indigo-400">Il Mio Server</li>
          <li className="mb-4 hover:text-indigo-400">Statistiche RAM</li>
          <li className="mb-4 hover:text-indigo-400">Impostazioni</li>
        </ul>
      </nav>
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
}