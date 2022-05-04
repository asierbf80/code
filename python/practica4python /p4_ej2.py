from p4_ej1 import es_digito
crt = input("Escribe un carácter o 'fin' para terminar: ")
fin = False

while (not fin):
    
    if crt == "fin":
        fin = True
        
    else:
        if es_digito(crt) == True: #no fa falta el true
            print ("{0} es un digito de 0 a 9".format(crt))
            crt = input("Escribe un carácter o 'fin' para terminar: ")
        else:
            print ("{0} no es un digito de 0 a 9".format(crt))
            crt = input("Escribe un carácter o 'fin' para terminar: ")
