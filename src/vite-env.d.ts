/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_ID: any
    // Add more environment variables here as needed.
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }