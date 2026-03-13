import React from 'react';

const UrgencyTimer = ({ config, setConfig }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setConfig(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  return (
    <div className="flex flex-col gap-6 p-6 glass-card border-border mt-8">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h4 className="text-sm font-bold text-text-header">Contador de Urgência</h4>
          <p className="text-xs text-text-muted">Aumente as vendas criando senso de escassez.</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            name="showTimer"
            checked={config.showTimer}
            onChange={handleChange}
            className="sr-only peer" 
          />
          <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
        </label>
      </div>

      {config.showTimer && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-text-muted uppercase">Tempo (minutos)</label>
            <input 
              type="number" 
              name="timerMinutes"
              value={config.timerMinutes || 15}
              onChange={handleChange}
              min="1"
              max="60"
              className="bg-bg-sidebar border border-border rounded-xl p-3 text-text-main outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-text-muted uppercase">Texto do Contador</label>
            <input 
              type="text" 
              name="timerText"
              value={config.timerText || 'Esta oferta expira em:'}
              onChange={handleChange}
              placeholder="Ex: Esta oferta expira em:"
              className="bg-bg-sidebar border border-border rounded-xl p-3 text-text-main outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UrgencyTimer;
