from p4_ej3 import primo
num = input("Escribe un numero entero o 'fin' para terminar: ")
fin = False

while (not fin):
    try:
        if num == "fin":
            fin = True
        else:
            num = int(num)
            if primo(num) == True:
                print ("{0} es primo".format(num))
                num = int(input("Escribe un numero entero o 'fin' para terminar: "))
            else:
                print ("{0} no es primo".format(num))
                num = int(input("Escribe un numero entero o 'fin' para terminar: "))
                
    except ValueError:
        print ("Sólo numeros entero")
        num = input("Escribe un numero entero o 'fin' para terminar: ")

#sin int en num: < not str and int (funcion  primo)
#con int en num: value error