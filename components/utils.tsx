"use client";

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useUser } from "@stackframe/stack";


const RouteDebbuger = () => {
  
    // Acessa o caminho (pathname) atual
    const pathname = usePathname();
    // Acessa os parâmetros de consulta atuais (query parameters)
    const searchParams = useSearchParams();

    // Pega informações do usuario logado
    const user = useUser();

    useEffect(()=> {
        const url = `${pathname}?${searchParams}`
        console.log(url);
    }, [pathname, searchParams])
  
    return (
      <div>
        <h2>Route Debugger</h2>
        <p>Usuário: {user?.displayName} </p>
        <p>Rota atual: {pathname}</p>
        <p>Parâmetros de consulta: {JSON.stringify(searchParams)}</p>
      </div>
    );
  };
  
  export default RouteDebbuger;
  