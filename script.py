from faker import Faker
import random
from datetime import datetime
fake = Faker()
list_pago = ["Tarjeta de débito", "Tarjeta de crédito", "Yape","Plin","PagoEfectivo"]
list_estado = ["pendiente", "procesando", "enviado","entregado"]
def llenar_pedido():
    contenido = ''
    fecha_inicio = datetime(2022, 1, 1)
    fecha_fin = datetime(2023, 12, 31)
    i = 1
    while i < 50 :
            fecha_aleatoria = fake.date_time_between(start_date=fecha_inicio, end_date=fecha_fin)
            fecha = fecha_aleatoria.strftime('%Y-%m-%d %H:%M:%S')
            estado = random.choice(list_estado)
            pago = random.randint(20,100)/1.0
            pagoId = random.randint(1,len(list_estado)-1)
            usuarioId = random.randint(1,5)
            tmp = f"'fecha': {fecha} , 'estado': '{estado}', 'pago': {pago}, 'pagoId': {pagoId}, 'usuarioId': {usuarioId}"
            contenido = contenido + tmp
            i = i+1
    with open('pedido.json', 'w', encoding='utf-8') as archivo:
        archivo.write(contenido)
llenar_pedido()