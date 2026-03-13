import React from 'react';
import UrgencyTimer from './UrgencyTimer';

const BrandingSettings = ({ config, setConfig }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Colors */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-text-muted">Cores do Checkout</h4>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between p-4 glass-card border-border">
              <div>
                <p className="text-sm font-bold text-text-header">Cor Principal</p>
                <p className="text-xs text-text-muted">Botões e elementos de destaque</p>
              </div>
              <input 
                type="color" 
                name="primaryColor"
                value={config.primaryColor || '#238636'}
                onChange={handleChange}
                className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-none"
              />
            </div>
            <div className="flex items-center justify-between p-4 glass-card border-border">
              <div>
                <p className="text-sm font-bold text-text-header">Cor de Fundo</p>
                <p className="text-xs text-text-muted">Fundo da página de checkout</p>
              </div>
              <input 
                type="color" 
                name="backgroundColor"
                value={config.backgroundColor || '#0a0c10'}
                onChange={handleChange}
                className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-none"
              />
            </div>
          </div>
        </div>

        {/* Banners */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-text-muted">Imagens e Logos</h4>
          <div className="flex flex-col gap-4">
            <div className="p-6 glass-card border-dashed border-2 border-border flex flex-col items-center justify-center text-center gap-2 hover:border-primary/50 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-text-muted">
                <svg size={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-text-header">Logo do Produto</p>
                <p className="text-xs text-text-muted">Formatos: PNG, JPG ou SVG</p>
              </div>
            </div>
            <div className="p-6 glass-card border-dashed border-2 border-border flex flex-col items-center justify-center text-center gap-2 hover:border-primary/50 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-text-muted">
                <svg size={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-text-header">Banner Desktop</p>
                <p className="text-xs text-text-muted">Recomendado: 1920x400</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inputs for messages */}
      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-bold uppercase tracking-wider text-text-muted">Mensagens</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-text-muted uppercase">Título do Checkout</label>
            <input 
              type="text" 
              name="title"
              value={config.title || ''}
              onChange={handleChange}
              placeholder="Ex: Finalize sua inscrição"
              className="bg-bg-sidebar border border-border rounded-xl p-3 text-text-main outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-text-muted uppercase">Texto do Botão</label>
            <input 
              type="text" 
              name="buttonText"
              value={config.buttonText || ''}
              onChange={handleChange}
              placeholder="Ex: Comprar Agora"
              className="bg-bg-sidebar border border-border rounded-xl p-3 text-text-main outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
      </div>

      <UrgencyTimer config={config} setConfig={setConfig} />
    </div>
  );
};


export default BrandingSettings;
