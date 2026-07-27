# FLY748 Gallery Images - Setup Guide

## Image Organization

All gallery images should be placed in the `src/assets/gallery/` directory.

### Image Naming Convention

Use descriptive, lowercase names with hyphens:
- `team-ground-1.jpg` - Team photos at ground level
- `team-aircraft-1.jpg` - Team photos at aircraft
- `team-cabin-crew.jpg` - Cabin crew professional photo
- `aircraft-exterior-1.jpg` - Aircraft exterior shots
- `aircraft-exterior-2.jpg` - Additional aircraft exterior
- `aircraft-ground-team.jpg` - Ground operations team
- `cabin-interior-1.jpg` - Cabin interior view 1
- `cabin-interior-2.jpg` - Cabin interior view 2
- `cabin-interior-3.jpg` - Cabin interior view 3
- `aircraft-maintenance.jpg` - Aircraft maintenance operations
- `services-vehicle.jpg` - Ground support services
- `corporate-event.jpg` - Corporate/event photos

## Image Specifications

**Recommended Format:**
- Format: JPG (for photographs) or PNG (for graphics)
- Minimum Resolution: 1200 x 1200 pixels (for best quality in gallery)
- Aspect Ratio: 1:1 (Square) - for consistent grid layout
- File Size: Keep under 500KB per image for optimal loading
- Quality: High quality, professionally edited images

## Image Optimization

Before adding images, optimize them for web:
1. Resize to 1200x1200px (square format)
2. Compress using tools like:
   - TinyPNG.com
   - ImageOptim (Mac)
   - FileOptimizer (Windows)
3. Export as JPG with 80-85% quality

## Categories

Images are organized by categories in the Gallery component:
- **Team** - Crew and staff team photos
- **Aircraft** - Aircraft exteriors and fleet shots
- **Comfort** - Interior cabin views
- **Operations** - Ground services and operations
- **Maintenance** - Aircraft maintenance and technical
- **Events** - Corporate events and partnerships
- **All** - View all images

## How to Add New Images

1. Optimize your image to 1200x1200px JPG
2. Place in `src/assets/gallery/` folder
3. Update the `Gallery.jsx` component with the new image reference
4. Add title, category, and description in the gallery data

Example entry in Gallery.jsx:
```javascript
{
  id: 13,
  src: '/gallery/your-image-name.jpg',
  alt: 'Descriptive text about the image',
  category: 'Team',  // or Aircraft, Comfort, Operations, etc.
  title: 'Image Title for Display'
}
```

## File Paths

When referencing images in the component, use:
- Public path: `/gallery/image-name.jpg`
- Local path: `src/assets/gallery/image-name.jpg`

The Gallery component uses public paths for image URLs.

## Quality Standards

✅ DO:
- Use high-resolution professional photos
- Ensure consistent lighting and exposure
- Include diverse perspectives (team, aircraft, operations)
- Use consistent color grading
- Crop to square format (1:1 aspect ratio)

❌ DON'T:
- Use low-resolution images
- Include faces without consent/permission
- Use overly saturated or filtered images
- Mix vertical and horizontal aspect ratios
- Include copyrighted material without permission

## Performance Tips

1. **Lazy Loading**: The gallery component will load images as they come into view
2. **Responsive Images**: CSS ensures images scale properly on all devices
3. **CDN Optimization**: Consider using image CDN for faster delivery in production
4. **Caching**: Browser caching helps with repeat visits

## Current Gallery Features

✨ Professional Features:
- Responsive grid layout (mobile, tablet, desktop)
- Hover effects and smooth transitions
- Category filtering
- Lightbox modal view
- Smooth animations
- Professional color scheme
- Touch-friendly interface
- Accessibility support

Enjoy your professional gallery!
