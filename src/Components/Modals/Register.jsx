import React, { useState } from 'react';
import Layout from './Layout';
import axios from 'axios';
import Swal from 'sweetalert2';


const Register = ({
	setOpen,
	setLoginOpen,
}) => {
	const [passwordVisible1, setPasswordVisible1] = useState(false);
	const [passwordVisible, setPasswordVisible] = useState(false);

	const [loading, setLoading] = useState(false)
	const [numDoc, setNumDoc] = useState("")
	const [carCelular, setcarCelular] = useState("")
	const [telCelular, settelCelular] = useState("")
	const [contRegistro, setcontRegistro] = useState("")
	const [contRegistroConf, setcontRegistroConf] = useState("")
	const [errorContra, seterrorContra] = useState("")
	const [errorNumDoc, seterrorNumDoc] = useState("")
	const [mensajeRegister, setmensajeRegister] = useState("")

	const numDocumento = (e) => {
		setNumDoc(e.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		if (!contRegistro || !contRegistroConf) {
			seterrorContra("Ambos campos de contraseña son obligatorios.");
		} else if (contRegistro !== contRegistroConf) {
			seterrorContra("Las contraseñas no coinciden.");
		} else if (contRegistro.length < 8) {
			seterrorContra("La contraseña debe tener al menos 8 caracteres.");
		} else if (numDoc < 7) {
			seterrorNumDoc("El número de documento ingresado es incorrecto.");
		} else {
			seterrorContra("");
		}

		if (errorContra !== "") {
			return console.log(errorContra);
		}

		setLoading(true)
		setmensajeRegister("")
		let data = {
			numDoc,
			carCelular,
			telCelular,
			contRegistro
		}
		axios.post(`https://cotizador.createch.com.ar/register`, data)
			.then(response => {
				setLoading(false)
				setmensajeRegister(response.data.meta.msg)
				setOpen(false);
				Swal.fire({
					title: `Usuario: ${response.data.meta.nroAfiliado}\nGracias por registrarse, lea con atencion el siguiente texto:`,
					text: "En unos instantes vas a recibir un codigo de autentificacion a travez de WhatsApp, por favor al recibirlo ingresa con la contraseña que creaste, aprentando en el boton de ingresar (azul), recorda copiar tu usuario",
					icon: 'success',
					showConfirmButton: true,
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: "#d33",
					confirmButtonText: "Ingresar",
					cancelButtonText: "Cancelar",
				}).then((result) => {
					if (result.isConfirmed) {
						setLoginOpen(true);
						setOpen(false);
					}
				})
			})
			.catch((error) => {
				setmensajeRegister("Error al cargar los datos")
				setLoading(false)
			})
	}

	return (
		<Layout setOpen={setOpen}>
			<div className="lg:w-[400px] px-5">
				<div className="text-[#FFB71B]  text-lg  md:text-2xl font-bold">Registrate</div>
				<form action="" className="text-[#191B1E]">
					<label htmlFor="username">N* de documento (*)</label>
					<div className="login-form register-form">
						<input type="text" id="username" placeholder="32.198.765" className={errorNumDoc ? "!pr-[45px] error" : "!pr-[45px]"} onChange={numDocumento} />
					</div>
					{/* MIDDLE */}
					<div className="flex items-center space-x-3">
						<div className="login-form register-form w-1/4">
							<label htmlFor="username">Celular</label>
							<input type="text" id="username" placeholder="261" onChange={({ target }) => setcarCelular(target.value)} />
							<div className="text-xs ml-1 text-[#2A2F37] mt-[1px]">Sin el 0</div>
						</div>
						<div className="login-form register-form flex-grow">
							<label htmlFor="username">
								{' '}
								‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎
								‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎{' '}
							</label>
							<input type="text" id="username" placeholder="6543210" onChange={({ target }) => settelCelular(target.value)} />
							<div className="text-xs ml-1 text-[#2A2F37] mt-[1px]">Sin el 15</div>
						</div>
					</div>
					{/* BOTTOM */}
					<div className="login-form register-form">
						<label htmlFor="username">Contraseña</label>
						<div className="relative">
							<input
								type={passwordVisible ? 'text' : 'password'}
								id="username"
								className={errorContra ? "!pr-[45px] error" : "!pr-[45px]"}
								placeholder="Ingresá tu contraseña"
								onChange={({ target }) => setcontRegistro(target.value)}
							/>
							<img
								onClick={() => setPasswordVisible(passwordVisible => !passwordVisible)}
								src="/svg/password-eye.svg"
								className="absolute z-20 right-5 top-[25%]"
								alt=""
							/>
						</div>
					</div>
					<div className="login-form register-form">
						<label htmlFor="username">Confirmar Contraseña</label>
						<div className="relative">
							<input
								type={passwordVisible1 ? 'text' : 'password'}
								id="username"
								className={errorContra ? "!pr-[45px] error" : "!pr-[45px]"}
								placeholder="Confirma tu contraseña"
								onChange={({ target }) => setcontRegistroConf(target.value)}
							/>
							<img
								onClick={() => setPasswordVisible1(passwordVisible1 => !passwordVisible1)}
								src="/svg/password-eye.svg"
								className="absolute z-20 right-5 top-[25%]"
								alt=""
							/>
						</div>
					</div>

					<small className='text-rose-500'>{errorContra}</small>
					{!loading ?
						<button onClick={handleSubmit} className="bg-[#FFB71B] mt-2 text-[#191B1E] w-full py-2 font-semibold rounded-lg">
							Crear cuenta
						</button>
						:
						<button className="bg-[#FFB71B] mt-2 text-[#191B1E] w-full py-2 font-semibold rounded-lg">
							Cargando ...
							<img
								src="/svg/spinner.svg"
								className="absolute w-[100px] right-[20px] top-[343px]"
								alt=""
							/>
						</button>
					}
				</form>
				<div className="mt-5 flex whitespace-nowrap flex-col xs:flex-row items-center justify-center text-sm font-[500]">
					¿Ya tenés tu cuenta?
					<span
						className="text-[#0F4F87] underline ml-1 cursor-pointer"
						onClick={() => {
							setLoginOpen(true);
							setOpen(false);
						}}
					>
						Ingresá ahora
					</span>
				</div>
			</div>
		</Layout>
	);
};

export default Register;
