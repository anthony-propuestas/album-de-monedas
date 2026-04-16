# Album de Monedas

Aplicación web para gestionar una colección de monedas. Construida con Next.js 15, autenticación con Google vía NextAuth v5, base de datos PostgreSQL en Supabase (via Prisma 7), y desplegada en Cloudflare Pages.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Auth:** NextAuth v5 (beta) + Google OAuth + Prisma Adapter
- **ORM:** Prisma 7 con adaptador `@prisma/adapter-pg`
- **DB:** PostgreSQL en Supabase
- **UI:** Tailwind CSS v4 + shadcn/ui + Base UI
- **Deploy:** Cloudflare Pages via `@cloudflare/next-on-pages`

## Variables de entorno

Crea un archivo `.env.local` con:

```env
DATABASE_URL="postgresql://..."
AUTH_SECRET="..."
AUTH_GOOGLE_ID="..."
AUTH_GOOGLE_SECRET="..."
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Base de datos

```bash
# Generar cliente Prisma
npx prisma generate

# Aplicar migraciones
npx prisma migrate deploy

# Ver datos
npx prisma studio
```

## Deploy

El proyecto usa `@cloudflare/next-on-pages`. La configuración está en [wrangler.toml](wrangler.toml).

```bash
npx @cloudflare/next-on-pages
```
