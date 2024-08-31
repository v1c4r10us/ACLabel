import socket
import os

def main():
    ip_server='0.0.0.0'
    port=9005
    socket_server=socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    socket_server.bind((ip_server,port))
    socket_server.listen(0)
    while True:
        client, client_address = socket_server.accept()
        while True:
            mensaje=client.recv(1024).decode('utf-8')
            if not mensaje:
                break
            else:
                write_file(mensaje)

def write_file(mensaje):
    data=mensaje.replace('[','').replace(']','').replace('"','')
    os.system('echo "{0}" > /app/result/data.txt'.format(data))

if __name__=='__main__':
    main()
