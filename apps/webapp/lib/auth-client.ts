import { createAuthClient } from "better-auth/react";
import { usernameClient } from "better-auth/client/plugins";

export const { signIn, signUp, useSession, getSession, signOut } =
  createAuthClient({
    plugins: [usernameClient()],
  });
