def factorial (n):
    try:
        if n == 0:
            resultado = 1
        
        else:
            resultado = 1
            for i in range (1, n+1):
                resultado = resultado*i
                
        print (resultado)

    except ValueError:
         return False