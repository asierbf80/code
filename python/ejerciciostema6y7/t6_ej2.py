fichero = input("Introduce un nombre de fichero: ")

try:
    count_XDSPAM = 0
    confidence = ""
    confidence_total = 0
    
    fhand = open(fichero)
    
    for line in fhand:
        if (line.startswith("X-DSPAM-Confidence:")):
            count_XDSPAM += 1
            confidence = ""

            for c in line:
                if (c.isdigit() or (c == ".")):
                    confidence += c
                    
            confidence_total = confidence_total + float(confidence)

    print ("Promedio de spam: ", (confidence_total/count_XDSPAM))
                    
    fhand.close()

except FileNotFoundError:
    print("El fichero no existe")