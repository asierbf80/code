import pytest
def contraseña (contraseña):
    num = 0
    let = 0
    otros = 0
    for i in contraseña:
        if i.isdigit():
            num += 1
        elif i.isalpha():
            let += 1
        else:
            otros += 1
        
    if otros == 0:
        if (num == 0) and (let == 0):
            return "Contraseña no válida."
        elif (num < 8) and (let == 0):
            return "Contraseña muy débil."
        
        elif (let < 8) and (num == 0):
            return "Contraseña débil."
        
        elif (let != 0) and (num != 0) and (let+num >= 8):
            return "Contraseña segura."
        else:
            return "Contraseña normal."
    else:
        if (let != 0) and (num != 0) and (let+num+otros >= 8):
            return "Contraseña muy segura."
        else:
            return "Contraseña normal."

@pytest.mark.parametrize("testcase, entrada, salida",[
(1,"","Contraseña no válida."),
(2,"1234567","Contraseña muy débil."),
(3,"abcdefg","Contraseña débil."),
(4,"abcdefgh","Contraseña normal."),
(5,"rest4yrj","Contraseña segura."),
(6,"rest4","Contraseña normal."),
(7,"abdon56*_","Contraseña muy segura.")
])

def test_contraseña(testcase, entrada, salida):
    assert contraseña(entrada) == salida , "caso {0}".format (testcase)
