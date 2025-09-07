from fastapi import FastAPI, UploadFile, File
import os
from fastapi import FastAPI, WebSocket
import base64

app = FastAPI()

@app.websocket("/ws/audio")
async def websocket_audio(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            audio_bytes = base64.b64decode(data)
            print("Received audio chunk:", len(audio_bytes))
            await websocket.send_text("Chunk received")
    except:
        await websocket.close()
# Ensure recordings folder exists
os.makedirs("recordings", exist_ok=True)

@app.post("/upload-audio")
async def upload_audio(file: UploadFile = File(...)):
    contents = await file.read()
    file_path = f"recordings/{file.filename}"
    with open(file_path, "wb") as f:
        f.write(contents)
    return {"status": "saved", "path": file_path}
