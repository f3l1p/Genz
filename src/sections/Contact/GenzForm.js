import React from "react";
import { Formik } from "formik";
import { ButtonGeneral } from "../../components/ButtonGeneral/ButtonGeneral";

export const GenzForm = () => (
	<div>
		<Formik
			initialValues={{
				nombre: "",
				telefono: "",
				email: "",
				empresa: "",
				sector: "",
				consulta: "",
			}}
			validate={(values) => {
				let errors = {};
				if (!values.email) {
					errors.email = "Required";
				} else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				) {
					errors.email = "Invalid email address";
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert("Tu consulta se envió correctamente.");
					//alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
				/* and other goodies */
			}) => (
				<form className="form" onSubmit={handleSubmit}>
					<div className="inputContainer">
						<div className="col-l">
							<input
								type="text"
								name="nombre"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.nombre}
								placeholder="Nombre"
							/>
							{errors.nombre && touched.nombre && errors.nombre}
							<input
								type="text"
								name="telefono"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.telefono}
								placeholder="Tel."
							/>
							{errors.telefono && touched.telefono && errors.telefono}

							<input
								type="email"
								name="email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								placeholder="E-mail"
							/>
							{errors.email && touched.email && errors.email}

							<input
								type="text"
								name="empresa"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.empresa}
								placeholder="Empresa"
							/>
							{errors.empresa && touched.empresa && errors.empresa}

							<input
								type="text"
								name="sector"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.sector}
								placeholder="Sector"
							/>
							{errors.sector && touched.sector && errors.sector}
						</div>

						<div className="col-r">
							<textarea
								type="text"
								name="consulta"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.consulta}
								placeholder="Escribe tu consulta"
							/>
							{errors.consulta && touched.consulta && errors.consulta}
						</div>
					</div>
					<div className="button">
						<ButtonGeneral
							type="submit"
							disabled={isSubmitting}
							buttonName="Enviar"
							style={{ width: "110px", height: "63px", padding: "15px, 20px" }}
						/>
					</div>
				</form>
			)}
		</Formik>
	</div>
);
