import os
from pytube import YouTube
from moviepy.editor import *

def download_mp4_file():
  path = 'assets/'
  print('Paste YT video link here: ')
  yt_link = input()
  print('Started converting video to audio...')
  yt = YouTube(yt_link)
  yt = yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first()
  if not os.path.exists(path):
    os.makedirs(path)
  yt.download(path, filename='video.mp4')
  print('Done converting.')
  
def convert_mp3():
  mp4_file = 'assets/video.mp4'
  mp3_file = 'assets/audio.mp3' # to be created

  video_clip = VideoFileClip(mp4_file)
  audio_clip = video_clip.audio

  audio_clip.write_audiofile(mp3_file)
  
  audio_clip.close()
  video_clip.close()

if __name__ == '__main__':
  download_mp4_file()
  convert_mp3()