import React from "react";
import Menu from "./Menu";
import Jumbotron from "./Jumbotron";
import Autobiography from "./Autobiography";

const Home = () => {
	return (
		<>		
			<h1>Header</h1>
			<Menu />
			<Jumbotron />
			<div className="text-center">            
				<h1 className="text-center mt-5">Hola Bienvenidos a React ⚛️</h1>
			</div>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellendus itaque sequi fugit praesentium soluta? Animi sint repudiandae officia magni optio, aperiam molestias suscipit in nulla aut vitae, reiciendis alias!</p>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, nihil blanditiis. Cumque amet minus hic quam id nisi error! Dignissimos sed, dolores recusandae cum, officiis obcaecati nobis, quisquam nisi adipisci minima quidem similique voluptate aut exercitationem delectus alias illum. Consectetur unde aperiam natus quia neque! Unde tempora aspernatur, fugit velit ex blanditiis cupiditate non laboriosam vitae vel voluptate, ipsum id? Unde dicta eaque ab vero corporis provident nisi placeat blanditiis est error similique nam aliquid omnis aperiam ratione impedit cum illum reprehenderit, odit odio totam voluptate doloribus cumque officiis? Provident, dolorem qui in fugit unde eius impedit reprehenderit tempore! Velit tempore architecto dignissimos dolorem asperiores quam nobis vel? Fugit error cupiditate alias tempore ex eum repudiandae vero ullam sit? Delectus sequi magnam nostrum, adipisci molestias accusamus ratione tempora, quod consectetur sunt quisquam excepturi voluptas molestiae dolore eveniet ullam aspernatur temporibus! Aperiam sed deserunt ducimus sequi voluptates perferendis repudiandae, quaerat iure ea dolores sint aliquam. Saepe deleniti sapiente quo, corrupti amet fugit cum autem veritatis dolorum possimus facilis explicabo quaerat minus officia a in maiores totam placeat? Cumque, sequi dolores. Excepturi saepe perferendis sapiente soluta iusto architecto quis voluptatem laborum reiciendis tempore obcaecati corrupti suscipit quos rerum, ullam vel dolor. Maiores?				
			</p>
			<p>me estas usando</p>
			<Autobiography />
			<h1>Footer</h1>
		</>
	);
};

export default Home;