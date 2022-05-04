fichero = input("Introduce un nombre de fichero: ")

try:
    fhand = open(fichero)
    
    for line in fhand:
        print (line.upper())
        
    fhand.close()

except:
    print("El fichero no existe")