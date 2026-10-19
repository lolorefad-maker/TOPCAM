$path = "C:\Users\publisher\.gemini\antigravity\brain\0cc65142-6af2-4552-91d5-256b52dd5901\.system_generated\logs\transcript.jsonl"
$lines = [System.IO.File]::ReadAllLines($path, [System.Text.Encoding]::UTF8)
foreach ($line in $lines) {
    if ($line -match '"type":\s*"USER_INPUT"') {
        if ($line -match 'excel|\.xls') {
            Write-Host $line
        }
    }
}
