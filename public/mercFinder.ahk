; BMP images must be 16-bit or higher
#Requires AutoHotkey v2.0
CoordMode 'Pixel'

global image := 'mercenary.bmp'
global toggled := false

^F10:: {
  MsgBox image
 global toggled := !toggled
 while (toggled) {
  If FileExist(image) {
    if ImageSearch(&x, &y, 0, 0, A_ScreenWidth, A_ScreenHeight, image) {
      SoundBeep 750, 500
    }
  } else {
    MsgBox  "Image not found: " . image
  }
  }
  sleep 100
 }

