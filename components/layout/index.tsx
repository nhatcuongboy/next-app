import { LayoutProps } from "@/pages/_app";
import { AuthenticatedRoute } from "../restricted-route/authenticated-route";
import Header from "../header";

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <h1>Nhat Cuong</h1> */}
      <div>{children}</div>
    </>
  );
}

export const EmptyLayout = ({ children }: LayoutProps) => {
  return (
    <div>{children}</div>
  );
}

export const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <AuthenticatedRoute>
      <Header />
      <div>{children}</div>
    </AuthenticatedRoute>
  );
}

export const OutsideLayout = ({ children }: LayoutProps) => {
  return (
    <AuthenticatedRoute requireLogin={false}>
      {children}
    </AuthenticatedRoute>
  );
}
