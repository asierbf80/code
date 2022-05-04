euros=int(input("Introduce una cantidad de dinero: "))

if euros >= 500:
    a= int(euros/500)
    print(a, "billete de 500")
else:
    print("0 billetes de 500")
    
b=euros%500

if b >= 200:
    c= int(b/200)
    print(c, "billete de 200")
else:
    print("0 billetes de 200")
    
d=b%200

if d >= 100:
    e = int(d/100)
    print(e, "billete de 100")
else:
    print("0 billetes de 100")

f=d%100

if f >= 50:
    g = int(f/50)
    print(g, "billete de 50")
else:
    print("0 billetes de 50")
    
h=f%50

if h>=20:
    i = int(h/20)
    print(i, "billete de 20")
else:
    print("0 billetes de 20")

j=h%20

if j>=10:
    k = int(j/10)
    print(k, "billete de 10")
else:
    print("0 billetes de 10")
    
l=j%10

if l>=5:
    m= int(l/5)
    print(m, "billete de 5")
else:
    print("0 billetes de 5")

n=l%5

if n>=2:
    o= int(n/2)
    print(o, "monedas de 2")
else:
    print("0 monedas de 2")
    
p=n%2

if p>=1:
    q= int(p/1)
    print(q, "monedas de 1")
else:
    print("0 monedas de 1")
    
    
