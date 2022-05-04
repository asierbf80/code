import random
contador = 0

input("¡Vamos a jugar!")
n = int(input("Elige el nivel de dificulta (1/2/3): "))

if 1 <= n <= 3:
    if n == 1:
        x = random.randint(1,10)
        a = int (input("Adivina un numero del 1 al 10: "))
            while a != x:
                if a < x:
                    print("Tu numero es demasiado bajo")
                else:
                    print("Tu numero es demasiado alto")
                    
                    print("Intentalo de nuevo")
                 contador += 1
           
           print("¡¡Lo has adivinado!!")
           print("Con un total de ", contador "intentos")
        
        
        
        
