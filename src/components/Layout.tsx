
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-purple-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="font-bold text-xl">BTS</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li className="hover:text-purple-200">
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}>Главная</a>
              </li>
              <li className="hover:text-purple-200">
                <a href="#members" onClick={(e) => {
                  e.preventDefault();
                  const membersSection = document.getElementById("members");
                  membersSection?.scrollIntoView({ behavior: "smooth" });
                }}>Участники</a>
              </li>
              <li className="hover:text-purple-200">
                <a href="#discography" onClick={(e) => {
                  e.preventDefault();
                  const discographySection = document.getElementById("discography");
                  discographySection?.scrollIntoView({ behavior: "smooth" });
                }}>Дискография</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-purple-900 text-white p-6">
        <div className="container mx-auto text-center">
          <p>© 2023 BTS Fan Site. Это неофициальный фан-сайт, созданный поклонниками группы.</p>
        </div>
      </footer>
    </div>
  );
};
