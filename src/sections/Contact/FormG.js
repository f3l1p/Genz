import React, { useRef, useState } from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";
import { ButtonGeneral } from "../../components/ButtonGeneral/ButtonGeneral";
import { init } from "@emailjs/browser";

init("user_7Fio5qQa0vNXXK3fK52OR");

export const FormG = () => {
	const [show, setShow] = useState({
		display: "none",
		msg: "",
	});
	const form = useRef();

	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_ik5siqc",
				"template_8byzpdh",
				form.current,
				"user_7Fio5qQa0vNXXK3fK52OR"
			)
			.then(
				(result) => {
					console.log(result.text);
					setShow({
						display: "block",
						msg: "Tu consulta se envió correctamente.",
					});
				},
				(error) => {
					console.log(error.text);
					setShow({
						display: "block",
						msg: "Ups. parece que tuvimos un error. Por favor vuelve a tratar mas tarde.",
					});
				}
			);
		e.target.reset();
	}

	return (
		<>
			<div
				onClick={() => setShow({ display: "none", msg: "" })}
				style={{
					display: show.display,
					position: "relative",
					top: "50%",
					left: "25%",
					right: "-25%",
				}}
			>
				<h1
					style={{
						background: "black",
						color: "white",
						textAlign: "center",
						padding: "18px 28px",
						fontWeight: "bold",
						borderRadius: "10px",
						width: "fit-content",
					}}
				>
					{show.msg}
				</h1>
			</div>
			<form className="form" onSubmit={sendEmail} ref={form}>
				<div className="inputContainer">
					<div className="col-l">
						<input type="text" name="nombre" placeholder="Nombre" />

						<input type="text" name="telefono" placeholder="Tel." />

						<input
							type="email"
							name="email"
							placeholder="E-mail"
							required={true}
						/>

						<input type="text" name="empresa" placeholder="Empresa" />

						<input type="text" name="sector" placeholder="Sector" />
					</div>

					<div className="col-r">
						<textarea
							type="text"
							name="consulta"
							placeholder="Escribe tu consulta"
							required={true}
						/>
					</div>
				</div>
				<div className="button">
					<ButtonGeneral type="submit" buttonName="Enviar" />
				</div>
			</form>
		</>
	);
};
