aprobados = 0
suspendidos = 0
media = 0
veces = 0

while not "exit":
    nota = input("Introduce una nota o 'exit': ")
    
    if (nota == 'exit'):
        exit = True
        break
        
    else:
        nota = float(nota)
        if nota >= 5:
            aprobados += 1

        else:
            suspendidos += 1
    
    media += nota
    veces += 1
        
print("Aprobados: ")
print("Suspendidos: ")
print("Calificación media: {0:.2s}".format (media/veces))