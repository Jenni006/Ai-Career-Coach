from fastapi import FastAPI, UploadFile, File
import os

app = FastAPI()

# Ensure recordings folder exists
os.makedirs("recordings", exist_ok=True)

@app.post("/upload-audio")
async def upload_audio(file: UploadFile = File(...)):
    contents = await file.read()
    file_path = f"recordings/{file.filename}"
    with open(file_path, "wb") as f:
        f.write(contents)
    return {"status": "saved", "path": file_path}
