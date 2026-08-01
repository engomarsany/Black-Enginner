# Auto GitHub Sync & Daily Contribution Automation Script
# Repository: https://github.com/engomarsany/Black-Enginner.git

$RepoPath = "C:\Users\user\.gemini\antigravity\scratch\service-platform"
Set-Location $RepoPath

# Ensure Git Credentials match GitHub Account
git config user.name "engomarsany"
git config user.email "engomarsany@users.noreply.github.com"

# Check status
$status = git status --porcelain

if ($status) {
    Write-Host "[AUTOSYNC] Uncommitted changes detected. Syncing with GitHub..." -ForegroundColor Cyan
    git add .
    git commit -m "Auto sync update: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    git push origin main
    Write-Host "[AUTOSYNC] Pushed successfully to GitHub! Contribution graph updated!" -ForegroundColor Green
} else {
    Write-Host "[AUTOSYNC] Repository up to date. Logging daily heartbeat commit..." -ForegroundColor Yellow
    Add-Content -Path "$RepoPath\SYSTEM_TELEMETRY.log" -Value "Heartbeat sync: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    git add SYSTEM_TELEMETRY.log
    git commit -m "Daily automated contribution heartbeat: $(Get-Date -Format 'yyyy-MM-dd')"
    git push origin main
    Write-Host "[AUTOSYNC] Daily contribution green square logged successfully!" -ForegroundColor Green
}
