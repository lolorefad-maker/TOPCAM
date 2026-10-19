$files = Get-ChildItem -Path "images" | Where-Object { $_.Name -like "prod_len_*" }
foreach ($f in $files) {
    Write-Host "$($f.Name) : $($f.Length) bytes"
}
