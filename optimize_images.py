#!/usr/bin/env python3
"""
Optimize and resize airline images for FLY748 gallery
- Resize to 1200x1200px (square with letterboxing)
- JPG quality: 85%
- Keep under 500KB
"""

from PIL import Image
import os
from pathlib import Path

# Source folder with original images
SOURCE_FOLDER = r"C:\Users\KELLY\Desktop\New folder (2)"
# Destination folder
DEST_FOLDER = r"C:\Users\KELLY\fly748-booking\public\gallery"

# Target image names for gallery (12 images needed)
TARGET_NAMES = [
    "team-ground-1.jpg",
    "team-aircraft-1.jpg",
    "team-cabin-crew.jpg",
    "aircraft-exterior-1.jpg",
    "aircraft-exterior-2.jpg",
    "aircraft-ground-team.jpg",
    "cabin-interior-1.jpg",
    "cabin-interior-2.jpg",
    "cabin-interior-3.jpg",
    "aircraft-maintenance.jpg",
    "services-vehicle.jpg",
    "corporate-event.jpg",
]

# Create destination folder if it doesn't exist
os.makedirs(DEST_FOLDER, exist_ok=True)

# Get all JPG files from source
source_files = sorted(Path(SOURCE_FOLDER).glob("*.jpg"))
print(f"Found {len(source_files)} images to process")

# Process each image
for i, source_file in enumerate(source_files[:12]):  # Use first 12 images
    try:
        print(f"\nProcessing {i+1}/12: {source_file.name}")
        
        # Open image
        img = Image.open(source_file)
        original_size = img.size
        print(f"  Original size: {original_size}")
        
        # Resize to 1200x1200 with letterboxing (preserve aspect ratio)
        target_size = (1200, 1200)
        img.thumbnail(target_size, Image.Resampling.LANCZOS)
        
        # Create new image with white background
        new_img = Image.new("RGB", target_size, (255, 255, 255))
        
        # Calculate position to center the resized image
        x = (target_size[0] - img.size[0]) // 2
        y = (target_size[1] - img.size[1]) // 2
        
        # Paste resized image onto new image
        new_img.paste(img, (x, y))
        
        # Save optimized image
        dest_file = os.path.join(DEST_FOLDER, TARGET_NAMES[i])
        new_img.save(dest_file, "JPEG", quality=85, optimize=True)
        
        # Check file size
        file_size_kb = os.path.getsize(dest_file) / 1024
        print(f"  ✓ Saved: {TARGET_NAMES[i]}")
        print(f"  Size: {file_size_kb:.1f} KB")
        
    except Exception as e:
        print(f"  ✗ Error processing {source_file.name}: {str(e)}")

print("\n✓ All images optimized and saved to public/gallery/")
