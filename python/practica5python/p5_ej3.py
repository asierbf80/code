def buscar_fechas(fichero,dia="",mes="",año=""):
    try:
        fhand = open(fichero, "r")
        lista = []
        for line in fhand:
            if str(dia):
                if int(dia) != int(line[0:2]):
                    continue
            if str(mes):
                if int(mes) != int(line[3:5]):
                    continue
            if str(año):
                if int(año) != int(line[6:10]):
                    continue       
            lista.append(line[13:].rstrip())       
        fhand.close()
        
        for i in lista:
            print(i)
    
    except FileNotFoundError:
        print("El fichero no existe.")
    except ValueError:
        print("Dato erróneo.")
    except:
        print("Algo mal.")