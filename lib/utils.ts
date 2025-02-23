import { User } from "@stackframe/stack";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function appsEnabled(user: User) {
  // checa no backend se a aplicação está habilitada para o usuário/empresa

  return true;
}