$content = [System.IO.File]::ReadAllText("js\data.js", [System.Text.Encoding]::UTF8)

# Extract INITIAL_PRODUCTS JSON
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

$hasWarranty = 0
$has2Years = 0

for ($i=0; $i -lt $products.Count; $i++) {
    $p = $products[$i]
    $d = $p.description
    if ($d -match "سنتين|سنتان|2 years|2-year|كفالة") {
        Write-Host "Product $($p.id) ($($p.name)) description has warranty: $d"
        $hasWarranty++
    }
    if ($p.specs) {
        $props = $p.specs.PSObject.Properties
        foreach ($prop in $props) {
            if ($prop.Value -match "سنتين|سنتان|2 years|2-year") {
                Write-Host "Product $($p.id) spec $($prop.Name) has 2-years: $($prop.Value)"
                $has2Years++
            }
        }
    }
}

Write-Host "Summary: HasWarranty in desc = $hasWarranty, Has2Years in specs = $has2Years"

Write-Host "--- FIRST 10 PRODUCTS DESCRIPTIONS ---"
for ($i=0; $i -lt [math]::Min(10, $products.Count); $i++) {
    $p = $products[$i]
    Write-Host "[$($p.id)] $($p.name): $($p.description)"
}
