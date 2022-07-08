import utils
API_KEY = '3079c839c24d413d80f911b2190b6de4'

def main():

    # Create header with authorization along with content-type
    header = {
        'authorization': API_KEY,
        'content-type': 'application/json'
    }
    audio_file = 'assets/audio.mp3'
    upload_url = utils.upload_file(audio_file, header)

    # Request a transcription
    transcript_response = utils.request_transcript(upload_url, header)

    # Create a polling endpoint that will let us check when the transcription is complete
    polling_endpoint = utils.make_polling_endpoint(transcript_response)

    # Wait until the transcription is complete
    utils.wait_for_completion(polling_endpoint, header)

    # Request the paragraphs of the transcript
    paragraphs = utils.get_paragraphs(polling_endpoint, header)

    # Save and print transcript
    with open('assets/transcript.txt', 'w') as f:
        for para in paragraphs:
            print(para['text'] + '\n')
            f.write(para['text'] + '\n')

    return

if __name__ == '__main__':
    main()