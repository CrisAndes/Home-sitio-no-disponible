import React, { useState } from 'react';
import Layout from './Layout';
import axios from 'axios'

const Login = ({
	setOpen,
	setRegisterOpen,
}) => {

	const [loading, setLoading] = useState(false)
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [email, setEmail] = useState("")
	const [pass, setPass] = useState("")
	const [error, setError] = useState("")

	const handleChange = (event) => {
		if (event.target.id === 'username') {
			setEmail(event.target.value)
		} else {
			setPass(event.target.value)
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setLoading(true)
		setError("")
		axios.post(`https://cotizador.createch.com.ar/login`, { email, pass })
			.then(response => {
				if (response.data.status === 200) {
					window.location.replace(response.data.meta.url)
				} else {
					setError("Las credenciales ingresadas no son correctas")
				}
			})
			.catch((error) => {
				setError(error?.response?.data?.errores || "Ocurrió un error, intentá de nuevo")
			})
			.finally(() => setLoading(false))
	}

	return (
		<Layout setOpen={setOpen}>
			<div className="lg:w-[400px] px-5">
				<div className="text-[#FFB71B]  text-lg  md:text-2xl font-bold mb-5">
					Ingresá a tu cuenta
				</div>
				<form action="" className="text-[#191B1E]">
					<div className="login-form">
						<label htmlFor="username">Usuario {"(Nro de DNI)"}</label>
						<input
							type="text"
							id="username"
							placeholder="Ingresá tu usuario"
							onChange={handleChange}
						/>
					</div>
					<div className="login-form">
						<label htmlFor="password">Contraseña</label>
						<div className="relative">
							<input
								type={passwordVisible ? 'text' : 'password'}
								id="password"
								className="!pr-[45px]"
								placeholder="Ingresá tu contraseña"
								onChange={handleChange}
							/>
							<img
								onClick={() => setPasswordVisible(passwordVisible => !passwordVisible)}
								src="/svg/password-eye.svg"
								className="absolute z-20 right-5 top-[25%]"
								alt=""
							/>
						</div>
					</div>
					<div className="login-form">
						<small className='text-[90%] text-center'>Para prestadores o clinicas nombre de usuario</small>
						<small className='text-[#e90a0a] text-[90%] text-center'>{error}</small>
					</div>

					{!loading ?
						<button onClick={handleSubmit} className=" bg-[#FFB71B] text-[#191B1E] w-full py-2 font-semibold rounded-lg">
							Ingresar
						</button>
						:
						<button onClick={handleSubmit} className=" bg-[#FFB71B] text-[#191B1E] w-full py-2 font-semibold rounded-lg">
							Cargando ...
							<img
								src="/svg/spinner.svg"
								className="absolute w-[100px] right-[20px] top-[235px]"
								alt=""
							/>
						</button>
					}
				</form>
				<div className="mt-5 flex whitespace-nowrap flex-col xs:flex-row items-center justify-center text-sm font-[500]">
					¿Aún no tenés tu cuenta?
					<span
						className="text-[#0F4F87] underline ml-1 cursor-pointer"
						onClick={() => {
							setRegisterOpen(true);
							setOpen(false);
						}}
					>
						Registrate ahora
					</span>
				</div>
			</div>
		</Layout>
	);
};

export default Login;
