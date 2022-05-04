import pytest
import math

def my_pow (x,n):
    
    return (x**n)

@pytest.mark.parametrize("testcase, x, n, salida_esperada", [
(1, 2, 0, math.pow (2,0)),
(2, 0, 0, math.pow (0, 0)),
(3, 0, 3, math.pow (0, 3)),
(4, 5, 10, math.pow (5, 10)),
(5, -5, 6, math.pow (-5, 6)),
])

def test_my_pow(testcase, x, n, salida_esperada):
    assert my_pow (x, n) == salida_esperada, "caso {0}".format (testcase)