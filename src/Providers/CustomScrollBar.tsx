'use client'

import React from 'react'

const CustomScrollbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <style jsx global>{`
        /* Custom Scrollbar Styles */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background-color: rgba(155, 155, 155, 0.5);
          border-radius: 20px;
          border: transparent;
        }

        ::-webkit-scrollbar-thumb:hover {
          background-color: rgba(155, 155, 155, 0.8);
        }

        /* For Firefox */
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
        }

        /* For Edge and IE */
        *::-ms-scrollbar {
          width: 8px;
          height: 8px;
        }

        *::-ms-scrollbar-track {
          background: transparent;
        }

        *::-ms-scrollbar-thumb {
          background-color: rgba(155, 155, 155, 0.5);
          border-radius: 20px;
        }

        *::-ms-scrollbar-thumb:hover {
          background-color: rgba(155, 155, 155, 0.8);
        }

        /* Ensure the scrollbar is visible on all scrollable elements */
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
        }

        *:hover {
          scrollbar-color: rgba(155, 155, 155, 0.8) transparent;
        }
      `}</style>
      {children}
    </>
  )
}

export default CustomScrollbarProvider