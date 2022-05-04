total=int(input("Introduce el precio total de la compra: "))
if total < 500:
    print("El coste de la compra es ", total)
elif 500 <= total <= 2000:
    print ("El coste de la compra es ", total*0.3)
elif total > 2000:
    print ("El coste de la compra es ", total*0.5)