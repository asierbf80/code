#alinear los numeros
import random
try:
    cuantos = int(input("Cuántos ficheros quieres? "))
    base = input("Cuál es el nombre base? ")

    for i in range (1, cuantos+1):
        file_name = "{0}_{1}.txt".format(base, i)
        fhand = open(file_name, "w")
        for j in range (1, random.randint(1, 10)):
            txt = "{0:>6.2f}\n".format(random.uniform(1, 200))
            fhand.write(txt)
        fhand.close()
except:
    print("Dato erróneo.")