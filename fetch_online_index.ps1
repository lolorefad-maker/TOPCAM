$allOnlineProducts = @()

for ($p = 1; $p -le 5; $p++) {
    $outFile = "online_page_$p.json"
    $url = "https://thecamerastore.com/products.json?limit=250&page=$p"
    & curl.exe -s -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" -H "Accept: application/json" $url -o $outFile
    
    if (Test-Path $outFile) {
        try {
            $json = [System.IO.File]::ReadAllText($outFile, [System.Text.Encoding]::UTF8)
            $obj = $json | ConvertFrom-Json
            if ($obj.products) {
                $allOnlineProducts += $obj.products
                Write-Host "Page $p loaded: $($obj.products.Count) products"
            }
        } catch {
            Write-Host "Error parsing page $p"
        }
    }
    Start-Sleep -Milliseconds 500
}

Write-Host "Total online products indexed:" $allOnlineProducts.Count
$indexedJson = $allOnlineProducts | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText("online_catalog_indexed.json", $indexedJson, [System.Text.Encoding]::UTF8)
Write-Host "Saved online_catalog_indexed.json"
