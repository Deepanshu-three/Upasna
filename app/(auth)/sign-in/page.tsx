import { auth, signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function SignIn() {
    const user = await auth();

    if (user) {
        redirect("/");
    }

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-12">
            <div className="flex flex-col items-center justify-center w-full max-w-xl text-center gap-10">
                {/* Header Text */}

                {/* Sign In Card */}
                <div className="w-full bg-white p-6 sm:p-8 rounded-xl border shadow">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
                            Welcome to Upasna Homoeo
                        </h1>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-green-600 mb-3">
                        Sign in to continue
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base mb-6">
                        Use your Google account to sign into Upasna Homoeo.
                    </p>

                    <form
                        action={async () => {
                            "use server";
                            await signIn("google");
                        }}
                    >
                        <Button
                            type="submit"
                            className="cursor-pointer w-full py-4 sm:py-5 text-base sm:text-lg flex items-center justify-center gap-3 mb-4 
    bg-black text-white hover:bg-neutral-800 transition-all duration-200"
                        >
                            <GoogleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                            Sign in with Google
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}

function GoogleIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 533.5 544.3"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M533.5 278.4c0-17.4-1.4-34.1-4.1-50.3H272v95.2h146.9c-6.3 34-25.1 62.7-53.3 81.9v67.8h85.9c50.3-46.3 81.1-114.6 81.1-194.6z"
                fill="#4285F4"
            />
            <path
                d="M272 544.3c72.9 0 134-24.1 178.7-65.2l-85.9-67.8c-23.9 16-54.4 25.4-92.8 25.4-71 0-131.2-47.9-152.7-112.1H30.9v70.4c44.5 88.2 136.6 149.3 241.1 149.3z"
                fill="#34A853"
            />
            <path
                d="M119.3 324.6c-10.2-30.6-10.2-63.6 0-94.2v-70.4H30.9c-45.8 89.1-45.8 195.9 0 285l88.4-70.4z"
                fill="#FBBC04"
            />
            <path
                d="M272 107.7c39.6-.6 77.6 13.6 106.5 39.8l79.6-79.6C389.6 24.3 331.9-.1 272 0 167.5 0 75.4 61.1 30.9 149.3l88.4 70.4C140.8 155.6 201 107.7 272 107.7z"
                fill="#EA4335"
            />
        </svg>
    );
}
