$unadded = [System.IO.File]::ReadAllText("C:\Users\publisher\.gemini\antigravity\scratch\camera-store\unadded_to_process.json", [System.Text.Encoding]::UTF8) | ConvertFrom-Json

Write-Host "Total unadded:" $unadded.Count
$unadded | Group-Object category | ForEach-Object {
    Write-Host "$($_.Name): $($_.Count)"
}
