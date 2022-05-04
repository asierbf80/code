#x=int(input("Introduce un numero entero: "))
#y=int(input("Introduce un numero entero: "))

import pytest

def play_game(x, y):
    if (x == 0) or (y == 0):
        return("El producto es 0")

    else:
        if (x < 0) and (y < 0):
            return("El producto es positivo")
            
        elif (x > 0) and (y > 0):
            return("El producto es positivo")
            
        else:
            return("El producto es negativo")

@pytest.mark.parametrize("testcase, x, y, salida_esperada" , [
(1, 0, -1, "El producto es 0"),
(2, 5, 0, "El producto es 0"),
(3, 0, 0, "El producto es 0"),
(4, 2, 7, "El producto es positivo"),
(5, -8, 3, "El producto es negativo"),
(6, 10, -6, "El producto es negativo"),
(7, -3, -4, "El producto es positivo")
])

def test_play_game(testcase, x, y, salida_esperada):
    assert play_game(x, y) == salida_esperada, "caso {0}".format (testcase)
    
    
    
    