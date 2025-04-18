import { SideNav } from "../organisms/Nav/SideNav";
import { MobileNav } from "../organisms/Nav/MobileNav";
import { Breadcrumbs } from "../molecules/Breadcrumbs";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <SideNav />
      <MobileNav />
      <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto p-6 pt-20 lg:pt-6">
          <Breadcrumbs />
          {children}
        </div>
      </main>
    </div>
  );
};
