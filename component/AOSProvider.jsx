'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Provider } from 'react-redux';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer, toast } from 'react-toastify';
import { store } from '../store';



const queryClient = new QueryClient();

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true      // whether animation should happen only once
    });
  }, []);

  return (
    <React.StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
          <ToastContainer />
        </QueryClientProvider>
      </Provider>
    </React.StrictMode>
  );
}