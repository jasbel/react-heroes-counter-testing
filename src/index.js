
// const nombre = 'Asbel';
// const apellido = 'apaza';
// const nombreCompleto = `Nombre:  ${nombre}  ${apellido} `;

// function getSaludo(name) {
//     return 'hola ' + name;
// }

// const saludar = getSaludo(nombre);


// const person = {
//     name: 'Asbel',
//     lastname: 'Apaza',
//     edad: 45,
//     address: {
//         city: 'cercado',
//         lat: 14.5555,
//     }
// };

// const person2 = {...person};
// person2.name = 'Jhonatan';

// console.table( {person} );
// console.table( {person2} );

/* OBJESTOS LITERALES */
/* Arreglos */

// const arrays = [];
// /* push modifica el objeto principal */
// arrays.push(1)
// arrays.push(14)
// arrays.push(12)

// const arr2 = [1,14,12]

// let arr3 = [...arr2, 5];

// const arr4 = arr3.map((num)=> num * 2);

// console.log(arrays);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);


/* FUNCIONES */
// const saludar = ( name ) => (`hola ${name}`);

// console.log(saludar('sdaf'));
// console.log(saludar('resa'));


// const getUser = () => ({
//     uid: '1231dsa',
//     username: 'Pepito3',
// })

// console.log(getUser);

// const getUsuarioActivo = (username) => ({
//     uid: 'asdf21232',
//     username
// });

// console.log(getUsuarioActivo('Asbel9'));



/* DESESTRUCTURACION DE OBJETOS */
// const person = {
//     name: 'aeick',
//     edad: 45,
//     key: 'fds'
// };

// const { name } = person;

// console.log(name);

// const retornaPersona = ( { name, edad = 23 } ) => {
//     return {
//         nombreClave : name,
//         anios : edad,
//         latlng: {
//             lat: 123.3213,
//             lng: -13.344,
//         }
//     }
// }

// const { nombreClave, anios, latlng: { lat} } = retornaPersona( person );

// console.log(nombreClave, anios, lat);

/* DESESTRUCTURACION DE ARREGLOS */
// const onpiece = ['Lufy', 'sanji']

// const [ , st ] = onpiece;

// const retornaArreglo = () => {
//     return ['abc', 123];
// }

// const [base, numeros] = retornaArreglo();

// console.log( st );
// console.log( base, numeros );

// const usStater = ( valor ) => {
//     return [ valor, () => { console.log('Hola Mundo') } ];
// };

// const [ nombre, setNombre ] = usStater( 'Goku' );
// console.log( nombre );
// setNombre();

/* IMPORT Y EXPORT */
import { heroes } from './data/heroes'

const getHeroeById = (id) =>  heroes.find( (heroe)  => heroe.id === id  )

console.log( getHeroeById(2) );

// const getHeroesByOwner = ( owner ) => heroes.find( (heroe) =>  heroe.owner === owner);
const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) =>  heroe.owner === owner);

console.log( getHeroesByOwner('DC') );