suma = 0
cantidad = 0
fin = False

while (not fin):
    n=input("Introduce un número: ")
    if (n == "fin"):
        fin = True

    else:
        try:
            suma = suma + int(n)
            cantidad = cantidad + 1
        except:
            print("Entrada inválida.")

print(suma, cantidad, suma/cantidad)
