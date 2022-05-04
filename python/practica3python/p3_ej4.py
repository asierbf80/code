N= int(input("Introduce un numero: "))


if N>0:
    for i in range (1, N+1):
        if i % 7== 0 and i % 3 != 0:
            print(i, end = " ")
else:
    for i in range (N, 0):
        if i % 7 == 0 and i % 3 != 0:
            print(i, end = " ")


#ejercicio 5


            