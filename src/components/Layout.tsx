
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-purple-700 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold text-center">BTS Fan Page</h1>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-purple-700 text-white p-4 text-center text-sm">
        <p>© 2023 BTS Fan Site. Неофициальный фан-сайт.</p>
      </footer>
    </div>
  );
};
