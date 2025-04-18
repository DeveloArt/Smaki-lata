import { NavGroup } from "../../molecules/NavGroup";

export const SideNav: React.FC = () => (
  <div className="hidden bg-gray-100/40 lg:block dark:bg-gray-800/40">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-[60px] items-center border-b px-6">
        <span className="font-semibold">Smaki Lata</span>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <div className="px-3">
          <NavGroup />
        </div>
      </div>
    </div>
  </div>
);
