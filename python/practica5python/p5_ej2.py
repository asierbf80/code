fichero = input("Introduce un nombre de fichero: ")
c = 0
try: 
    fhand = open(fichero)
    for line in fhand:
        if (int(line[3:5]) == 5):
            c = c+1  
    print("Nacidos en mayo: {0}".format(c))   
    
    fhand.close()
        
except FileNotFoundError:
    print("El fichero no existe")
