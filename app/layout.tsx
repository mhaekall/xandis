'use client';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from "next/font/google";
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname === '/login' || pathname === '/signup'; 

  return (
    <html lang="en">
      <head>
        <title>Just Edit - Video Editing Marketplace for TikTok & Reels</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <AuthProvider>
          <LanguageProvider>
            {!hideLayout && <Header />}
            <main>{children}</main>
            {!hideLayout && <Footer />}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
