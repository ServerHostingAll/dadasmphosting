"use client";
import { useState } from 'react';
import { Power, Cpu, HardDrive } from 'lucide-react';

export default function Dashboard() {
  const [status, setStatus] = useState("Online");

  return (
    <div className="p-8 bg-slate-950 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Dashboard DadaHosting</h1>
      <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Server SMP #1</h2>
        <div className="flex gap-4 mb-4 text-sm text-slate-400">
          <span><Cpu className="inline w-4 h-4"/> 4 Cores</span>
          <span><HardDrive className="inline w-4 h-4"/> 8GB RAM</span>
        </div>
        <button 
          onClick={() => setStatus(status === "Online" ? "Offline" : "Online")}
          className={`w-full py-2 rounded-lg ${status === "Online" ? "bg-red-600" : "bg-green-600"}`}
        >
          <Power className="inline mr-2 w-4 h-4"/> {status === "Online" ? "Stop Server" : "Start Server"}
        </button>
      </div>
    </div>
  );
}