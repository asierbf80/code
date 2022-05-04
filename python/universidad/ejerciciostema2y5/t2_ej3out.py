d=int(input("Introduce el día de tu cumpleaños: "))
m=int(input("Introduce el mes de tu cumpleaños: "))
y=int(input("Introduce el año de tu cumpleaños: "))

d1=d//10
d2=d%10
m1=d//10
m2=d%10
y1=y//1000
y2=(y%1000)//100
y3=((y%1000)%100)//10
y4=((y%1000)%100)%10

p1=(d1+d2)/10
p2=(m1+m2)/10
p3=(y1+y4)/10
p4=(y2+y3)/10

print("Tu PIN es: {0:.0f} {1:.0f} {2:.0f} {3:.0f}".format(p1, p2, p3, p4))
