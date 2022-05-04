#my_pow
def my_pow (x,n):
    resultado = 1
    veces = 0
    while (veces < n):
        resultado = resultado * x
        veces = veces + 1
    
    return resultado

print(my_pow(2,3))