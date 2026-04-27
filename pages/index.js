import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Dashboard() {
  const [balance, setBalance] = useState(130000);
  const [gainPerSec] = useState(5500 / 86400);

  useEffect(() => {
    const timer = setInterval(() => {
      setBalance((prev) => prev + gainPerSec);
    }, 1000);
    return () => clearInterval(timer);
  }, [gainPerSec]);

  return (
    <div className="min-h-screen bg-black text-white font-sans p-6 selection:bg-yellow-500">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-black text-yellow-500 italic">SUNEPOWER</h1>
        <span className="bg-green-500/20 text-green-500 text-[10px] font-bold px-3 py-1 rounded-full animate-pulse">● MINAGE ACTIF</span>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-[2.5rem] border border-gray-800 shadow-2xl mb-8 text-center">
        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">Solde de Minage Total</p>
        <h2 className="text-5xl font-mono font-black tabular-nums">
          {balance.toLocaleString('fr-FR', { minimumFractionDigits: 3 })}
        </h2>
        <p className="text-yellow-500 font-bold mt-2">FCFA</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => window.location.href='/recharge'} className="bg-yellow-500 text-black h-16 rounded-2xl font-black shadow-lg shadow-yellow-500/20">DÉPÔT</button>
        <button onClick={() => window.location.href='/retrait'} className="bg-gray-900 h-16 rounded-2xl font-black border border-gray-800">RETRAIT</button>
      </div>

      <div className="mt-12 bg-[#111] p-6 rounded-3xl border border-gray-800">
        <h3 className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-widest">Générateur Actif</h3>
        <div className="flex justify-between items-center">
          <span className="font-bold">Station Solaire VIP-1</span>
          <span className="text-green-500 font-bold text-sm">+5,500 F/j</span>
        </div>
      </div>
    </div>
  );
}
