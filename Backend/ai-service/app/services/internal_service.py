import os
from dotenv import load_dotenv
load_dotenv()
import asyncio
import httpx
from json import dumps

async def get_inventory(user_id:str):
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(
                url = os.getenv(f"INTERNAL_BASE_URL/user-inventory/{user_id}"),
                timeout=5.0
            )

            if response.status_code == 200:
                data = response.json()
                print(data)
                return dumps[data]
            
            return "Recipe API returned an error."
    except Exception as e:
        return f"Internal API unavailable: {str(e)}"
    