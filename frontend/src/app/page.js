export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">DadaHosting</h1>
      <p className="text-slate-400 mb-8">Il servizio hosting più veloce e semplice.</p>
      <a href="https://dash.dadasmphosting.vercel.app" className="bg-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-500">
        Vai alla Dashboard
      </a>
    </div>
  );
}