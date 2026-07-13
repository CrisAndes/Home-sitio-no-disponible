import React from 'react';

// Cuerpo central de la portada: mensaje de "sitio en desarrollo".
const EnDesarrollo = () => {
	return (
		<main className="min-h-[calc(100vh-58px)] lg:min-h-[calc(100vh-135px)] bg-white flex items-center justify-center px-6 py-16 overflow-hidden">
			<div className="max-w-2xl w-full text-center">
				{/* Ícono / marca superior */}
				<div className="inline-flex items-center gap-2 bg-[#FFF3D6] text-[#724100] font-semibold text-sm rounded-full px-4 py-1 mb-8">
					<span className="w-2 h-2 rounded-full bg-[#FFB71B] animate-pulse"></span>
					Estamos trabajando
				</div>

				{/* Título principal */}
				<h1 className="text-[#00205C] font-extrabold leading-tight text-4xl md:text-6xl mb-5">
					Muy pronto,
					<br />
					un nuevo sitio
				</h1>

				{/* Subtítulo */}
				<p className="text-[#2A2F37] text-base md:text-lg max-w-md mx-auto mb-10">
					Estamos construyendo una mejor experiencia para vos. Mientras tanto,
					seguí disfrutando de todos nuestros servicios en el sitio actual.
				</p>

				{/* Botón al sitio productivo */}
				<a
					href="https://andessalud.com.ar"
					className="inline-block bg-[#0F4F87] text-white font-semibold py-3 px-8 rounded-lg border-2 border-[#0F4F87] transition-all duration-300 hover:bg-white hover:text-[#0F4F87]"
				>
					Volver al Inicio
				</a>

				{/* Barra decorativa "en progreso" */}
				<div className="mt-14 max-w-xs mx-auto">
					<div className="h-2 w-full bg-[#FFF3D6] rounded-full overflow-hidden">
						<div className="h-full w-2/3 bg-[#FFB71B] rounded-full"></div>
					</div>
					<div className="text-[#8B99B2] text-xs mt-2">Sitio en desarrollo</div>
				</div>
			</div>
		</main>
	);
};

export default EnDesarrollo;
