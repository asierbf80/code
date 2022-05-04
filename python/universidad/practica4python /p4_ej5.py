import pytest
def min_to_may(dato):

    #dato = input("Introduce un carácter: ")
    return(dato.upper())
    
@pytest.mark.parametrize("testcase, dato, salida_esperada",[
(1, "a", "A"),
(2, "s", "S"),
(3, "ñ", "Ñ"),
(4, "*", "*"),
(5, "@", "@"),
(6, "", "")
])
def test_min_to_may(testcase, dato, salida_esperada):
    assert min_to_may(dato) == salida_esperada; "caso{0} ha fallado".format(testcase)
