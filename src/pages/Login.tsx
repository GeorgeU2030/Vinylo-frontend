import EyeIcon from "@/components/icons/EyeIcon"
import EyeOffIcon from "@/components/icons/EyeOffIcon"
import { AuthContext } from "@/context/AuthContext"
import { AuthContextType } from "@/interfaces/AuthContextType"
import { LoginDto } from "@/interfaces/Login"
import { login } from "@/services/auth"
import { AxiosError } from "axios"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export default function Login() {

  //context
  const authContext = useContext<AuthContextType | null>(AuthContext);
  //navigation
  const navigate = useNavigate()

  //states
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  //hooks
  const { register, handleSubmit, formState } = useForm()

  const { loginContext } = authContext!

  const onSubmit = handleSubmit(async (data) => {
    try{
      const form: LoginDto = {
        email: data.email,
        password: data.password
      }
      const response = await login(form)
      loginContext(response.user)
      navigate("/home")
    }catch(error){
      if (error instanceof AxiosError && error.response) {
        setError(error.response.data.message)
      } else {
        console.error("Unexpected error", error)
      }
    }
  })

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

        <form className="flex flex-col items-center w-full lg:w-3/5" method="post" onSubmit={onSubmit}>
          <input placeholder="Email" type="email" className="border-1 border-pome rounded-lg py-2 px-2 w-5/6 mt-6"
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
          {formState.errors.email ? (<p className="text-red-500 mt-2 text-center text-sm">
              Email is not valid</p>) :
          formState.errors.password ? (<p className="text-red-500 mt-2 text-center text-sm">
              Password must be at least 7 characters</p>) : null}

          {error ? <p className="text-red-500 mt-2 text-center font-bold">{error}</p> : null} 
          <button type="submit" className="bg-pome hover:bg-pomepeach text-white py-2 px-4 w-1/3 font-bold rounded-lg mt-6">Login</button>
        </form>
      </section>
    </div>
  )
}
