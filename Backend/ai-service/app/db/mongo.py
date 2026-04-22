import os
from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URL = os.getenv("MONGO_URI")
mongo_client = AsyncIOMotorClient(MONGO_URL)
db = mongo_client.get_database()

print("connected to mongoDB")