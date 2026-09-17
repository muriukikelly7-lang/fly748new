from PIL import Image, ImageDraw
import os

os.chdir('public/gallery')

# Create distinct placeholder images with patterns
image_data = [
    ('team-ground-1.jpg', '#4a90e2', 'Horizontal'),     # Light blue with horizontal stripes
    ('team-aircraft-1.jpg', '#357abd', 'Vertical'),     # Medium blue with vertical stripes
    ('team-cabin-crew.jpg', '#2d5a9e', 'Diagonal'),     # Deep blue with diagonal stripes
    ('aircraft-exterior-1.jpg', '#1a3a52', 'Grid'),     # Dark with grid pattern
    ('aircraft-exterior-2.jpg', '#4a6fa5', 'Dots'),     # Navy with dots
    ('aircraft-ground-team.jpg', '#5ba3f5', 'H-Stripe'), # Bright blue horizontal
    ('cabin-interior-1.jpg', '#2E7D32', 'V-Stripe'),    # Green vertical
    ('cabin-interior-2.jpg', '#558B2F', 'Diagonal'),    # Green diagonal
    ('cabin-interior-3.jpg', '#33691E', 'Grid'),        # Dark green grid
    ('aircraft-maintenance.jpg', '#F57F17', 'Dots'),    # Orange dots
    ('services-vehicle.jpg', '#E65100', 'Horizontal'),  # Red-orange horizontal
    ('corporate-event.jpg', '#BF360C', 'Vertical'),     # Deep orange vertical
]

for filename, base_color, pattern in image_data:
    # Parse color hex to RGB
    color = tuple(int(base_color[i:i+2], 16) for i in (1, 3, 5))
    
    # Create base image
    img = Image.new('RGB', (1200, 1200), color=color)
    draw = ImageDraw.Draw(img)
    
    # Create lighter accent color for patterns
    accent = tuple(min(255, int(c * 1.5)) for c in color)
    
    if pattern == 'Horizontal':
        for y in range(0, 1200, 40):
            draw.line([(0, y), (1200, y)], fill=accent, width=20)
    elif pattern == 'H-Stripe':
        for y in range(0, 1200, 60):
            draw.rectangle([(0, y), (1200, y+30)], fill=accent)
    elif pattern == 'Vertical':
        for x in range(0, 1200, 40):
            draw.line([(x, 0), (x, 1200)], fill=accent, width=20)
    elif pattern == 'V-Stripe':
        for x in range(0, 1200, 60):
            draw.rectangle([(x, 0), (x+30, 1200)], fill=accent)
    elif pattern == 'Diagonal':
        for i in range(-1200, 2400, 80):
            draw.line([(i, 0), (i+1200, 1200)], fill=accent, width=20)
    elif pattern == 'Grid':
        for x in range(0, 1200, 60):
            draw.line([(x, 0), (x, 1200)], fill=accent, width=15)
        for y in range(0, 1200, 60):
            draw.line([(0, y), (1200, y)], fill=accent, width=15)
    elif pattern == 'Dots':
        for x in range(100, 1200, 120):
            for y in range(100, 1200, 120):
                draw.ellipse([(x-40, y-40), (x+40, y+40)], fill=accent)
    
    # Save the image
    img.save(filename, 'JPEG', quality=85)
    print(f"Created: {filename} ({pattern})")

print("All placeholder images created successfully with distinct patterns!")
