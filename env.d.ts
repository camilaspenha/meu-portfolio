//<reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL?: string  // ou qualquer variável VITE_ personalizada
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}