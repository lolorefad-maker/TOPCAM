$content = [System.IO.File]::ReadAllText("C:\Users\publisher\.gemini\antigravity\scratch\camera-store\js\data.js", [System.Text.Encoding]::UTF8)
$marker = "const INITIAL_PRODUCTS = "
$idx = $content.IndexOf($marker)
$sub = $content.Substring($idx + $marker.Length)
$endIdx = $sub.IndexOf("];")
$currentProducts = $sub.Substring(0, $endIdx + 1).Trim() | ConvertFrom-Json

$suspicious = @()
foreach ($p in $currentProducts) {
    $desc = $p.description
    if (-not $desc -or $desc.Length -lt 25 -or $desc -match 'سنتين' -or $desc -match 'وصف عشوائي' -or $desc -match 'test') {
        $suspicious += $p
    }
}

Write-Host "Total products in data.js:" $currentProducts.Count
Write-Host "Suspicious or short descriptions:" $suspicious.Count
foreach ($s in $suspicious) {
    Write-Host "$($s.id) | $($s.name) | $($s.description)"
}
