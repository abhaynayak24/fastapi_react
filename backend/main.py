from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from trie.trie import Trie

app = FastAPI()
trie = Trie()

origins = [
    "http://localhost",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/insert/{word}")
async def insert_word(word: str):
    trie.insert(word)
    return {"message": f"Added word '{word}' to trie."}

@app.get("/search/{word}")
async def search_word(word: str):
    result = trie.search(word)
    if result:
        return {"message": f"'{word}' found in trie."}
    else:
        raise HTTPException(status_code=404, detail=f"'{word}' not found in trie.")

@app.get("/startswith/{prefix}")
async def starts_with(prefix: str):
    result = trie.startsWith(prefix)
    if result:
        return {"message": f"Words with prefix '{prefix}' found in trie."}
    else:
        return {"message": f"No words found with prefix '{prefix}' in trie."}
