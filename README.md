# Meeting Summarizer App 
[Website](https://meeting-summarizer.netlify.app)
## Web App built using ReactJS for summarizing meetings
### PS-1 Project for Jio Platforms

## Project Description
- User can upload the audio file of meeting on homepage to get the transcription on `/convert` route
- Audio file is stored in Firebase cloud
- Used AssemblyAI for transcription

## Libraries and Services used
- `Firebase` for storing audio files in cloud
- `Axios` for making async API calls to transcription server
- `AssemblyAI` for handling transcription requests

## How the project works
- Go to the [website](https://meeting-summarizer.netlify.app) and upload a local audio using the upload button.
- On a successful upload, you will be alerted and redirected to the next page.
- Wait for the API to finish transcription. Once finished, the transcription will be displayed on the page.
- Copy this transcription and paste it in `Abstractive.ipynb` or `Extractive Summarization.ipynb` whichever is needed.
- The transcription has to be pasted in the `text` cell.
- Run all the cells and get the summary and required text analysis.
