import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  Settings, 
  Layout, 
  Zap, 
  Gift, 
  Code 
} from 'lucide-react';
import BrandingSettings from '../components/checkout/BrandingSettings';

const TabButton = ({ active, onClick, icon: Icon, children }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium transition-all ${
      active 
        ? 'border-primary text-primary' 
        : 'border-transparent text-text-muted hover:text-text-main'
    }`}
  >
    <Icon size={18} />
    {children}
  </button>
);

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('checkout');
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState({
    primaryColor: '#238636',
    backgroundColor: '#0a0c10',
    title: 'Finalize sua inscrição',
    buttonText: 'Comprar Agora',
    showTimer: true,
    timerMinutes: 15
  });

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Configurações salvas com sucesso!');
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Top Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/products')}
            className="p-2 hover:bg-white/5 rounded-xl text-text-muted transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-text-header font-outfit">Editar Produto</h2>
            <p className="text-text-muted text-sm">Configure sua oferta e personalize seu checkout.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 glass-card border-border hover:border-text-muted text-text-muted hover:text-text-main rounded-xl font-bold text-sm transition-all">
            <Eye size={18} />
            Visualizar
          </button>
          <button 
            onClick={handleSave}
            disabled={loading}
            className="flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
          >
            <Save size={18} />
            {loading ? 'Salvando...' : 'Salvar Alterações'}
          </button>
        </div>
      </div>

      {/* Editor Body */}
      <div className="glass-card overflow-hidden flex flex-col min-h-[600px]">
        {/* Tabs navigation */}
        <div className="flex border-b border-border bg-bg-sidebar/50 px-4">
          <TabButton 
            active={activeTab === 'config'} 
            onClick={() => setActiveTab('config')} 
            icon={Settings}
          >
            Produto
          </TabButton>
          <TabButton 
            active={activeTab === 'checkout'} 
            onClick={() => setActiveTab('checkout')} 
            icon={Layout}
          >
            Checkouts
          </TabButton>
          <TabButton 
            active={activeTab === 'bumps'} 
            onClick={() => setActiveTab('bumps')} 
            icon={Zap}
          >
            Order Bumps
          </TabButton>
          <TabButton 
            active={activeTab === 'upsell'} 
            onClick={() => setActiveTab('upsell')} 
            icon={Gift}
          >
            Upsell
          </TabButton>
          <TabButton 
            active={activeTab === 'codes'} 
            onClick={() => setActiveTab('codes')} 
            icon={Code}
          >
            Códigos
          </TabButton>
        </div>

        {/* Tab Content */}
        <div className="p-8 flex-1">
          {activeTab === 'checkout' && (
            <BrandingSettings config={config} setConfig={setConfig} />
          )}
          
          {activeTab !== 'checkout' && (
            <div className="flex flex-col items-center justify-center text-center h-full py-20 gap-4">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-text-muted">
                <Settings size={32} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-header">Em desenvolvimento</h3>
                <p className="text-sm text-text-muted max-w-sm">Esta aba está sendo preparada para oferecer as melhores funcionalidades para seu checkout.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
