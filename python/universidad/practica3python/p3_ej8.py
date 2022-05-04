contador = 0
negativos = 0
vecesn = 0
positivos = 0
vecesp = 0

while contador != 12:
    n = float(input("Introduce un numero real: "))
    contador += 1
    if n < 0:
        negativos += n
        vecesn += 1
    else:
        positivos  += n
        vecesp += 1
            
print("Media de los positivos: {0:.4f}".format (positivos/vecesp))
print("Media de los negativos: {0:.4f}".format (negativos/vecesn))



