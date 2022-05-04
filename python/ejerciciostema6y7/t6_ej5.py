def anonimizar(nombre_fichero, s1, s2):
    try:
        fhand_interview = open(nombre_fichero, 'r')
        contenido = fhand_interview.read()
        fhand_interview.close()
        
        anonimized_contenido = contenido.replace(s1, s2)
        
        fhand_interview_anonimized = open("anonimized_"+nombre_fichero, 'w')
        fhand_interview_anonimized.write(anonimized_contenido)
        fhand_interview_anonimized.close()
        
        return "anonimized_"+nombre_fichero
        
    except FileNotFoundError:
        print("Fichero no existe")