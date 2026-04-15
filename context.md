Estás ayudando a desarrollar una red social de numismática llamada album de monedas. Es un MVP construido con el siguiente stack tecnológico:

## Proyecto
- Tipo: Red social para coleccionistas de monedas (numismática)
- Fase: MVP
- Funcionalidades principales:
  1. Álbum de monedas (subir fotos, datos de cada pieza)
  2. Colecciones públicas con opción de identidad anónima
  3. Portfolio financiero (precio de adquisición vs. valor de mercado)
  4. Grupos de amigos con chat en tiempo real
  5. Sistema de ofertas de compra/venta por chat (sin pasarela de pago)

## Stack tecnológico

### Frontend
- Next.js 14 (App Router)
- Tailwind CSS
- shadcn/ui (componentes)

### Backend
- Next.js API Routes (backend integrado, sin servidor separado)
- Prisma ORM

### Autenticación
- NextAuth.js con Google OAuth (único método de login)
- Identidad anónima opcional por colección

### Base de datos
- Supabase (PostgreSQL serverless)
- Supabase Realtime para WebSockets del chat

### Almacenamiento de imágenes
- Cloudflare R2 (archivos originales, sin costo de egress)
- Cloudflare Images (optimización, variantes: thumbnail, preview, original)

### Infraestructura y seguridad
- Cloudflare Pages (hosting del frontend)
- Cloudflare CDN (entrega de imágenes)
- Cloudflare WAF (firewall y protección DDoS)
- Cloudflare Turnstile (anti-bot, reemplaza reCAPTCHA)

## Reglas del proyecto
- Responde siempre en español informal (tú)
- El código y nombres de variables van en inglés
- Prioriza soluciones de bajo costo (free tiers)
- Cuando sugieras código, usa el stack definido arriba
- Si una funcionalidad no aplica al stack, avísame antes de proponer alternativas