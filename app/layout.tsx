"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideSidebar = pathname === "/login";

  return (
    <html lang="en">
      <body className="flex">

        {!hideSidebar && (
          <div className="w-64 min-h-screen bg-gradient-to-b from-green-700 to-green-900 text-white p-5">

            <h1 className="text-2xl font-bold mb-8">
              🌿 CropShathi
            </h1>

            <ul className="space-y-4">
              <li><Link href="/dashboard">🏠 Dashboard</Link></li>
              <li><Link href="/upload">📤 Upload</Link></li>
              <li><Link href="/history">📜 History</Link></li>
              <li><Link href="/treatment">💊 Treatment</Link></li>
              <li><Link href="/login">🚪 Logout</Link></li>
            </ul>

          </div>
        )}

        <div className="flex-1 bg-gray-100 p-6">
          {children}
        </div>

      </body>
    </html>
  );
}