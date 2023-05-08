import { LayoutProps } from "@/pages/_app";

export const MainLayout = ({ children }: LayoutProps) => {
  // useEffect(() => {
  //   console.log('Layout')
  // }, [])
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
