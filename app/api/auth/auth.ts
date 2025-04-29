import { StackAuthService } from "./stack-auth-service";

export const auth = {
  async login(email: string, password: string) {
    try {
      const data = await StackAuthService.authenticateUser(email, password);
      return data; // Retorna o token de acesso e os detalhes do usuário
    } catch (error) {
      throw new Error("Login failed");
    }
  },

  async validateToken(accessToken: string) {
    try {
      const user = await StackAuthService.validateAccessToken(accessToken);
      return user; // Retorna os detalhes do usuário se o token for válido
    } catch (error) {
      throw new Error("Invalid token");
    }
  },
};
