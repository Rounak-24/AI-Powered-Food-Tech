from qdrant_client import QdrantClient
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_qdrant import QdrantVectorStore
import os
from dotenv import load_dotenv
load_dotenv()

gemini_embedding_model = GoogleGenerativeAIEmbeddings(
    api_key = os.getenv("GEMINI_API_KEY"),
    model = "models/gemini-embedding-001"
)

client = QdrantClient(
    url = os.getenv("QDRANT_URL"),
    api_key = os.getenv("QDRANT_API_KEY"),
)

vector_store = QdrantVectorStore(
    client = client,
    collection_name = os.getenv("QDRANT_COLLECTION_NAME"),
    embedding = gemini_embedding_model
)