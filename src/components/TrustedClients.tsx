'use client';
export default function TrustedClients() {
  const clients = [
    { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Stripe', url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' },
    { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'OpenAI', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' }
  ];

  return (
    <div className="py-10 bg-white border-y border-indigo-50/50 relative overflow-hidden group">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <span className="text-[10px] font-black text-gray-400 align-center uppercase tracking-widest">Powering Global Innovators</span>
      </div>
      <div className="flex w-[300%] md:w-[200%] animate-scroll hover:[animation-play-state:paused]">
        {[...clients, ...clients, ...clients].map((c, i) => (
          <div key={i} className="flex-1 flex items-center justify-center px-8 md:px-16 transition-all duration-500 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 scale-90 hover:scale-105">
            <img src={c.url} alt={c.name} className="h-6 md:h-10 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
