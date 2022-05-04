def calcular_notas(nombre_fichero):
    try:
        fhand = open(nombre_fichero, "r")
        n_alumnos = 0
        n_aprobados = 0
        for line in fhand:
            n_alumnos += 1
            lista = line.split()
            nota = 0
            for i in lista[1:]:
                nota += float(i)
            if nota >= 5:
                n_aprobados += 1
            
        fhand.close()
        print("El número de aprobados es: {0}".format(n_aprobados))
        print("El número de alumnos es: {0}".format(n_alumnos))
        
    except FileNotFoundError:
        print("El fichero no existe")