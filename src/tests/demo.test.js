/* Estruturacion  */
describe('Pruebas en el Archivo demo.test.js', () => {

    test('Deben de ser iguales son iguales los STRINGs', () => {

        // Inicializacion
        const mensaje = 'Hola mundo';

        // Estimulo
        const mensaje2 = `Hola mundo`;

        // Observar el comportamiento de
        expect(mensaje).toBe(mensaje2); // ===

    })
})