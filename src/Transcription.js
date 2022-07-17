import React, { useState, useEffect } from "react";
import axios from "axios";

function Transcription() {
  const [msg, setMsg] = useState("");
  const [transcript, setTranscript] = useState("");
  const API_KEY = "7a03ffe1e1aa4ef59d681091e3f4c042";

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const fetchTranscript = async () => {
      let audioUrl = localStorage.getItem("audio_url");
      while (audioUrl === null || audioUrl === undefined) {
        setMsg("Fetching uploaded audio's URL...")
        await sleep(3000);
        audioUrl = localStorage.getItem("audio_url");
      }
      const data = {
        audio_url: audioUrl,
      };

      const fetchData = await axios({
        method: "post",
        url: "https://api.assemblyai.com/v2/transcript",
        data,
        headers: {
          authorization: API_KEY,
          "content-type": "application/json",
        },
      });

      const idFetch = await fetchData.data.id;
      // setId(idFetch);

      let fetchData2 = await axios.get(
        `https://api.assemblyai.com/v2/transcript/${idFetch}`,
        {
          headers: {
            authorization: API_KEY,
            "content-type": "application/json",
          },
        }
      );

      while (
        fetchData2.data.status === "processing" ||
        fetchData2.data.status === "queued"
      ) {
        setMsg("Waiting for API...")
        fetchData2 = await axios.get(
          `https://api.assemblyai.com/v2/transcript/${idFetch}`,
          {
            headers: {
              authorization: API_KEY,
              "content-type": "application/json",
            },
          }
        );
        await sleep(5000);
      }
      if (fetchData2.data.status === "completed") {
        setMsg("Transcription successful")
        setTranscript(fetchData2.data.text);
        localStorage.removeItem('audio_url')
      } else {
        console.log("an error occured");
      }
    };
    fetchTranscript();
  }, []);

  return (
    <div>
      {msg && <div>{msg}</div>}
      {transcript && <div>{transcript}</div>}
    </div>
  );
}

export default Transcription;
