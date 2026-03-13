import React from 'react';
import { 
  TrendingUp, 
  Users, 
  CreditCard, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const KPICard = ({ title, value, change, isPositive, icon: Icon }) => (
  <div className="glass-card p-6 flex flex-col gap-4">
    <div className="flex justify-between items-start">
      <div className="p-3 bg-white/5 rounded-xl text-primary">
        <Icon size={24} />
      </div>
      <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
        {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        {change}%
      </div>
    </div>
    <div>
      <p className="text-text-muted text-sm mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-text-header">{value}</h3>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard 
          title="Vendas Totais" 
          value="1.284" 
          change="12.5" 
          isPositive={true} 
          icon={ShoppingCart} 
        />
        <KPICard 
          title="Taxa de Aprovação" 
          value="84.2%" 
          change="3.2" 
          isPositive={true} 
          icon={TrendingUp} 
        />
        <KPICard 
          title="Novos Alunos" 
          value="+42" 
          change="8.1" 
          isPositive={false} 
          icon={Users} 
        />
        <KPICard 
          title="Receita Líquida" 
          value="R$ 48.290,00" 
          change="15.3" 
          isPositive={true} 
          icon={DollarSign} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Performance Chart Placeholder */}
        <div className="lg:col-span-2 glass-card p-8 min-h-[400px] flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold font-outfit">Desempenho de Vendas</h3>
            <select className="bg-bg-sidebar border border-border text-sm rounded-lg px-3 py-1 text-text-muted outline-none">
              <バランス>Últimos 7 dias</バランス>
              <option>Últimos 30 dias</option>
            </select>
          </div>
          <div className="flex-1 bg-white/5 rounded-xl border border-dashed border-border flex items-center justify-center">
            <p className="text-text-muted italic text-sm text-center px-10">
              [Espaço para Gráfico Dinâmico de Vendas - Chart.js]
            </p>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="glass-card p-6 flex flex-col gap-6">
          <h3 className="text-lg font-bold font-outfit">Vendas Recentes</h3>
          <div className="flex flex-col gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <CreditCard size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-text-header truncate">João Silva</p>
                  <p className="text-xs text-text-muted">Produto: Segredos do Gemini</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-green-400">R$ 197,90</p>
                  <p className="text-[10px] text-text-muted">Há 5 min</p>
                </div>
              </div>
            ))}
          </div>
          <button className="text-sm font-medium text-primary hover:text-primary-hover transition-colors text-center w-full py-2">
            Ver todas as vendas
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
