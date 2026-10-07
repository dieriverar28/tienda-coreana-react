import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import Seccion from '../components/Seccion';
import CampoFormulario from '../components/CampoFormulario';
import productos from '../data/productos';
import {
  validarNombre,
  validarRut,
  validarCorreo,
  validarFono,
  esMayorDeEdad
} from '../utils/validaciones';

// Valores iniciales del formulario (también sirven para "Limpiar").
const datosVacios = {
  nombre: '',
  rut: '',
  correo: '',
  fono: '',
  fecnac: '',
  producto: '',
  cantidad: '1',
  pago: ''
};

// Es el validacion.js de antes, pero en vez de alert() devuelve un objeto
// con un mensaje por cada campo que esté mal.
function validar(datos) {
  const errores = {};

  if (!validarNombre(datos.nombre)) {
    errores.nombre = 'El nombre solo debe contener letras.';
  }
  if (!validarRut(datos.rut)) {
    errores.rut = 'El RUT debe incluir guion y dígito verificador (Ej: 12345678-K).';
  }
  if (!validarCorreo(datos.correo)) {
    errores.correo = 'El correo solo permite dominios: @gmail.com, @outlook.com o @duocuc.cl';
  }
  if (!validarFono(datos.fono)) {
    errores.fono = 'El teléfono debe comenzar con +56 y tener 9 dígitos más (Ej: +56912345678).';
  }
  if (!datos.fecnac) {
    errores.fecnac = 'Por favor, seleccione su fecha de nacimiento.';
  } else if (!esMayorDeEdad(datos.fecnac)) {
    errores.fecnac = 'Debes ser mayor de 18 años para realizar esta compra.';
  }
  if (datos.producto === '') {
    errores.producto = 'Debe seleccionar un producto del listado.';
  }
  if (Number(datos.cantidad) < 1 || Number(datos.cantidad) > 99) {
    errores.cantidad = 'La cantidad debe estar entre 1 y 99.';
  }
  if (datos.pago === '') {
    errores.pago = 'Seleccione una forma de pago (Débito, Crédito o Efectivo).';
  }

  return errores;
}

function Contacto() {

  // Un solo useState guarda todos los campos; "name" de cada input
  // coincide con la clave del objeto.
  const [datos, setDatos] = useState(datosVacios);
  const [errores, setErrores] = useState({});
  const [exito, setExito] = useState(false);

  const cambiar = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const enviar = (e) => {
    e.preventDefault(); // evita que el navegador recargue la página

    const nuevosErrores = validar(datos);
    setErrores(nuevosErrores);

    // Si el objeto no tiene claves, pasó todas las validaciones.
    if (Object.keys(nuevosErrores).length === 0) {
      setExito(true);
      setDatos(datosVacios);
    } else {
      setExito(false);
    }
  };

  const limpiar = (e) => {
    e.preventDefault();
    setDatos(datosVacios);
    setErrores({});
    setExito(false);
  };

  return (
    <main id="contenido">
      <Seccion titulo="Contacto y Compras">
        <p>Si tienes dudas o comentarios, puedes escribirnos:</p>

        {exito && (
          <Alert variant="success">
            ¡Validación correcta! Compra realizada con éxito.
          </Alert>
        )}

        <Form onSubmit={enviar} onReset={limpiar} noValidate>

          <CampoFormulario
            controlId="contNombre" label="Nombre" name="nombre"
            placeholder="Ingrese su nombre"
            value={datos.nombre} onChange={cambiar} error={errores.nombre}
          />

          <CampoFormulario
            controlId="contRut" label="RUT" name="rut"
            placeholder="Formato: 12345678-9"
            value={datos.rut} onChange={cambiar} error={errores.rut}
          />

          <CampoFormulario
            controlId="contCorreo" label="Correo" name="correo" type="email"
            placeholder="nombre@gmail.com"
            value={datos.correo} onChange={cambiar} error={errores.correo}
          />

          <CampoFormulario
            controlId="contFono" label="Teléfono" name="fono"
            placeholder="+56912345678"
            value={datos.fono} onChange={cambiar} error={errores.fono}
          />

          <CampoFormulario
            controlId="contFecnac" label="Fecha de nacimiento" name="fecnac" type="date"
            value={datos.fecnac} onChange={cambiar} error={errores.fecnac}
          />

          <Form.Group className="mb-3" controlId="contProducto">
            <Form.Label>Seleccione producto</Form.Label>
            <Form.Select
              name="producto"
              value={datos.producto}
              onChange={cambiar}
              isInvalid={!!errores.producto}
            >
              <option value="">--SELECCIONE PRODUCTO--</option>
              {/* Las opciones salen del mismo catálogo: si agregas un producto, aparece solo */}
              {productos.map((p) => (
                <option key={p.id} value={p.id}>{p.nombre}</option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errores.producto}</Form.Control.Feedback>
          </Form.Group>

          <CampoFormulario
            controlId="contCantidad" label="Cantidad" name="cantidad" type="number"
            value={datos.cantidad} onChange={cambiar} error={errores.cantidad}
          />

          <Form.Group className="mb-3">
            <Form.Label className="d-block">Forma de pago</Form.Label>
            {['Débito', 'Crédito', 'Efectivo'].map((forma) => (
              <Form.Check
                inline
                key={forma}
                type="radio"
                id={'pago-' + forma}
                name="pago"
                label={forma}
                value={forma}
                checked={datos.pago === forma}
                onChange={cambiar}
                isInvalid={!!errores.pago}
              />
            ))}
            {errores.pago && (
              <div className="text-danger small mt-1">{errores.pago}</div>
            )}
          </Form.Group>

          <Button type="submit" variant="pink" className="me-2">
            Comprar
          </Button>
          <Button type="reset" variant="pink">
            Limpiar
          </Button>

        </Form>
      </Seccion>
    </main>
  );
}

export default Contacto;
