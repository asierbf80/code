def print_tabla(n):
    filename = "tabla-div-{0}.txt".format(n)
    
    try:
        filename = open(filename, "r")
        for line in filename:

            print(line.rstrip())
        
        filename.close()
    
    except FileNotFoundError:
        print("Prueba de nuevo, el fichero no existe.")