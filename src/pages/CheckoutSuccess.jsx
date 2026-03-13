import React from 'react';
import { CheckCircle2, ArrowRight, Download, Share2, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CheckoutSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg-main flex flex-col items-center justify-center p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-bg-main to-bg-main">
      <div className="max-w-[500px] w-full flex flex-col items-center gap-8 animate-in fade-in zoom-in-95 duration-700">
        {/* Success Icon */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary blur-3xl opacity-20 scale-150 animate-pulse"></div>
          <div className="relative w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40">
            <CheckCircle2 size={48} strokeWidth={3} />
          </div>
        </div>

        {/* Text */}
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-4xl font-black font-outfit text-text-header tracking-tight">Pagamento Aprovado!</h1>
          <p className="text-text-muted text-lg max-w-xs mx-auto">
            Sua vaga no curso **Segredos do Gemini** está garantida.
          </p>
        </div>

        {/* Info Card */}
        <div className="w-full glass-card p-8 border-primary/20 bg-primary/5 flex flex-col gap-6">
          <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <span className="text-text-muted text-sm font-medium">ID da Transação</span>
            <span className="text-text-header text-sm font-bold tabular-nums">#98234-LTM</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <span className="text-text-muted text-sm font-medium">Data e Hora</span>
            <span className="text-text-header text-sm font-bold">13/03/2026 às 15:42</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-text-muted text-sm font-medium">Valor Pago</span>
            <span className="text-primary text-xl font-black tabular-nums">R$ 197,90</span>
          </div>
        </div>

        {/* Actions */}
        <div className="w-full flex flex-col gap-4">
          <button className="w-full py-4 bg-primary hover:bg-primary-hover text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/20">
            Acessar Conteúdo Agora
            <ArrowRight size={20} />
          </button>
          
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 glass-card border-border hover:border-text-muted text-text-muted flex items-center justify-center gap-2 font-bold text-sm transition-all">
              <Download size={18} />
              Recibo
            </button>
            <button className="p-4 glass-card border-border hover:border-text-muted text-text-muted flex items-center justify-center gap-2 font-bold text-sm transition-all">
              <Share2 size={18} />
              Compartilhar
            </button>
          </div>
        </div>

        {/* Footer Support */}
        <div className="flex flex-col items-center gap-2 text-text-muted">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Mail size={16} />
            Enviamos os dados de acesso para seu e-mail.
          </div>
          <button 
            onClick={() => navigate('/')}
            className="text-xs hover:text-text-header transition-colors underline underline-offset-4"
          >
            Voltar para o Painel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
