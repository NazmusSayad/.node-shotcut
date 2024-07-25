@echo off
setlocal

REM Get the directory of the batch file
set "batchPath=%~dp0"
set "binPath=%batchPath%bin"

REM Add binPath to the user PATH variable
set "currentPath=%PATH%"
if "%currentPath%" neq "%currentPath:;%binPath%=%" (
    exit /b
)
setx PATH "%currentPath%;%binPath%"

endlocal
