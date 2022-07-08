const id = localStorage.getItem("id");
const API_KEY = '3079c839c24d413d80f911b2190b6de4'
const url = `https://api.assemblyai.com/v2/transcript/${id}`;

const params = {
  headers: {
    "authorization": API_KEY,
    "content-type": "application/json",
  },
  method: 'GET'
};

function print(data) {
  switch (data.status) {
    case 'queued':
    case 'processing':
      console.log('AssemblyAI is still transcribing your audio, please try again in a few minutes!');
      break;
    case 'completed':
      console.log(`Success: ${data}`);
      console.log(`Text: ${data.text}`);
      break;
    default:
      console.log(`Something went wrong :-( : ${data.status}`);
      break;
  }
}

let transcript;
fetch(url, params)
  .then(response => response.json())
  .then(data => {
    print(data);
    transcript = data;
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });

export default function getTranscript() {
  return transcript;
}