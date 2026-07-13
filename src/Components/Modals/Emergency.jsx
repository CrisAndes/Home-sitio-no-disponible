import React from 'react';
import Layout from './Layout';

const Emergency = ({ setOpen }) => {
	return (
		<Layout setOpen={setOpen}>
			<div className="max-w-[400px]">
				<div className="text-[#E52E2E] text-lg md:text-4xl font-bold mb-1">
					Urgencias y Emergencias
				</div>
				<div className="text-[#191B1E] text-sm mb-2 mt-1">
					En caso de emergencias, comunicate a los siguientes números:
				</div>
				<div className="emergency-item">
					<div className="emergency-title">Mendoza</div>
					<div className="emergency-number"> 0810-444-0911</div>
				</div>
				<div className="emergency-item">
					<div className="emergency-title">Mendoza / San Juan / Cordoba</div>
					<div className="emergency-number">0810-666-1449</div>
				</div>
				<div className="emergency-item">
					<div className="emergency-title">San Luis / Villa Mercedes</div>
					<div className="emergency-number">0810-666-1449</div>
				</div>
			</div>
		</Layout>
	);
};

export default Emergency;
