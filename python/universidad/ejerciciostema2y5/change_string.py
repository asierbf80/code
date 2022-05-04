import pytest

def change_string(cad):
    if(len(cad) <= 1):
        return cad
    else:
        return (cad[-1:] + cad[1:-1] + cad[:1])

@pytest.mark.parametrize("testcase, entrada, salida_esperada",[
(1, "", ""),
(2, "z", "z"),
(3, "tanja", "aanjt"),
(4, "valencia", "aalenciv"),
(5, "12345", "52341"),
])

def test_change_string(testcase, entrada, salida_esperada):
    assert change_string(entrada) == salida_esperada, "caso {0}".format (testcase)