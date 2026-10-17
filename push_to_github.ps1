$git = "C:\Users\publisher\AppData\Local\GitHubDesktop\app-3.6.6\resources\app\git\cmd\git.exe"

Write-Host "Initializing Git repository..."
& $git init

Write-Host "Configuring remote..."
& $git remote remove origin 2>$null
& $git remote add origin "https://github.com/lolorefad-maker/TOPCAM.git"

Write-Host "Staging all files..."
& $git add .

Write-Host "Committing changes..."
& $git commit -m "Initial commit: TOP CAM Cinema & Photography Store and Admin Panel"

Write-Host "Setting main branch..."
& $git branch -M main

Write-Host "Pushing to GitHub..."
& $git push -u origin main
