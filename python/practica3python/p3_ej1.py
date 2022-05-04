pan = int(input("Introduce el número de barras quiere comprar: "))
a = 3.49*pan
b = (pan*0.6)
c = a-b

print("El precio del pan es: ", "{:8.2f}".format (a), "€")
print("El descuento del 60% es: ", "{:8.2f}".format (b),"€")
print("El precio total es: ", "{:8.2f}".format (c), "€")

