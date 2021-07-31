const { render } = require("@testing-library/react");

describe("pruebsa en <RP", () => {
    test("debe de mostrar el mensaje Lhol, soy goku", () => {
        const saludo = "hola, sou goku";
        const { getByText } = render(<PrimeraApp saludo={saludo} />);

        expect(getByText(saludo)).toBeInTheDocument();
    });
});
