import { ReactNode, useEffect } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    console.log('Layout')
  }, [])
  return (
    <>
      <h1>Nhat Cuong</h1>
      <main>{children}</main>
    </>
  );
}
