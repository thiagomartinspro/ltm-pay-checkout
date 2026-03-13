import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Settings, 
  LogOut 
} from 'lucide-react';

const SidebarLink = ({ to, icon: Icon, children }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => 
      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
        isActive 
          ? 'bg-primary/20 text-primary border-r-4 border-primary' 
          : 'text-text-muted hover:bg-white/5 hover:text-text-main'
      }`
    }
  >
    <Icon size={20} />
    <span className="font-medium">{children}</span>
  </NavLink>
);

const AppLayout = () => {
  return (
    <div className="flex min-h-screen bg-bg-main">
      {/* Sidebar */}
      <aside className="w-[260px] bg-bg-sidebar border-r border-border flex flex-col fixed h-full">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <ShoppingCart className="text-white" size={24} />
          </div>
          <h1 className="text-xl font-bold font-outfit text-primary tracking-tight">LTM PAY</h1>
        </div>
        
        <nav className="flex-1 px-4 mt-6 flex flex-col gap-2">
          <SidebarLink to="/" icon={LayoutDashboard}>Dashboard</SidebarLink>
          <SidebarLink to="/products" icon={Package}>Produtos</SidebarLink>
          <SidebarLink to="/sales" icon={ShoppingCart}>Vendas</SidebarLink>
          <SidebarLink to="/integrations" icon={Settings}>Integrações</SidebarLink>
          <SidebarLink to="/webhooks" icon={BarChart3}>Webhooks</SidebarLink>
          <SidebarLink to="/settings" icon={Settings}>Configurações</SidebarLink>
        </nav>


        <div className="p-4 border-t border-border">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-text-muted hover:text-red-400 transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Sair</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-[260px] p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-text-header font-outfit">Bem-vindo, Thiago</h2>
            <p className="text-text-muted text-sm">Acompanhe seu desempenho hoje.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold text-text-header">Thiago Martins</p>
              <p className="text-xs text-text-muted">Produtor</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-border overflow-hidden">
              <img src="https://ui-avatars.com/api/?name=Thiago+Martins&background=238636&color=fff" alt="Avatar" />
            </div>
          </div>
        </header>

        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
