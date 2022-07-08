import transcript
import mp3_converter

if __name__ == '__main__':
  mp3_converter.download_mp4_file()
  mp3_converter.convert_mp3()
  transcript.main()

