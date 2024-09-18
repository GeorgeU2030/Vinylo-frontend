import {Input} from "@nextui-org/input";

export default function SignUp() {
  return (
    <div className="min-h-screen max-w-screen bg-gradient-to-r from-pomepinkdark to-pome flex justify-center items-center">
        <div className="py-6 px-6 bg-light w-1/3 rounded-lg border-4 border-pomepeach">
            <form action="" className="flex flex-col items-center">
                <h1 className="bg-gradient-to-r from-pomedark to-pomepink bg-clip-text text-transparent font-bold text-2xl">Sign Up</h1>

                <Input
                    key={"lg"}
                    radius={"lg"}
                    type="text"
                    label="Username"
                    defaultValue="nextui"
                    className="w-2/3 mt-4"
                    size="lg"
                    variant="underlined"
                />

                <Input
                    key={"lg"}
                    radius={"lg"}
                    type="email"
                    label="Email"
                    defaultValue="junior@nextui.org"
                    className="w-2/3 mt-4"
                    size="lg"
                    variant="underlined"
                />


                
            </form>
        </div>
    </div>
  )
}
