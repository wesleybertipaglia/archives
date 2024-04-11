import socket
from concurrent.futures import ThreadPoolExecutor
import os

class Server:
    def __init__(self, host, port, directory):
        self.host = host
        self.port = port
        self.directory = directory

    def listen(self):
        server_socket = socket.create_server((self.host, self.port), reuse_port=True)
        server_socket.listen()
        print(f"Server listening on {self.host}:{self.port} ")

        with ThreadPoolExecutor(max_workers=10) as executor:
            while True:
                client_socket, client_address = server_socket.accept()
                print(f"Connection established with {client_address}")
                
                executor.submit(self.handle_request, client_socket, client_address)

    def handle_request(self, client_socket, client_address):
        request_data = client_socket.recv(1024).decode("utf-8")
        request_lines = request_data.split("\r\n")
        request_info = request_lines[0]
        method, path, _ = request_info.split(" ")
        response_header = ""
        response_body = ""

        user_agent = self.get_user_agent(request_lines)

        if method == "GET" and path.startswith("/files/"):
            filename = path.split("/files/")[1]
            file_path = os.path.join(self.directory, filename)
            if os.path.exists(file_path):
                with open(file_path, "rb") as f:
                    response_body = f.read()
                response_header = self.get_response_headers(
                    "200 OK", "application/octet-stream", len(response_body)
                )
            else:
                response_body = "File not found."
                response_header = self.get_response_headers("404 Not Found", "text/plain", len(response_body))
        else:
            response_body = user_agent
            response_header = self.get_response_headers("404 Not Found", "text/html; charset=utf-8", len(response_body))

        client_socket.sendall(response_header.encode())
        client_socket.sendall(response_body)

        client_socket.close()
    
    @staticmethod
    def get_response_headers(status, content_type, content_length):
        return (
            f"HTTP/1.1 {status}\r\n"
            f"Content-Type: {content_type}\r\n"
            f"Content-Length: {content_length}\r\n"
            "\r\n"
        )

    @staticmethod
    def get_user_agent(request_lines):
        for line in request_lines:
            if line.startswith("User-Agent: "):
                return line.split(": ")[1]
        return "User-Agent not found"

def main():
    import argparse
    parser = argparse.ArgumentParser(description="Simple file server")
    parser.add_argument("--directory", required=True, help="Directory containing files")
    args = parser.parse_args()

    server = Server("localhost", 4221, args.directory)
    server.listen()

if __name__ == "__main__":
    main()
