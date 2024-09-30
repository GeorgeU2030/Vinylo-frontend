import EyeIcon from "@/components/icons/EyeIcon"
import EyeOffIcon from "@/components/icons/EyeOffIcon"
import { useState } from "react"
import { useForm } from "react-hook-form"

export default function Login() {

  //states
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [showPassword, setShowPassword] = useState<boolean>(false)
  //hooks
  const { register } = useForm()

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen">
      <section className="w-full lg:w-1/2 bg-gradient-to-r from-pomepink to-pomepeach h-screen flex flex-col items-center justify-center">
        <img src="collage.jpg" alt="spotify" className="w-[40rem] h-[20rem] md:h-[30rem] rounded-lg" />
      </section>
      <section className="w-full lg:w-1/2 bg-light h-screen flex flex-col items-center md:justify-center">
        <div className="flex flex-col items-center mt-12">
          <img src="pome.webp" alt="pome" className="w-12 h-12" />
          <h1 className="text-2xl font-bold mt-2">PomeMusic</h1>
        </div>

        <form className="flex flex-col items-center w-full lg:w-3/5">
          <input placeholder="Email" type="email" className="border border-pome rounded-lg py-2 px-2 w-5/6 mt-6"
              value={email}
              {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
              onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex justify-center w-5/6 ">
                <input 
                  placeholder="Password" 
                  type={showPassword ? "text" : "password"} 
                  className="border-b border-l border-t border-pome rounded-tl-lg rounded-bl-lg py-2 px-2 mt-6 w-full outline-none" 
                  {...register("password", { required: true, minLength: 7 })}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="bg-white p-0 lg:p-1 mt-6 pr-1 border-b border-r border-t border-pome rounded-tr-lg rounded-br-lg"
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
          </div>
          <button type="submit" className="bg-pome hover:bg-pomepeach text-white py-2 px-4 w-1/3 font-bold rounded-lg mt-6">Login</button>
        </form>
      </section>
    </div>
  )
}
