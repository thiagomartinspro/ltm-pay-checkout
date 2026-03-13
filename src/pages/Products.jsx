import React from 'react';
import { 
  Package, 
  Plus, 
  MoreVertical, 
  ExternalLink, 
  Edit, 
  Trash2,
  Users,
  DollarSign
} from 'lucide-react';

const ProductCard = ({ name, revenue, students, status }) => (
  <div className="glass-card p-6 flex flex-col gap-6">
    <div className="flex justify-between items-start">
      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20">
        <Package size={24} />
      </div>
      <button className="text-text-muted hover:text-text-main transition-colors p-2">
        <MoreVertical size={20} />
      </button>
    </div>
    
    <div>
      <div className="flex items-center gap-2 mb-1">
        <span className={`w-2 h-2 rounded-full ${status === 'active' ? 'bg-green-400' : 'bg-yellow-400'}`}></span>
        <span className="text-[10px] uppercase font-bold tracking-widest text-text-muted">
          {status === 'active' ? 'Ativo' : 'Rascunho'}
        </span>
      </div>
      <h3 className="text-lg font-bold text-text-header truncate font-outfit">{name}</h3>
    </div>

    <div className="grid grid-cols-2 gap-4 py-4 border-y border-border">
      <div className="flex flex-col gap-1">
        <p className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Faturamento</p>
        <div className="flex items-center gap-1 text-text-header font-bold text-sm">
          <DollarSign size={14} className="text-primary" />
          {revenue}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Alunos</p>
        <div className="flex items-center gap-1 text-text-header font-bold text-sm">
          <Users size={14} className="text-accent" />
          {students}
        </div>
      </div>
    </div>

    <div className="flex gap-2">
      <button className="flex-1 bg-primary hover:bg-primary-hover text-white py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2">
        <Edit size={16} />
        Editar
      </button>
      <button className="p-2.5 glass-card border-border hover:border-text-muted text-text-muted hover:text-text-main rounded-xl">
        <ExternalLink size={18} />
      </button>
    </div>
  </div>
);

const Products = () => {
  const productList = [
    { name: "Segredos do Gemini", revenue: "R$ 42.190,00", students: 254, status: "active" },
    { name: "Criação de Sites Profissionais", revenue: "R$ 12.840,00", students: 92, status: "active" },
    { name: "Masterclass Tráfego Pago", revenue: "R$ 420,00", students: 3, status: "draft" }
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-text-header font-outfit">Meus Produtos</h2>
          <p className="text-text-muted text-sm">Gerencie seus produtos digitais e físicos.</p>
        </div>
        <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
          <Plus size={20} />
          Novo Produto
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productList.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      
      {/* Empty State Illustration if none (placeholder) */}
      {productList.length === 0 && (
        <div className="glass-card p-12 flex flex-col items-center justify-center text-center gap-4">
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-text-muted border border-border">
            <Package size={40} />
          </div>
          <div className="max-w-xs">
            <h3 className="text-lg font-bold text-text-header mb-1">Crie seu primeiro produto</h3>
            <p className="text-sm text-text-muted">Você ainda não possui produtos cadastrados. Comece agora para realizar sua primeira venda.</p>
          </div>
          <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-xl font-bold transition-all mt-2">
            Começar agora
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
