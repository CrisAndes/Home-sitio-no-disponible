import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import Emergency from './Modals/Emergency';

const SITIO = 'https://andessalud.com.ar';

// Links a las secciones del sitio productivo actual (este sitio es solo la portada "en desarrollo")
const LINK_COTIZAR = 'https://andessalud.com.ar/CotizaTuPlan/?utm_anuncio=WEB_ANDES&utm_campana=ORGANICO&utm_source=ORGANICO%20WEB_ANDES';
const LINK_GESTIONES = 'https://andessalud.com.ar/#second-section';
const LINK_DR_ONLINE = 'https://andessalud.com.ar/dr-online/';
const LINK_BIENESTAR = 'https://andessalud.com.ar/#fourth-section';
const LINK_CONTACTO = 'https://andessalud.com.ar/#fifth-section';

const Header = () => {
	const [emergencyOpen, setEmergencyOpen] = useState(false);

	return (
		<>
			{emergencyOpen && <Emergency setOpen={setEmergencyOpen} />}
			<div className="h-[58px] lg:h-[135px]"></div>
			<div className="fixed flex xl:flex-col bg-[#FFB71B] xl:bg-inherit flex-row-reverse top-0 left-0 right-0  xl:min-h-[150px] max-w-[100vw] z-50 w-full">
				{/* TOP HEADER */}
				<div className="xl:bg-[#6C531D] bg-[#FFB71B]">
					<div className=" flex h-full justify-end space-x-5">
						{/* AMBULANCE */}
						<div
							onClick={() => setEmergencyOpen(true)}
							className="cursor-pointer flex bg-[#E52E2E] my-2 xl:my-0 rounded-xl xl:rounded-none xl:bg-[#A42525] items-center space-x-2 px-3 font-semibold text-white text-sm"
						>
							<img src="/svg/ambulance.svg" className="w-6" alt="" />
							<div className="hidden xl:block">Urgencias y Emergencias</div>
						</div>
					</div>
				</div>

				{/* MAIN HEADER */}
				<div className="bg-[#FFB71B] flex-grow">
					<header className="flex items-center justify-between mx-auto py-2 xl:py-5">
						{/* LOGO (redirige al home de Andes Salud) */}
						<a href={SITIO} className="text-[#00205C] flex flex-col">
							<img
								src="/gif/logo.gif"
								className="h-[60px] md:h-[80px] ml-5 xl:w-auto cursor-pointer"
								alt="Andes Salud"
							/>
						</a>
						{/* NAVBAR */}
						<nav className="mr-[50px] hidden xl:flex items-center space-x-8 text-[#191B1E] font-semibold text-lg">
							<a
								href={LINK_COTIZAR}
								className="bg-[#0F4F87] rounded-lg text-white py-1 px-7 border-2 border-[#0F4F87] transition-all duration-300 hover:bg-white hover:text-[#0F4F87]"
							>
								Cotizá online
							</a>
							<a href={LINK_GESTIONES} className="nav-link">
								Gestiones
							</a>
							<a href={LINK_DR_ONLINE} className="nav-link">
								Doctor online
							</a>
							<a href={LINK_BIENESTAR} className="nav-link">
								Zona Bienestar
							</a>
							<a href={LINK_CONTACTO} className="nav-link">
								Contacto
							</a>
						</nav>
					</header>
				</div>

				{/* BURGER MENU */}
				<div className="flex xl:hidden items-center justify-center bg-inherit ml-5 !max-w-full relative ">
					<BurgerMenu setEmergencyOpen={setEmergencyOpen} />
				</div>
			</div>
		</>
	);
};

export default Header;
