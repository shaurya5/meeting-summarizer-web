import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function Input() {
  const [audioUpload, setAudioUpload] = useState(null);
  const audioListRef = ref(storage, "audios/");
  const [finalAudio, setFinalAudio] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleClick() {
    if (audioUpload === null) return;
    setIsLoading(true);
    const audioName = audioUpload.name + v4();
    localStorage.setItem("audio_name", audioName);
    const audioRef = ref(storage, `audios/${audioName}`);
    await uploadBytes(audioRef, audioUpload);
    await getAudioData();
    setIsLoading(false);
    alert("Audio uploaded successfully");
    navigate("/convert");
  }
  
  async function getAudioData() {
    await listAll(audioListRef).then((res) => {
      res.items.forEach((item) => {
        if (item._location.path_.includes(localStorage.getItem("audio_name"))) {
          getDownloadURL(item).then((url) => {
            setFinalAudio(url);
            localStorage.removeItem("audio_name");
            localStorage.setItem('audio_url', url);
          });
        }
      });
    });
  }

  return (
    <div className="App">
      <input
        type="file"
        onChange={(e) => {
          setAudioUpload(e.target.files[0]);
        }}
      />
      <button onClick={handleClick}>Upload</button>
      {isLoading && <div>Uploading...</div>}
      {finalAudio && <div>{finalAudio}</div>}
    </div>
  );
}

export default Input;
