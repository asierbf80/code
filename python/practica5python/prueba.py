def es_narcisista(x):
    contador = 0
    lista = []
    n = len(str(x))
    nx = str(x)
    for i in (0, len(nx)):
        contador += i**n
        
    if contador == x:
        return True
    else:
        return False