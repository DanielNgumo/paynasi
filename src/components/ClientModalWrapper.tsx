// src/components/ClientModalWrapper.tsx
"use client";

import dynamic from 'next/dynamic';

// Dynamically import DownloadAppModal to prevent SSR
const DownloadAppModal = dynamic(() => import('@/components/DownloadAppModal'), { ssr: false });

const ClientModalWrapper = () => {
  return <DownloadAppModal />;
};

export default ClientModalWrapper;