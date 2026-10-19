$content = [System.IO.File]::ReadAllText("js\data.js", [System.Text.Encoding]::UTF8)

$prodMarker = "const INITIAL_PRODUCTS = "
$prodStart = $content.IndexOf($prodMarker)
$endMarker = "if (typeof module !== 'undefined'"
$prodEnd = $content.IndexOf($endMarker, $prodStart)

$productsJson = $content.Substring($prodStart + $prodMarker.Length, $prodEnd - ($prodStart + $prodMarker.Length)).Trim().TrimEnd(';')
$cleanLines = @()
foreach ($line in ($productsJson -split "`r?`n")) {
    $t = $line.Trim()
    if (-not $t.StartsWith("//")) {
        $cleanLines += $line
    }
}
$products = ConvertFrom-Json ($cleanLines -join "`n")

Write-Host "Total products in current catalog: $($products.Count)"

$outLines = @()
for ($i=0; $i -lt $products.Count; $i++) {
    $p = $products[$i]
    $outLines += "ID: $($p.id) | Name: $($p.name)"
    $outLines += "Desc: $($p.description)"
    if ($p.specs) {
        $props = $p.specs.PSObject.Properties
        foreach ($prop in $props) {
            $outLines += "  Spec: $($prop.Name) = $($prop.Value)"
        }
    }
    $outLines += "----------------------------------------"
}

[System.IO.File]::WriteAllLines("products_dump.txt", $outLines, [System.Text.Encoding]::UTF8)
Write-Host "Written products_dump.txt successfully."
