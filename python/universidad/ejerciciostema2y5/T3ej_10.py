#d1=int(input("Introduce un número entero: "))
#d2=int(input("Introduce otro número entero: "))
import pytest

def play_game (d1,d2):
    if d1<1 or d1>6:
        return("Error: dado 1 no está dentro del rango")

    elif d2<1 or d2>6:
        return("Error: dado 2 no está dentro del rango")
        
    else:
        #print("Ambos dados están dentro del rango")
        if d1==d2:
            return "Perdiste!"
        else:
            return "Ganaste!"
    
@pytest.mark.parametrize("testcase, d1, d2, salida_esperada", [
(1, 3, 2, "Ganaste!"),
(2, 0, 4, "Error: dado 1 no está dentro del rango"),
(3, 2, 2, "Perdiste!"),
(4, 4, 5, "Ganaste!"),
(5, 3, 8, "Error: dado 2 no está dentro del rango"),
(6, 4, 4, "Perdiste!")
])

def test_play_game(testcase, d1, d2, salida_esperada):
    assert play_game(d1,d2)==salida_esperada, "caso{0}".format (testcase)


