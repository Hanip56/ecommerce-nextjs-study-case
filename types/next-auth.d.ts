import nextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      isAdmin: boolean;
      image: string | null;
    };
  }
}
