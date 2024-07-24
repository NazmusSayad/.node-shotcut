@echo off
setlocal
set "dir=%~dp0bin"
setx PATH "%PATH%;%dir%"
endlocal
