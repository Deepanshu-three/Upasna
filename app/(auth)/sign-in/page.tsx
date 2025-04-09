
import { auth, signIn } from "@/auth"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"
 
export default async function SignIn() {

    const user = await auth()

    if(user){
        redirect('/')
    }

  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <Button type="submit">Signin with Google</Button>
    </form>
  )
} 