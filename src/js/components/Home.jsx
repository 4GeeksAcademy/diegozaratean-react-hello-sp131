import React from "react";
import Menu from "./Menu";

const Home = () => {
	return (
		<>		
			<h1>Header</h1>
			<Menu />
			<div className="text-center">            
				<h1 className="text-center mt-5">Hola Bienvenidos a React ⚛️</h1>
			</div>
			<p>me estas usando</p>
			<h1>Footer</h1>
		</>
	);
};

export default Home;