$all485 = [System.IO.File]::ReadAllText("C:\Users\publisher\.gemini\antigravity\scratch\camera-store\catalog_485_raw.json", [System.Text.Encoding]::UTF8) | ConvertFrom-Json
$current = [System.IO.File]::ReadAllText("C:\Users\publisher\.gemini\antigravity\scratch\camera-store\js\data.js", [System.Text.Encoding]::UTF8)
$marker = "const INITIAL_PRODUCTS = "
$idx = $current.IndexOf($marker)
$sub = $current.Substring($idx + $marker.Length)
$endIdx = $sub.IndexOf("];")
$currentProducts = $sub.Substring(0, $endIdx + 1).Trim() | ConvertFrom-Json

$existingIds = New-Object System.Collections.Generic.HashSet[string]
$existingNames = New-Object System.Collections.Generic.HashSet[string]
foreach ($p in $currentProducts) {
    if ($p.id) { [void]$existingIds.Add($p.id.Trim().ToLower()) }
    if ($p.name) { [void]$existingNames.Add($p.name.Trim().ToLower()) }
}

$unadded = @()
foreach ($p in $all485) {
    $id = if ($p.id) { $p.id.Trim().ToLower() } else { "" }
    $n = if ($p.name) { $p.name.Trim().ToLower() } else { "" }
    if (-not $existingIds.Contains($id) -and -not $existingNames.Contains($n)) {
        $unadded += $p
    }
}

Write-Host "Total current in data.js:" $currentProducts.Count
Write-Host "Unadded available:" $unadded.Count

# Save unadded items to json for processing
$unaddedJson = $unadded | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText("C:\Users\publisher\.gemini\antigravity\scratch\camera-store\unadded_to_process.json", $unaddedJson, [System.Text.Encoding]::UTF8)
Write-Host "Saved unadded_to_process.json"
