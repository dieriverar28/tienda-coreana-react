

import { describe, it,  expect } from 'vitest';

import CampoFormulario from './CampoFormulario';

describe('CampoFormulario', () => {
  it('Debe mostrar el mensaje de error cuando se pone otro nombre', () => {
  

    const inputNmbre=screen.getByLabelText('Nombre');
    fireEvent.change(inputNmbre, { target: { value: 'Pepito' } });
    expect(inputNmbre.value).toBe('Pepito');




});

  
});
