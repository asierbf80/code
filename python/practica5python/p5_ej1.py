# coding=utf-8
n = int(input("Numero de personas a almacenar: "))
c = 0
file_name = "fechas_{0}.txt".format(n)
fhand_filename = open(file_name, "w")

while (c < n):
    print("Dar los datos para persona {0}:".format(c+1))
    dia = int(input("Dia: "))
    mes = int(input("Mes: "))
    year = int(input("Año: "))
    nombre = str(input("Nombre: "))
    linea = "{0:02d} {1:02d} {2:04d} | {3:s}\n".format(dia, mes, year, nombre)
    fhand_filename.write(linea)

    c = c + 1

fhand_filename.close()
print("La lista de las {0} personas esta en el archivo {1}".format(n, file_name))
