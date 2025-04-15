import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

const validatePassword = (
  password: string
): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("A senha deve ter no mínimo 8 caracteres.");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("A senha deve conter pelo menos uma letra maiúscula.");
  }

  return {
    valid: errors.length === 0,
    errors: errors,
  };
};

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email e senha são obrigatórios" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Este email já está em uso" },
        { status: 400 }
      );
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // Remover a senha do objeto de resposta
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json(
      {
        message: "Usuário registrado com sucesso",
        user: userWithoutPassword,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    return NextResponse.json(
      { message: "Ocorreu um erro ao registrar o usuário" },
      { status: 500 }
    );
  }
}
