import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string';

describe("segunda prueba", () => {
    test('Prueba en el metodo Saludo', () => {
        const nombre = 'Asbel';

        const saludo = getSaludo( nombre);

        expect(saludo).toBe('Hola ' + nombre);
    })
    
})