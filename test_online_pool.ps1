[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$sources = @(
    "https://thecamerastore.com/products.json?limit=250&page=1",
    "https://thecamerastore.com/products.json?limit=250&page=2",
    "https://thecamerastore.com/products.json?limit=250&page=3",
    "https://feelworld.ltd/products.json?limit=250",
    "https://ulanzi.com/products.json?limit=250"
)

$wc = New-Object System.Net.WebClient
$wc.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")

$totalFetched = 0
foreach ($url in $sources) {
    try {
        $json = $wc.DownloadString($url)
        $obj = $json | ConvertFrom-Json
        $count = $obj.products.Count
        $totalFetched += $count
        Write-Host "Fetched $count products from $url"
    } catch {
        Write-Host "Failed to fetch from $url : $($_.Exception.Message)"
    }
}

Write-Host "Total products fetched from online stores:" $totalFetched
