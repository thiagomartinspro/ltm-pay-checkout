import React, { useState } from 'react';
import { CreditCard, ShieldCheck, Key, ExternalLink, Save } from 'lucide-react';

const GatewayCard = ({ name, description, icon: Icon, active, onToggle, config, onConfigChange }) => (
  <div className={`glass-card p-6 flex flex-col gap-6 transition-all border-2 ${active ? 'border-primary' : 'border-border'}`}>
    <div className="flex justify-between items-start">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${active ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-white/5 border-border text-text-muted'}`}>
          <Icon size={24} />
        </div>
        <div>
          <h4 className="font-bold text-text-header">{name}</h4>
          <p className="text-xs text-text-muted">{description}</p>
        </div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          checked={active}
          onChange={onToggle}
          className="sr-only peer" 
        />
        <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
    </div>

    {active && (
      <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-300 py-4 border-t border-border">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Public Key</label>
          <div className="relative">
            <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
            <input 
              type="text"
              placeholder="APP_USR-..."
              value={config.publicKey || ''}
              onChange={(e) => onConfigChange('publicKey', e.target.value)}
              className="w-full bg-bg-sidebar border border-border rounded-xl p-3 pl-10 text-sm text-text-main outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Access Token</label>
          <div className="relative">
            <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
            <input 
              type="password"
              placeholder="TEST-..."
              value={config.accessToken || ''}
              onChange={(e) => onConfigChange('accessToken', e.target.value)}
              className="w-full bg-bg-sidebar border border-border rounded-xl p-3 pl-10 text-sm text-text-main outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
        <a href="#" className="text-[10px] text-primary hover:underline flex items-center gap-1 font-bold mt-1">
          Onde encontro minhas chaves?
          <ExternalLink size={10} />
        </a>
      </div>
    )}
  </div>
);

const Integrations = () => {
  const [mercadoPago, setMercadoPago] = useState({ active: true, publicKey: '', accessToken: '' });
  const [pagarme, setPagarme] = useState({ active: false, publicKey: '', accessToken: '' });

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-text-header font-outfit">Integrações de Pagamento</h2>
          <p className="text-text-muted text-sm">Conecte seus gateways para começar a vender.</p>
        </div>
        <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
          <Save size={20} />
          Salvar Configurações
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GatewayCard 
          name="Mercado Pago"
          description="Receba via PIX, Cartão e Boleto."
          icon={CreditCard}
          active={mercadoPago.active}
          onToggle={() => setMercadoPago(prev => ({ ...prev, active: !prev.active }))}
          config={mercadoPago}
          onConfigChange={(key, val) => setMercadoPago(prev => ({ ...prev, [key]: val }))}
        />
        <GatewayCard 
          name="Pagar.me"
          description="A solução ideal para grandes volumes."
          icon={CreditCard}
          active={pagarme.active}
          onToggle={() => setPagarme(prev => ({ ...prev, active: !prev.active }))}
          config={pagarme}
          onConfigChange={(key, val) => setPagarme(prev => ({ ...prev, [key]: val }))}
        />
      </div>

      <div className="glass-card p-6 bg-primary/5 border-primary/20">
        <div className="flex items-center gap-3 text-primary mb-2">
          <ShieldCheck size={20} />
          <h4 className="font-bold">Ambiente de Testes (Sandbox)</h4>
        </div>
        <p className="text-sm text-text-muted">
          Recomendamos utilizar suas chaves de teste para realizar compras simuladas antes de entrar em produção.
        </p>
      </div>
    </div>
  );
};

export default Integrations;
