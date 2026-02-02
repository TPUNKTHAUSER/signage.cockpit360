#!/bin/bash
# Deploy script for signage.cockpit360.de

set -e

# Load environment variables
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

echo "Building Next.js..."
npm run build

echo "Deploying to FTP..."

# Upload all files from out/ to server
cd out
find . -type f | while read file; do
    dir=$(dirname "$file")
    if [ "$dir" != "." ]; then
        curl --ftp-create-dirs -T "$file" "ftp://${FTP_HOST}${FTP_PATH}/${file}" --user "${FTP_USER}:${FTP_PASS}" -s
    else
        curl -T "$file" "ftp://${FTP_HOST}${FTP_PATH}/${file}" --user "${FTP_USER}:${FTP_PASS}" -s
    fi
    echo "  Uploaded: $file"
done

echo "Deploy complete!"
