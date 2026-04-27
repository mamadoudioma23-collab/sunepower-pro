import React from 'react';

export default function Recharge() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h2 className="text-2xl font-black text-yellow-500 mb-8 uppercase">Effectuer un Dépôt</h2>
      <div className="bg-[#111] p-6 rounded-3xl border border-gray-800 mb-10 text-center">
        <p className="text-gray-400 text-sm mb-6 font-medium">Pour recharger, effectuez le transfert sur l'un de nos numéros ci-dessous :</p>
        <div className="space-y-4">
          <div className="p-4 bg-black rounded-2xl border border-gray-800 flex justify-between">
            <span className="font-bold text-orange-500 italic">ORANGE</span>
            <span className="font-mono font-bold tracking-wider">07 XX XX XX XX</span>
          </div>
          <div className="p-4 bg-black rounded-2xl border border-gray-800 flex justify-between">
            <span className="font-bold text-yellow-500 italic">MTN / WAVE</span>
            <span className="font-mono font-bold tracking-wider">05 XX XX XX XX</span>
          </div>
        </div>
      </div>
      <a href="https://wa.me/2250104852087" className="block w-full bg-green-600 text-center py-4 rounded-2xl font-black text-lg shadow-xl shadow-green-600/20">
        ENVOYER LA PREUVE (WHATSAPP)
      </a>
    </div>
  );
}
