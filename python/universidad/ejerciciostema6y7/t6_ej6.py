import pytest

def en_fichero (nombre_fichero, s1):
    try:
        fhand = open(nombre_fichero)
        
        for line in fhand:
            if line.find(s1) == -1:
                return False
            else:
                return True
        
        fhand.close()
    
    except FileNotFoundError:
        print("Fichero no existe")

@pytest.mark.parametrize("testcase, nombre_fichero, s1, salida" , [
(1, "interview.txt", "Bill", True),
(2, "anonimized_interview.txt", "Bill", False),
(3, "saludos.txt", "adios", True),
(4, "anonimized_saludos.txt", "adios", False),
(5, "hola.txt", "hola", True),
(6, "anonimized_hola.txt","hola", False),
(7, "adios.txt","adios", True),
(8, "anonimized_adios.txt","adios", False)
])

def test_en_fichero(testcase, nombre_fichero, s1, salida):
    assert en_fichero(nombre_fichero, s1) == salida, "caso {0} ha fallado".format (testcase)
    
    
def anonimizar(nombre_fichero, s1, s2):
    try:
        fhand_interview = open(nombre_fichero, 'r')
        contenido = fhand_interview.read()
        fhand_interview.close()
        
        anonimized_contenido = contenido.replace(s1, s2)
        
        fhand_interview_anonimized = open("anonimized_"+nombre_fichero, 'w')
        fhand_interview_anonimized.write(anonimized_contenido)
        fhand_interview_anonimized.close()
        
        return "anonimized_"+nombre_fichero
        
    except FileNotFoundError:
        print("Fichero no existe")
        
@pytest.mark.parametrize("testcase, nombre_fichero, s1, s2" , [
(1, "interview.txt", "Bill", "Pepito"),
(2, "saludos.txt", "adios", "bye"),
(3, "hola.txt", "hola", "hi"),
(4, "adios.txt","adios", "chao"),
])

def test_anonimizar(testcase, nombre_fichero, s1, s2):
    anonimizado = anonimizar(nombre_fichero, s1, s2)
    assert en_fichero(anonimizado, s1) == False, "caso {0} ha fallado".format (testcase)