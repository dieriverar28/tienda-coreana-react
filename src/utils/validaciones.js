// Validaciones migradas desde js/validacion.js (proyecto HTML).
// Son funciones simples: reciben un texto y devuelven true/false.
// Así Contacto y Registro usan las mismas reglas sin repetir código.

// Solo letras (con tildes y ñ) y espacios.
export const validarNombre = (valor) =>
  valor.trim() !== '' && /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/.test(valor.trim());

// RUT chileno: 7 u 8 números, guion y dígito verificador (número o K).
export const validarRut = (valor) => /^\d{7,8}-[0-9kK]$/.test(valor.trim());

// Solo se aceptan correos @gmail.com, @outlook.com o @duocuc.cl
export const validarCorreo = (valor) =>
  /^[\w.-]+@(gmail\.com|outlook\.com|duocuc\.cl)$/i.test(valor.trim());

// Teléfono chileno: +56 seguido de exactamente 9 dígitos.
export const validarFono = (valor) => /^\+56\d{9}$/.test(valor.trim());

// Mayor de 18 años. La fecha llega como 'AAAA-MM-DD' (input type="date").
// Se separa el texto a mano (en vez de new Date(texto)) para evitar
// que la zona horaria corra el día en uno.
export const esMayorDeEdad = (fecha) => {
  if (!fecha) return false;

  const [anio, mes, dia] = fecha.split('-').map(Number);
  const hoy = new Date();

  let edad = hoy.getFullYear() - anio;

  // Si todavía no cumple años este año, se resta 1.
  const aunNoCumple =
    hoy.getMonth() + 1 < mes ||
    (hoy.getMonth() + 1 === mes && hoy.getDate() < dia);
  if (aunNoCumple) edad--;

  return edad >= 18;
};
