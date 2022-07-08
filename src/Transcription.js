import { useState } from "react";

async function Transcription() {

  const [text, setText] = useState("")
  const API_KEY = "3079c839c24d413d80f911b2190b6de4";
  let url = "https://api.assemblyai.com/v2/transcript";
  let audioUrl = localStorage.getItem("audio_url");
  let data = {
    audio_url: audioUrl,
  };

  let params = {
    headers: {
      authorization: API_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
    method: "POST",
  };
  let id;
  try{
    const fetchData = await fetch(url, params)
    const res = await fetchData.json()
    const idFetch = await res['id']
    id = idFetch
  }catch(error){
    console.log(error)
  }
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log("Success:", data);
    //   console.log("ID:", data["id"]);
    //   id = data["id"];
    // })
    // .catch((error) => {
    //   console.error("Error:", error);
    // });

  url = `https://api.assemblyai.com/v2/transcript/${id}`;

  params = {
    headers: {
      authorization: API_KEY,
      "content-type": "application/json",
    },
    method: "GET",
  };

  function print(data) {
    switch (data.status) {
      case "queued":
      case "processing":
        console.log(
          "AssemblyAI is still transcribing your audio, please try again in a few minutes!"
        );
        break;
      case "completed":
        console.log(`Success: ${data}`);
        console.log(`Text: ${data.text}`);
        break;
      default:
        console.log(`Something went wrong :-( : ${data.status}`);
        break;
    }
  }

  fetch(url, params)
    .then((response) => response.json())
    .then((data) => {
      print(data);
      setText(data.text)
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });

  return <div>
    {text && <p>{text}</p>}
  </div>;
}

export default Transcription;
