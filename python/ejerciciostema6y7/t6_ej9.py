import pytest

def check_tabla(n):
    nombre_fichero = "tabla-div-{0}.txt".format(n)
    try:
        filename = open(nombre_fichero, "r")
        filename.close()
        return True
        
    except FileNotFoundError:
        return False
    
@pytest.mark.parametrize("testcase, n, salida", [
(1, 1, False),
(2, 2, True),
(3, 5, False),
(4, 8, True)
])

def test_check_tabla(testcase, n, salida):
    assert check_tabla(n) == salida, "caso {0} ha fallado".format (testcase)

