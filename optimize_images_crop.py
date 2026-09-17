#!/usr/bin/env python3
"""
Optimize and resize airline images for FLY748 gallery
- Resize to 1200x1200px (crop to fill, no letterboxing)
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
    "crew-pre-flight-briefing.jpg",
    "pilots-at-aircraft.jpg",
    "flight-attendants-team.jpg",
    "fly748-aircraft-at-gate.jpg",
    "atr-turboprop-aircraft.jpg",
    "ground-operations-team.jpg",
    "premium-cabin-seating.jpg",
    "cabin-aisle-view.jpg",
    "overhead-bin-luggage.jpg",
    "aircraft-maintenance-team.jpg",
    "ground-support-vehicle.jpg",
    "fly748-partnership-event.jpg",
]

# Create destination folder if it doesn't exist
os.makedirs(DEST_FOLDER, exist_ok=True)

# Get all JPG files from source
source_files = sorted(Path(SOURCE_FOLDER).glob("*.jpg"))
print(f"Found {len(source_files)} images to process\n")

# Process each image
for i, source_file in enumerate(source_files[:12]):  # Use first 12 images
    try:
        print(f"Processing {i+1}/12: {source_file.name}")
        
        # Open image
        img = Image.open(source_file)
        original_size = img.size
        print(f"  Original size: {original_size}")
        
        # Resize to 1200x1200 with crop (fill entire tile)
        target_size = (1200, 1200)
        
        # Calculate scaling to fill 1200x1200
        img_aspect = img.size[0] / img.size[1]
        target_aspect = 1.0  # square
        
        if img_aspect > target_aspect:
            # Image is wider than square, scale by height
            new_height = target_size[1]
            new_width = int(new_height * img_aspect)
        else:
            # Image is taller than square, scale by width
            new_width = target_size[0]
            new_height = int(new_width / img_aspect)
        
        # Resize image
        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # Crop to center
        left = (new_width - target_size[0]) // 2
        top = (new_height - target_size[1]) // 2
        right = left + target_size[0]
        bottom = top + target_size[1]
        
        img = img.crop((left, top, right, bottom))
        
        # Save optimized image
        dest_file = os.path.join(DEST_FOLDER, TARGET_NAMES[i])
        img.save(dest_file, "JPEG", quality=85, optimize=True)
        
        # Check file size
        file_size_kb = os.path.getsize(dest_file) / 1024
        print(f"  ✓ Saved: {TARGET_NAMES[i]}")
        print(f"  Size: {file_size_kb:.1f} KB\n")
        
    except Exception as e:
        print(f"  ✗ Error processing {source_file.name}: {str(e)}\n")

print("✓ All images optimized and saved to public/gallery/")
