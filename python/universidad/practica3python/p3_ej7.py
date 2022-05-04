contador = 0
pares = 0
impares = 0

while contador != 10:
    n = int(input("Introduce un numero: "))
    if n < 0:
        print("Solo números positivos")
    else:
        contador += 1
        if (n == 0):
            pares += n
        elif (n % 2 == 0):
            pares += n
            
        else:
            impares += n
            
print("Suma de los pares: ", pares)
print("Suma de los impares: ", impares)        
        
    
    