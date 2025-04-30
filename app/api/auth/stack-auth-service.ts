import fetch from "node-fetch";

const STACK_API_BASE_URL = "https://api.stack-auth.com/api/v1/";
const STACK_PROJECT_ID = process.env.STACK_PROJECT_ID;
const STACK_SECRET_SERVER_KEY = process.env.STACK_SECRET_SERVER_KEY;

export class StackAuthService {
  static async authenticateUser(email: string, password: string) {
    const response = await fetch(`${STACK_API_BASE_URL}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Stack-Access-Type": "server",
        "X-Stack-Project-Id": STACK_PROJECT_ID!,
        "X-Stack-Secret-Server-Key": STACK_SECRET_SERVER_KEY!,
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Failed to authenticate user");
    }

    const data = await response.json();
    return data; // Contains the access token and user details
  }

  static async validateAccessToken(accessToken: string) {
    const response = await fetch(`${STACK_API_BASE_URL}auth/validate`, {
      method: "GET",
      headers: {
        "X-Stack-Access-Type": "server",
        "X-Stack-Project-Id": STACK_PROJECT_ID!,
        "X-Stack-Secret-Server-Key": STACK_SECRET_SERVER_KEY!,
        "X-Stack-Access-Token": accessToken,
      },
    });

    if (!response.ok) {
      throw new Error("Invalid access token");
    }

    const data = await response.json();
    return data; // Contains user details if the token is valid
  }
}
