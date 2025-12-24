import type { Metadata } from "next";
import AuthPage from "../_components/auth-page";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
    title: "Login - torseek",
    description: "Login to your account",
};

export default async function LoginPage() {
    return (
        <>
            <AuthPage />
            <Toaster />
        </>
    );
}