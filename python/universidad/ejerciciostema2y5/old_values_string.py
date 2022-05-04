#old_values_string
import pytest

def odd_values_string (s):
    resultado = ""
    for i in range (0, len(s)):
        if (i % 2 == 0):
            resultado = resultado + s[i]
    return resultado

@pytest.mark.parametrize("testcase, entrada, salida_esperada",[
(1, "", ""), 
(2, "a", "a"), 
(3, "aa", "a"), 
(4, "abcd", "ac"), 
(5, "abcde", "ace"),
(6, "12345", "135"), 
(7, "& %$(agt.34", "&%(g.4"), 
(8, "hola espacios", "hl sais"),
(9, "sargantana", "sratn")
])

def test_odd_values_string (testcase, entrada, salida_esperada):
    assert odd_values_string(entrada) == salida_esperada, "caso{0}".format(testcase)