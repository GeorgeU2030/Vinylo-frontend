import { useEffect, useState } from "react"
import "../css/signup.css"
import { useForm } from "react-hook-form"
import EyeOffIcon from "@/components/icons/EyeOffIcon"
import EyeIcon from "@/components/icons/EyeIcon"

export default function SignUp() {

  //variables
  const currentYear = new Date().getFullYear()
  const maxYear = currentYear - 12
  const minYear = currentYear - 100

  //states
  const [year, setYear] = useState<number>(2006)
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  const [avatar, setAvatar] = useState<string>("")

  const [image, setImage] = useState<string>("/pome.webp")
  const [showPassword, setShowPassword] = useState<boolean>(false)

  //hooks
  const { register, handleSubmit, formState } = useForm()

  //effects
  useEffect(() => {
    if(avatar != ""){
      setImage(avatar)
    }
  }, [avatar])
  
  //functions
  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
  })

  return (
    <div className="min-h-screen max-w-screen bg-gradient-to-b from-pome to-pomepeach flex justify-center items-center">
        <div className="py-6 px-6 my-6 bg-gradient-to-r from-light to-slate-300 w-11/12 lg:w-1/3 rounded-lg">
            <form className="flex flex-col items-center" method="onSubmit" 
            onSubmit={onSubmit}>
              <h1 className="bg-gradient-to-r from-pomedark to-pomepink bg-clip-text text-transparent font-bold text-2xl">Sign Up</h1>
              
              <img src={image} className="rounded-full w-12 h-12 mt-4" />
              <input type="number" placeholder="2006" value={year} 
              {...register("year", { required: true, min: minYear, max: maxYear })}
              onChange={(e) => setYear(parseInt(e.target.value))}
              className="mt-3 text-white w-1/3 lg:w-1/4 font-bold text-center rounded-lg bg-gradient-to-r from-pomepeach to-pome border border-light"/>
              
              <input placeholder="Email" type="email" className="border border-pome rounded-lg py-1 px-2 w-5/6 lg:w-3/4 mt-6"
              value={email}
              {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
              onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex w-full justify-center">
                <input 
                  placeholder="Password" 
                  type={showPassword ? "text" : "password"} 
                  className="border-b border-l border-t border-pome rounded-tl-lg rounded-bl-lg py-1 px-2 mt-6 w-2/3 pr-8 outline-none" 
                  {...register("password", { required: true, minLength: 7 })}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="bg-white p-1 mt-6 border-b border-r border-t border-pome rounded-tr-lg rounded-br-lg"
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
              <input placeholder="Name" type="text" className="border border-pome rounded-lg py-1 px-2 w-5/6 lg:w-3/4 mt-6"
              {...register("name", { required: true, minLength: 3 })}
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
              <input placeholder="Username" type="text" className="border border-pome rounded-lg py-1 px-2 w-5/6 lg:w-3/4 mt-6"
              {...register("username", { required: true, minLength: 3 })}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
              <input placeholder="URL Avatar" type="url" className="border border-pome rounded-lg py-1 px-2 w-5/6 lg:w-3/4 mt-6"
              {...register("avatar", { required: true })}
              onChange={(e) => setAvatar(e.target.value)}
              />  
              {formState.errors.email && <p className="text-red-500 mt-2 text-center text-tiny">
              Email is not valid</p>}
              {formState.errors.password && <p className="text-red-500 text-center text-tiny">
              Password must be at least 7 characters</p>}
              {formState.errors.name && <p className="text-red-500 text-center text-tiny">
              Name must be at least 3 characters</p>}
              {formState.errors.username && <p className="text-red-500 text-center text-tiny">
              Username must be at least 3 characters</p>}
              {formState.errors.avatar && <p className="text-red-500 text-center text-tiny">
              Avatar is required</p>}
                
              <button 
              className="bg-pome text-white rounded-lg py-2 px-3 w-1/2 mt-8 hover:bg-pomepeach font-bold">
              Sign Up</button>   
            </form>
        </div>
    </div>
  )
}
