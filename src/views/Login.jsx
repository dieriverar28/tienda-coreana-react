import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import Seccion from '../components/Seccion';
import CampoFormulario from '../components/CampoFormulario';
import { validarCorreo } from '../utils/validaciones';

const datosVacios = { correo: '', clave: '' };

function Login() {

  const [datos, setDatos] = useState(datosVacios);
  const [errores, setErrores] = useState({});
  const [exito, setExito] = useState(false);

  const cambiar = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const enviar = (e) => {
    e.preventDefault();

    const nuevosErrores = {};
    if (!validarCorreo(datos.correo)) {
      nuevosErrores.correo = 'Ingresa un correo @gmail.com, @outlook.com o @duocuc.cl';
    }
    if (datos.clave === '') {
      nuevosErrores.clave = 'Ingresa tu contraseña.';
    }

    setErrores(nuevosErrores);
    setExito(Object.keys(nuevosErrores).length === 0);
  };

  const limpiar = (e) => {
    e.preventDefault();
    setDatos(datosVacios);
    setErrores({});
    setExito(false);
  };

  return (
    <main id="contenido">
      <Seccion titulo="Iniciar sesión">
        <p>Ingresa tus credenciales para acceder.</p>

        {exito && <Alert variant="success">Inicio de sesión correcto.</Alert>}

        <Form onSubmit={enviar} onReset={limpiar} noValidate>

          <CampoFormulario
            controlId="loginCorreo" label="Correo electrónico" name="correo" type="email"
            placeholder="nombre@duocuc.cl"
            value={datos.correo} onChange={cambiar} error={errores.correo}
          />

          <CampoFormulario
            controlId="loginClave" label="Contraseña" name="clave" type="password"
            placeholder="Ingresa tu contraseña"
            value={datos.clave} onChange={cambiar} error={errores.clave}
          />

          <Button type="submit" variant="pink" className="me-2">
            Iniciar sesión
          </Button>
          <Button type="reset" variant="pink">
            Limpiar
          </Button>

        </Form>

        <p className="mt-3">
          ¿No tienes cuenta? <Link to="/registro">Regístrate acá</Link>
        </p>
      </Seccion>
    </main>
  );
}

export default Login;
