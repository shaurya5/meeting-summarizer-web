const url = 'https://api.assemblyai.com/v2/transcript';
const audioUrl = localStorage.getItem("audio_url");
const API_KEY = '3079c839c24d413d80f911b2190b6de4'
const data = {
  "audio_url" : audioUrl
};

const params = {
  headers:{
      "authorization": API_KEY,
      "content-type": "application/json",
  },
  body: JSON.stringify(data),
  method: "POST"
};

let id;
fetch(url, params)
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    console.log('ID:', data['id']);
    localStorage.setItem("id", data['id']);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
