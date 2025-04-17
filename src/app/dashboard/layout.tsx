import { HomeLayout } from "@/components/templates/HomeLayout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HomeLayout>
      {children}
    </HomeLayout>
  );
}
