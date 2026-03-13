import React from 'react';

const PreviewFrame = ({ config }) => {
  return (
    <div className="flex flex-col gap-4 h-full sticky top-8">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold uppercase tracking-wider text-text-muted">Live Preview</h4>
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded bg-border flex items-center justify-center text-[10px] text-text-muted cursor-pointer hover:bg-white/10 transition-colors">D</div>
          <div className="w-6 h-6 rounded bg-border flex items-center justify-center text-[10px] text-text-muted cursor-pointer hover:bg-white/10 transition-colors">T</div>
          <div className="w-6 h-6 rounded bg-border flex items-center justify-center text-[10px] text-text-muted cursor-pointer hover:bg-white/10 transition-colors">M</div>
        </div>
      </div>
      
      <div 
        className="flex-1 rounded-2xl border border-border overflow-hidden shadow-2xl flex flex-col items-center justify-center min-h-[400px] transition-all duration-500"
        style={{ backgroundColor: config.backgroundColor || '#0a0c10' }}
      >
        {/* Mock Checkout Content */}
        <div className="w-full max-w-[280px] flex flex-col gap-6 animate-in zoom-in-95 duration-500 p-8 bg-bg-card/50 rounded-2xl border border-white/5 backdrop-blur-xl">
          {config.showTimer && (
            <div className="flex flex-col items-center gap-1 py-3 px-4 rounded-xl bg-primary/10 border border-primary/20 text-primary">
              <span className="text-[10px] font-bold uppercase tracking-widest">{config.timerText || 'Esta oferta expira em:'}</span>
              <span className="text-lg font-black font-outfit tabular-nums">{config.timerMinutes || 15}:00</span>
            </div>
          )}
          
          <div className="w-full flex flex-col gap-2">
            <h5 className="text-sm font-bold text-text-header text-center" style={{ color: config.primaryColor }}>
              {config.title || 'Inscrição Segredos do Gemini'}
            </h5>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full" style={{ backgroundColor: config.primaryColor }}></div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="h-10 bg-white/5 rounded-lg border border-border"></div>
            <div className="h-10 bg-white/5 rounded-lg border border-border"></div>
            <div className="h-10 bg-white/5 rounded-lg border border-border"></div>
          </div>

          <button 
            className="w-full py-4 rounded-xl font-bold text-sm text-white shadow-lg transition-transform active:scale-95"
            style={{ backgroundColor: config.primaryColor || '#238636' }}
          >
            {config.buttonText || 'Comprar Agora'}
          </button>
          
          <p className="text-[10px] text-text-muted text-center flex items-center justify-center gap-1">
            <svg size={10} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            Compra 100% Segura
          </p>
        </div>
      </div>
      
      <p className="text-[10px] text-text-muted text-center italic">
        Esta é uma visualização aproximada em tempo real.
      </p>
    </div>
  );
};

export default PreviewFrame;
