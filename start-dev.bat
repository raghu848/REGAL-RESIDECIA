@echo off
echo 🚀 Starting Regal Residencia Development Environment...
echo =====================================================
echo.
echo This will start both the server and client applications.
echo.
echo 🖥️  Server will run on: http://localhost:5000
echo 💻 Client will run on: http://localhost:3000
echo.
echo Press any key to continue...
pause >nul

echo.
echo 🔄 Starting development environment...
echo.

npm run dev

echo.
echo 🛑 Development environment has stopped.
echo Press any key to exit...
pause >nul