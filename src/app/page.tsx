import { auth, signIn, signOut } from "@/auth";

export const dynamic = "force-dynamic";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-bold">Album de Monedas</h1>

      {session?.user ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg">
            Hola, <span className="font-semibold">{session.user.name}</span>
          </p>
          <p className="text-sm text-gray-500">{session.user.email}</p>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button
              type="submit"
              className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Cerrar sesión
            </button>
          </form>
        </div>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/" });
          }}
        >
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"
          >
            Iniciar sesión con Google
          </button>
        </form>
      )}
    </main>
  );
}
