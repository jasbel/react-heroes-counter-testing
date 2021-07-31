describe("Pruebas en el Counter app", () => {
  let wrapper= shallow(<CounterApp />);;

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  })

  test('debe de mostar couter app correctamente', ()=>{
    const wrapper = shallow(<CounterApp />);
    expect(wrapper).toMatchSnapshot();
  } )

  test('debe de mostar couter app correctamente', ()=>{
    const wrapper = shallow(<CounterApp value={100} />);
    
    const counterText = wrapper.find('h2').text().trim();
    
    expect(counterText).toBe('101')
  } )

  test("debe incremta el contador e 1", ()=>{
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('11')
  })
  test("debe incremta el contador e - 1", ()=>{
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('9')
  })
  test("debe resetear al valor por defecto del boton", ()=>{
    const wrapper = shallow(<CounterApp value={105} />);

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('105')
  })
})