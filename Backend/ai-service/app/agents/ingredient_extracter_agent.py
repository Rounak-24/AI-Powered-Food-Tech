from agents.prompts import INGREDIENT_EXTRACTOR_AGENT_SYSTEM_PROMPT
from openai import AsyncOpenAI
from json import loads
# from dotenv import load_dotenv
# import asyncio
# load_dotenv()
import os


async def extract_ingredients(user_query:str):
    client = AsyncOpenAI(
        api_key = os.getenv("GEMINI_API_KEY"),
        base_url = os.getenv("GEMINI_BASE_URL")
    )

    response = await client.chat.completions.create(
        model = "gemini-3-flash-preview",
        messages = [
            {
                "role":"system",
                "content":INGREDIENT_EXTRACTOR_AGENT_SYSTEM_PROMPT
            },
            {
                "role":"user",
                "content":user_query
            }
        ]
    )

    try:
        parsed = loads(response.choices[0].message.content)
        return parsed["ingredients"]
    except:
        return []
    
