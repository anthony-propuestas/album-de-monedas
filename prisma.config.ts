import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // DIRECT_URL (puerto 5432) para migraciones — sin pooler
    url: process.env["DIRECT_URL"],
  },
});
