@echo off
cd /d "%~dp0"
if not exist "assets\01.png" (
  echo [AVISO] Coloque as fotos em assets\01.png ate assets\10.png
  pause
)
start "" "%~dp0index.html"
