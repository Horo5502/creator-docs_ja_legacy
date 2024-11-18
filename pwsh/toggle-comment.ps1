param (
    [switch]$pickup
)

# Specify the file path
$filePath = "docusaurus.config.ts"

# Read the content of the file
$content = Get-Content -Path $filePath

# Function to toggle comments
function ToggleComment {
    param (
        [string]$line
    )

    if ($pickup) {
        if ($line -match '^\s*//\s*path: [''"]docs_all[''"],?') {
            # Uncomment the line
            return $line -replace '^\s*//\s*', ''
        } elseif ($line -match '^\s*path: [''"]\.docs[''"],?') {
            # Comment out the line
            return "// $line"
        } else {
            return $line
        }
    } else {
        if ($line -match '^\s*//\s*path: [''"]\.docs[''"],?') {
            # Uncomment the line
            return $line -replace '^\s*//\s*', ''
        } elseif ($line -match '^\s*path: [''"]docs_all[''"],?') {
            # Comment out the line
            return "// $line"
        } else {
            return $line
        }
    }
}

# Toggle comments for each line
$newContent = $content | ForEach-Object { ToggleComment $_ }

# Write the content back to the file
$newContent | Set-Content -Path $filePath

Write-Host "Comment toggling is complete."