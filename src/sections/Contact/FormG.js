import React, { useRef, useState } from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";
import { ButtonGeneral } from "../../components/ButtonGeneral/ButtonGeneral";
import { init } from "@emailjs/browser";

init();

export const FormG = () => {
	const [show, setShow] = useState({
		display: "none",
		msg: "",
	});
	const [templateParams, setTemplateParams] = useState({
		nombre: "",
		telefono: "",
		email: "",
		empresa: "",
		sector: "",
		consulta: "",
	});

	const onChangeHandler = (e) => {
		setTemplateParams({
			...templateParams,
			[e.target.name]: e.target.value,
		});
	};

	const form = useRef();

	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_USER_ID
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
			)
			.finally(() => {
				setTemplateParams({
					nombre: "",
					telefono: "",
					email: "",
					empresa: "",
					sector: "",
					consulta: "",
				});
			});
		e.target.reset();
	}

	return (
		<>
			<div
				style={{
					display: show.display,
				}}
				className="modal"
				onClick={() =>
					setShow({
						display: "none",
						msg: "",
					})
				}
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
			<form
				className="form"
				onSubmit={sendEmail}
				ref={form}
				onClick={() => setShow({ display: "none", msg: "" })}
			>
				<div className="inputContainer">
					<div className="col-l">
						<input
							type="text"
							name="nombre"
							placeholder="Nombre"
							required={true}
							onChange={onChangeHandler}
							value={templateParams.nombre}
						/>
						<input
							type="text"
							name="telefono"
							placeholder="Tel."
							required={true}
							onChange={onChangeHandler}
							value={templateParams.telefono}
						/>
						<input
							type="email"
							name="email"
							placeholder="E-mail"
							required={true}
							onChange={onChangeHandler}
							value={templateParams.email}
						/>

						<input
							type="text"
							name="empresa"
							required={true}
							placeholder="Empresa"
							onChange={onChangeHandler}
							value={templateParams.empresa}
						/>
						<input
							type="text"
							name="sector"
							required={true}
							placeholder="Sector"
							onChange={onChangeHandler}
							value={templateParams.sector}
						/>
					</div>

					<div className="col-r">
						<textarea
							type="text"
							name="consulta"
							placeholder="Escribe tu consulta"
							required={true}
							onChange={onChangeHandler}
							value={templateParams.consulta}
						/>
					</div>
				</div>
				<div className="button">
					<ButtonGeneral
						type="submit"
						buttonName="Enviar"
						disabled={
							!(
								templateParams.nombre &&
								templateParams.telefono &&
								templateParams.email &&
								templateParams.empresa &&
								templateParams.sector &&
								templateParams.consulta
							)
						}
					></ButtonGeneral>
				</div>
			</form>
		</>
	);
};
