m = int(input("Introduce un número: "))
n = int(input("Introduce un número: "))

sumatorio=0
for i in range (m,n+1):
    sumatorio += i

print("La suma de",m,"hasta",n,"es: ", sumatorio)