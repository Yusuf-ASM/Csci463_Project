import time

# Simulating a network communication
def send_data(data):
    print(f"Sending data: {data}")

def receive_data(data):
    print(f"Receiving data: {data}")

# Simulating a replay attack
def replay_attack(data):
    print("Performing replay attack…")
    send_data(data)
    time.sleep(2)  # Simulating delay in transmission
    receive_data(data)
    print("Replay attack successful!")

# Simulating legitimate network communication
def communicate(data):
    send_data(data)
    time.sleep(2)  # Simulating delay in transmission
    receive_data(data)

# Example usage
def main():
    data = "Secret message"

    print("Legitimate communication:")
    communicate(data)

    print("\nReplay attack:")
    replay_attack(data)

if __name__ == '__main__':
    main()