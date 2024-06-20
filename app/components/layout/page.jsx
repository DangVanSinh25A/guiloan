'use client'
import React,{ Suspense } from 'react';
import Navbar from '../navbar/page';
import Footer from '../foodter/page';
import Loading from '../../loading/page'
import ErrorPage from '../../error/page';
import { usePathname  } from 'next/navigation';

const Layout = ({ children }) => {
  const pathname = usePathname ()
  if (pathname === '/registers' || pathname === '/login' || pathname === '/' || pathname === '/product') {
    return (
      <div>
        <Navbar />
        <Suspense fallback={<div className="flex justify-center items-center h-screen">
              <Loading />
            </div>}>
            <main>{children}{console.log(pathname)}</main>
        </Suspense> 
        <Footer />
      </div>
    );
} else {
    return <ErrorPage />;
}
};



export default Layout;
