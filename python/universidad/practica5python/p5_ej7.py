import pytest
def multiplos3(n):
    lista = []
    if n > 0:
        for i in range (1, n+1):
            if i % 3 == 0:
                lista.append(i)
        print(lista)
    else:
        print(lista)

@pytest.mark.parametrize("testcase, entrada, salida", [
(1, 10, [3, 6, 9]),
(2, 0, []),
(3, 1, []),
(4, -5, []),
(5, 12, [3, 6, 9, 12]),
(6, 3, [3])
])

def test_multiplos3(testcase, entrada, salida):
    assert multiplos3(entrada) == salida, "caso {0} ha fallado".format(testcase)
     


def divisores(n):
    lista = []
    if n > 0:
        for i in range (1, n+1):
            if n % i == 0:
                lista.append(i)
        print(lista)
    else:
        print(lista)
        
@pytest.mark.parametrize("testcase, entrada, salida", [
(1, 10, [1, 2, 5, 10]),
(2, 18, [1, 2, 3, 6, 9, 18]),
(3, 1, [1]),
(4, -5, []),
(5, 12, [1, 2, 3, 4, 6, 12]),
(6, 0, [])
])

def test_divisores(testcase, entrada, salida):
    assert divisores(entrada) == salida, "caso {0} ha fallado".format(testcase)