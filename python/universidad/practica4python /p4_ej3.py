import pytest

def primo(x):
    if x<2:
        return False

    for i in range (2, x):
        if x % i == 0:
            return False

    return True


@pytest.mark.parametrize("testcase, x, salida_esperada",[
(1, 238, False),
(2, 0, False),
(3, 41, True),
(4, -48, False),
])

def test_primo(testcase, x, salida_esperada):
    assert primo(x) == salida_esperada, "caso {0}".format (testcase)