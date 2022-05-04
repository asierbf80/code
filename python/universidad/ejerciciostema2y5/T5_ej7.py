#odd_values_string
def odd_values_string (s):
    resultado = ""
    for i in range (0, len(s)):
        if (i % 2 == 0):
            resultado = resultado + s[i]
    return resultado

#print(odd_values_string("hola espacios"))