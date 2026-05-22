@echo off
chcp 65001 >nul
title Movilidad Segura - Servidor de desarrollo
cd /d "%~dp0"

echo ============================================
echo    Proyecto Movilidad Segura
echo ============================================
echo.

REM Verifica que Node.js este instalado
where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js no esta instalado en este equipo.
  echo.
  echo   1. Descarga Node.js ^(version LTS^) desde: https://nodejs.org
  echo   2. Instalalo con las opciones por defecto.
  echo   3. Vuelve a abrir este archivo ^(iniciar.bat^).
  echo.
  pause
  exit /b 1
)

REM Instala dependencias solo la primera vez
if not exist "node_modules" (
  echo Instalando dependencias por primera vez...
  echo Esto puede tardar unos minutos, espera por favor.
  echo.
  call npm install
  if errorlevel 1 (
    echo.
    echo [ERROR] No se pudieron instalar las dependencias.
    pause
    exit /b 1
  )
  echo.
)

echo Iniciando el servidor de desarrollo...
echo El sitio se abrira solo en el navegador ^(http://localhost:5173^).
echo Para detenerlo: cierra esta ventana o presiona Ctrl+C.
echo.
call npm run dev -- --open
pause
