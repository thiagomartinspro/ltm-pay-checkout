import React, { useState } from 'react';
import { Globe, Plus, Trash2, CheckCircle2, AlertCircle, Copy, Link2 } from 'lucide-react';

const WebhookRow = ({ url, events, status }) => (
  <div className="flex items-center gap-4 p-4 glass-card border-border hover:border-text-muted transition-all">
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${status === 'active' ? 'bg-green-400/10 text-green-400' : 'bg-red-400/10 text-red-400'}`}>
      <Globe size={20} />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2">
        <p className="text-sm font-bold text-text-header truncate">{url}</p>
        <button className="text-text-muted hover:text-text-main p-1"><Copy size={12} /></button>
      </div>
      <div className="flex gap-2 mt-1">
        {events.map((e, idx) => (
          <span key={idx} className="text-[10px] bg-white/5 border border-border px-2 py-0.5 rounded text-text-muted font-medium">
            {e}
          </span>
        ))}
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1.5 text-xs font-bold text-text-muted uppercase">
        {status === 'active' ? <CheckCircle2 size={14} className="text-green-400" /> : <AlertCircle size={14} className="text-red-400" />}
        {status === 'active' ? 'Ativo' : 'Erro'}
      </div>
      <button className="text-red-400/50 hover:text-red-400 p-2 transition-colors">
        <Trash2 size={18} />
      </button>
    </div>
  </div>
);

const Webhooks = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-text-header font-outfit">Webhooks e Notificações</h2>
          <p className="text-text-muted text-sm">Notifique seu servidor sobre eventos de venda em tempo real.</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20"
        >
          <Plus size={20} />
          Novo Webhook
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <WebhookRow 
          url="https://api.seusistema.com.br/v1/webhook"
          events={['Venda Aprovada', 'Cancelada', 'Recorrência']}
          status="active"
        />
        <WebhookRow 
          url="https://webhooks.integrador.io/ltmpay"
          events={['Pix Gerado', 'Boleto']}
          status="active"
        />
      </div>

      {/* Info Card */}
      <div className="glass-card p-8 flex gap-6 items-start bg-bg-sidebar/50">
        <div className="p-4 bg-primary/10 rounded-2xl text-primary">
          <Link2 size={32} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-text-header font-outfit">Documentação da API</h3>
          <p className="text-sm text-text-muted max-w-2xl">
            Todos os webhooks são enviados via POST em formato JSON. Incluímos uma assinatura (HMAC-SHA256) no header <code>X-LTM-Signature</code> para garantir a segurança da integração.
          </p>
          <button className="text-primary text-sm font-bold flex items-center gap-1 mt-2 hover:underline">
            Ver documentação completa <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Webhooks;
