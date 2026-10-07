import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import Seccion from '../components/Seccion';
import CampoFormulario from '../components/CampoFormulario';
import {
  validarNombre,
  validarRut,
  validarCorreo,
  validarFono,
  esMayorDeEdad
} from '../utils/validaciones';

const datosVacios = {
  nombre: '',
  rut: '',
  correo: '',
  fono: '',
  fecnac: '',
  clave: '',
  confirmar: ''
};

function Registro() {

  const [datos, setDatos] = useState(datosVacios);
  const [errores, setErrores] = useState({});
  const [exito, setExito] = useState(false);

  const cambiar = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const enviar = (e) => {
    e.preventDefault();

    const nuevosErrores = {};
    if (!validarNombre(datos.nombre)) {
      nuevosErrores.nombre = 'El nombre solo debe contener letras.';
    }
    if (!validarRut(datos.rut)) {
      nuevosErrores.rut = 'El RUT debe incluir guion y dígito verificador (Ej: 12345678-K).';
    }
    if (!validarCorreo(datos.correo)) {
      nuevosErrores.correo = 'El correo solo permite dominios: @gmail.com, @outlook.com o @duocuc.cl';
    }
    if (!validarFono(datos.fono)) {
      nuevosErrores.fono = 'El teléfono debe comenzar con +56 y tener 9 dígitos más (Ej: +56912345678).';
    }
    if (!datos.fecnac) {
      nuevosErrores.fecnac = 'Por favor, seleccione su fecha de nacimiento.';
    } else if (!esMayorDeEdad(datos.fecnac)) {
      nuevosErrores.fecnac = 'Debes ser mayor de 18 años para crear una cuenta.';
    }
    if (datos.clave.length < 6) {
      nuevosErrores.clave = 'La contraseña debe tener al menos 6 caracteres.';
    }
    if (datos.confirmar !== datos.clave) {
      nuevosErrores.confirmar = 'Las contraseñas no coinciden.';
    }

    setErrores(nuevosErrores);

    const sinErrores = Object.keys(nuevosErrores).length === 0;
    setExito(sinErrores);
    if (sinErrores) setDatos(datosVacios);
  };

  const limpiar = (e) => {
    e.preventDefault();
    setDatos(datosVacios);
    setErrores({});
    setExito(false);
  };

  return (
    <main id="contenido">
      <Seccion titulo="Crear cuenta">
        <p>Regístrate para comprar en K-Skin.</p>

        {exito && <Alert variant="success">¡Cuenta creada con éxito!</Alert>}

        <Form onSubmit={enviar} onReset={limpiar} noValidate>

          <CampoFormulario
            controlId="regNombre" label="Nombre completo" name="nombre"
            placeholder="Ingresa tu nombre"
            value={datos.nombre} onChange={cambiar} error={errores.nombre}
          />

          <CampoFormulario
            controlId="regRut" label="RUT" name="rut"
            placeholder="12345678-9"
            value={datos.rut} onChange={cambiar} error={errores.rut}
          />

          <CampoFormulario
            controlId="regCorreo" label="Correo electrónico" name="correo" type="email"
            placeholder="nombre@duocuc.cl"
            value={datos.correo} onChange={cambiar} error={errores.correo}
          />

          <CampoFormulario
            controlId="regFono" label="Teléfono" name="fono"
            placeholder="+56912345678"
            value={datos.fono} onChange={cambiar} error={errores.fono}
          />

          <CampoFormulario
            controlId="regFecnac" label="Fecha de nacimiento" name="fecnac" type="date"
            value={datos.fecnac} onChange={cambiar} error={errores.fecnac}
          />

          <CampoFormulario
            controlId="regClave" label="Contraseña" name="clave" type="password"
            placeholder="Crea una contraseña"
            value={datos.clave} onChange={cambiar} error={errores.clave}
          />

          <CampoFormulario
            controlId="regConfirmar" label="Confirmar contraseña" name="confirmar" type="password"
            placeholder="Repite la contraseña"
            value={datos.confirmar} onChange={cambiar} error={errores.confirmar}
          />

          <Button type="submit" variant="pink" className="me-2">
            Crear cuenta
          </Button>
          <Button type="reset" variant="pink">
            Limpiar
          </Button>

        </Form>

        <p className="mt-3">
          ¿Ya tienes cuenta? <Link to="/login">Ingresa acá</Link>
        </p>
      </Seccion>
    </main>
  );
}

export default Registro;
