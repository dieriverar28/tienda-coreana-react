import Form from 'react-bootstrap/Form';

// Un campo de formulario completo (etiqueta + input + mensaje de error).
// Se usa en Contacto, Login y Registro para no repetir el mismo bloque 15 veces.
// Si "error" trae texto, el input se marca en rojo y se muestra el mensaje.
function CampoFormulario({
  controlId,
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error
}) {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        isInvalid={!!error}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
}

export default CampoFormulario;
