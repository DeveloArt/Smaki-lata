import { HomeLayout } from "@/components/templates/HomeLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <HomeLayout>{children}</HomeLayout>;
}
