#a=int(input("Introduce un número: "))
import pytest

def primo(x):
    if x<2:
        return "Error"

    for i in range (2, x):
        if x % i == 0:
            return "No es primo"

    return "Es primo"


@pytest.mark.parametrize("testcase, x, salida_esperada",[
(1, 238, "No es primo"),
(2, 0, "Error"),
(3, 41, "Es primo"),
(4, -48, "Error"),
])

def test_primo(testcase, x, salida_esperada):
    assert primo(x) == salida_esperada, "caso {0}".format (testcase)