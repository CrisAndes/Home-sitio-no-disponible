import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineX } from 'react-icons/hi';

// Links a las secciones del sitio productivo actual (este sitio es solo la portada "en desarrollo")
const LINK_COTIZAR = 'https://andessalud.com.ar/CotizaTuPlan/?utm_anuncio=WEB_ANDES&utm_campana=ORGANICO&utm_source=ORGANICO%20WEB_ANDES';
const LINK_GESTIONES = 'https://andessalud.com.ar/#second-section';
const LINK_DR_ONLINE = 'https://andessalud.com.ar/dr-online/';
const LINK_BIENESTAR = 'https://andessalud.com.ar/#fourth-section';
const LINK_CONTACTO = 'https://andessalud.com.ar/#fifth-section';

const SITIO = 'https://andessalud.com.ar';

const BurgerMenu = ({
	setEmergencyOpen,
}) => {
	return (
		<Menu
			width={'75%'}
			customBurgerIcon={<GiHamburgerMenu className="fill-[#191B1E] !w-5 !h-5" />}
			customCrossIcon={<HiOutlineX />}
			className="w-9 h-9"
		>
			<a href={SITIO} className="logo">
				<img src="/gif/logo.gif" className="w-[67%] xl:w-auto" alt="Andes Salud" />
			</a>

			<a id="home" className="menu-selected" href={LINK_COTIZAR}>
				Cotizá online
			</a>
			<a id="about" href={LINK_GESTIONES}>
				Gestiones
			</a>
			<a id="Our Solutions" href={LINK_DR_ONLINE}>
				Doctor online
			</a>
			<a id="services" href={LINK_BIENESTAR}>
				Zona Bienestar
			</a>
			<a id="Our Clients" href={LINK_CONTACTO}>
				Contacto
			</a>
			<div
				onClick={() => setEmergencyOpen(true)}
				className="bg-red-600 cursor-pointer !flex space-x-3 !text-white hover:bg-red-600"
			>
				<img src="/svg/ambulance.svg" className="w-6" alt="" />
				<a className="!flex !flex-row">Emergencias</a>
			</div>
		</Menu>
	);
};

export default BurgerMenu;
