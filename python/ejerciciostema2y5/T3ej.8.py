try:
    x1=float(input("Introduce el coordenando x del 1er punto: "))
    y1=float(input("Introduce el coordenando y del 1er punto: "))
    x2=float(input("Introduce el coordenando x del 2do punto: "))
    y2=float(input("Introduce el coordenando y del 2do punto: "))

    p1=(x1, y1)
    p2=(x2, y2)


    import math
    d1=math.sqrt(x1**2+y1**2)
    d2=math.sqrt(x2**2+y2**2)

    if d1 != d2:
        if d1>d2:
            print("El punto ", p2, "está más próximo al origen")
        else:
            print("El punto ", p1, "está más próximo al origen")
    else:
        print("La distancia al origen es igual para ambos puntos")
except:
    print("No has introducido el tipo correcto. Se necesitan floats")
    