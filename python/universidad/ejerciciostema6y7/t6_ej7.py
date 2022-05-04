def tabla_div(n):
    try:
        file_name = "tabla-div-{0}.txt".format(n)
        fhand_filename = open(file_name, "w")

        for i in range (1, 11):
            linea = "{0} : {1} = {2}\n".format(n*i, n, i)
            fhand_filename.write(linea)
            
        fhand_filename.close()
        print("La tabla del {0} está en el archivo {1}".format(n, file_name))
        
    except FileNotFoundError: 
        print("Prueba de nuevo, el fichero no existe.")

