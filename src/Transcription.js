import { useEffect, useState } from "react";

function Transcription() {
  const [text, setText] = useState("");
  const API_KEY = "7a03ffe1e1aa4ef59d681091e3f4c042";
  const [id1, setId1] = useState("");

  useEffect(() => {
    async function upload() {
      try {
        const url = "https://api.assemblyai.com/v2/transcript";
        const audioUrl = localStorage.getItem("audio_url");
        const data = {
          audio_url: audioUrl,
        };

        const params = {
          headers: {
            authorization: API_KEY,
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
          method: "POST",
        };
        const fetchData = await fetch(url, params);
        const res = await fetchData.json();
        const idFetch = await res["id"];
        return idFetch;
      } catch (error) {
        console.log(error);
      }
    }
    const returnedId = upload()
      .then((id) => {
        setId1(id);
        localStorage.setItem("id", id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    async function download() {
      const id = localStorage.getItem("id");
      const url = `https://api.assemblyai.com/v2/transcript/${id}`;

      const params = {
        headers: {
          authorization: API_KEY,
          "content-type": "application/json",
        },
        method: "GET",
      };

      // function print(data) {
      //   switch (data.status) {
      //     case "queued":
      //     case "processing":
      //       console.log(
      //         "AssemblyAI is still transcribing your audio, please try again in a few minutes!"
      //       );
      //       break;
      //     case "completed":
      //       console.log(`Success: ${data}`);
      //       console.log(`Text: ${data.text}`);
      //       break;
      //     default:
      //       console.log(`Something went wrong :-( : ${data.status}`);
      //       break;
      //   }
      // }
      try {
        const data = await fetch(url, params);
        const res = await data.json();
        return res;
      } catch (error) {
        console.log(error);
      }
    }
    const result = download()
      .then((res) => {
        setText(res.text);
        console.log(res.text);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id1]);

  return (
    <div>
      {text && <p>{localStorage.getItem("text")}</p>}
      {/* {isLoading && <p>Loading...</p>} */}
    </div>
  );
}

export default Transcription;
