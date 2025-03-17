import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication - Ezgoals",
  description: "Sign in or create an account to start achieving your goals",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}