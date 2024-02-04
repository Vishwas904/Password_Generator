import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";
const PasswordHide = () => {
    const [password, setPassword] = useState(true)
    return (
        <>
            <div className="w-fit flex items-center mx-auto rounded-sm px-4 py-2 my-8 text-orange-500 bg-gray-700 gap-3 ">
                <input type={password ? "password" : "text"} className="outline-none bg-transparent " />
                {
                    password ? <FaEyeSlash className="text-2xl cursor-pointer" onClick={() => setPassword(!password)} /> : <FaEye className="text-2xl cursor-pointer" onClick={() => setPassword(!password)} />
                }
            </div>
        </>
    )
}

export default PasswordHide
