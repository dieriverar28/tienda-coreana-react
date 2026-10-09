//logo naranjo significa que es un archivo de testing para react

import { render, screen, fireEvent } from '@testing-library/react'; 
import { describe, it,  expect } from 'vitest';
import TarjetaProducto from './TarjetaProducto';
import imgSkin from '../assets/img/imagendetest.jpg';


describe('TarjetaProducto', () => {
  it('Debe cambiar el texto del boton a "Agregar"', () => {
  

    //1-  creamos producto de prueba fictisio que no esta en nuestra bd
    const productoMock = {
        imagen: imgSkin,
        nombre: 'Skin',
        descripcion: 'Productos varios.',
        precio: 10.000,
        categoria: 'skincare'
  };

    //2- ejecutamos/renderizamos el componente con el producto de prueba
    render(<TarjetaProducto producto={productoMock} />);

    
    const boton = screen.getByRole('button');

    
    fireEvent.click(boton);

    //3- verificamos que el texto del boton haya cambiado a "guardado"
    expect(boton.textContent).toContain('🌸 Agregar');

    //npm run test , para ejecutar test

});

});