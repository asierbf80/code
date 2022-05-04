def suma_resta(t):
    if (let(t) == 0):
        return 0
    
    resultado = t[0]
    signo = 1
    for i in range (1, len(t)):
        resultado = resultado + (signo * t[i])
        if signo == 1:
            signo == -1
        else:
            signo = 1