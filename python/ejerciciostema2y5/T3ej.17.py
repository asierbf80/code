p1=int(input("Introduce el primer valor: "))
p2=int(input("Introduce el segundo valor: "))
p3=int(input("Introduce el tercer valor: "))
p4=int(input("Introduce el cuarto valor: "))

if p4 > p3:
    t=p3
    p3=p4
    p4=t

if p3 > p2:
    t=p2
    p2=p3
    p3=t
    if p4 > p3:
        t=p3
        p3=p4
        p4=t

if p2 > p1:
    t=p1
    p1=p2
    p2=t
    if p3 > p2:
        t=p2
        p2=p3
        p3=t
        if p4 > p3:
            t=p3
            p3=p4
            p4=t

print (p1, p2, p3, p4)