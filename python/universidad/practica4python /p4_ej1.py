import pytest
def es_digito(num):
    try:
        if (len(num)== 1) and ("0" <= num <= "9"):
            return True
        else:
            return False
    except:
        return False
    
@pytest.mark.parametrize("testcase, entrada, salida_esperada",[
(1, "0", True),
(2, "8", True),
(3, "10", False),
(4, "-2", False),
(5, "m", False),
])

def test_es_digito(testcase, entrada, salida_esperada):
    assert es_digito(entrada)==salida_esperada, "caso {0} ha fallado".format(testcase)