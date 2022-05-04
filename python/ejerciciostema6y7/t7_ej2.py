dic_ICAO = {
    'a':'alfa',
    'b':'bravo',
    'c':'charlie',
    'd':'delta',
    'e':'echo',
    'f':'foxtrot',
    'g':'golf',
    'h':'hotel',
    'i':'india',
    'j':'juliett',
    'k':'kilo',
    'l':'lima',
    'm':'mike',
    'n':'november',
    'o':'oscar',
    'p':'papa',
    'q':'quebec',
    'r':'romeo',
    's':'sierra',
    't':'tango',
    'u':'uniform',
    'v':'victor',
    'w':'whiskey',
    'x':'x-ray',
    'y':'yankee',
    'z':'zulu'
    }

def traduccion(texto):
    resultado = ""
    for ch in texto.lower():
        if ch == "":
            resultado = resultado[:-1] + ch
        else:
            resultado = (resultado + dic_ICAO[ch] + '-')
            
    return resultado[:-1]


