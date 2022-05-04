# change_string
def change_string(cad):
    if(len(cad) <= 1):
        return cad
    else:
        return (cad[-1:] + cad[1:-1] + cad[:1])

# print (change_string("valencia"))

