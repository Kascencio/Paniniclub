#!/bin/bash

# Create backup directories
mkdir -p src/assets/images/slider/_backup
mkdir -p src/assets/images/menu/_backup

# Optimize Slider Images
echo "Optimizing Slider Images..."
for f in src/assets/images/slider/*.jpg; do
    [ -e "$f" ] || continue
    filename=$(basename -- "$f")
    name="${filename%.*}"
    
    # Move original to backup
    mv "$f" "src/assets/images/slider/_backup/$filename"
    
    # Convert from backup to new WebP in original location
    # scale=1920:-1 keeps aspect ratio, min ensures we don't upscale
    ffmpeg -v error -y -i "src/assets/images/slider/_backup/$filename" -c:v libwebp -q:v 75 -vf "scale='min(1920,iw)':-1" "src/assets/images/slider/$name.webp"
    echo "Converted $filename to $name.webp"
done

# Optimize Menu Images
echo "Optimizing Menu Images..."
for f in src/assets/images/menu/*.png; do
    [ -e "$f" ] || continue
    filename=$(basename -- "$f")
    name="${filename%.*}"
    
    # Move original to backup
    mv "$f" "src/assets/images/menu/_backup/$filename"
    
    # Convert from backup to new WebP in original location
    ffmpeg -v error -y -i "src/assets/images/menu/_backup/$filename" -c:v libwebp -q:v 75 -vf "scale='min(800,iw)':-1" "src/assets/images/menu/$name.webp"
    echo "Converted $filename to $name.webp"
done

echo "Optimization Complete."
