edad = int(input("Introduce tu edad: "))
if edad <= 2:
    print("Esta edad pertenece al periodo de lactancia")
elif 2 < edad <= 12:
    print("Esta edad pertenece a la infancia")
elif 12 < edad <= 20:
    print ("Esta edad pertenece a la adolescencia")
elif 20 < edad <= 40:
    print("Esta edad pertenece a la adultez inicial")
elif 40 < edad <= 60:
    print("Esta edad pertenece a la adultez madura")
else:
    print ("Esta edad pertenece a la vejez")