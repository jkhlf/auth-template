"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Template de Autenticação
      </h1>

      <div className="bg-white p-8 rounded-lg shadow-md">
        {isLoading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : session ? (
          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Autenticado com Sucesso! 🎉
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-medium mb-2">Informações do Usuário:</h3>
              <p className="mb-1">
                <span className="font-bold">Nome:</span>{" "}
                {session.user?.name || "Não informado"}
              </p>
              <p className="mb-1">
                <span className="font-bold">Email:</span> {session.user?.email}
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              Este é um template funcional de autenticação que você pode
              personalizar para suas necessidades. As senhas são criptografadas
              antes de serem armazenadas no banco de dados.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Bem-vindo ao Template de Autenticação
            </h2>
            <p className="text-gray-700 mb-6">
              Este é um template completo com autenticação usando Auth.js,
              Prisma e Supabase. As senhas são criptografadas usando bcrypt
              antes de serem armazenadas no banco de dados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/login"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Registrar
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="mt-12 text-gray-600 text-sm">
        <h3 className="font-medium mb-2">Recursos incluídos:</h3>
        <ul className="list-disc list-inside space-y-2 text-left max-w-md mx-auto">
          <li>Login e registro com validação</li>
          <li>Senhas criptografadas com bcrypt</li>
          <li>Banco de dados PostgreSQL com Supabase</li>
          <li>Prisma ORM para manipulação do banco de dados</li>
          <li>Auth.js (Next-Auth) para gerenciamento de sessões</li>
          <li>Interface responsiva</li>
        </ul>
      </div>
    </div>
  );
}
