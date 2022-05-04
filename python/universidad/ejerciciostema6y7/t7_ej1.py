fhand = open("words.txt")
d={}
for line in fhand:
    for palabra in line.split():
        d[palabra] = True
        
fhand.close()

word = input("Qué palabra? ")
if (word in d):
    print("La palabra si que está.")
else:
    print("La palabra no está.")