def fib(n):
    if (n >= 0) and (int(n)):
        lista = [1]
        for i in range (1, n+1):
            if len(lista) >= 2:
                lista.append(lista[i-1]+lista[i-2])
            else:
                lista.append(1)
        print(lista)
        
    else:
        print("Valores enteros y positivos.")