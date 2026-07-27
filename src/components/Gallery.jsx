import { useState } from 'react';
import '../styles/gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: '/gallery/team-ground-1.jpg',
      alt: 'FLY748 Crew Team - Ground Operations',
      category: 'Team',
      title: 'Professional Crew Team'
    },
    {
      id: 2,
      src: '/gallery/team-aircraft-1.jpg',
      alt: 'FLY748 Flight Crew at Aircraft',
      category: 'Team',
      title: 'Flight Operations Team'
    },
    {
      id: 3,
      src: '/gallery/team-cabin-crew.jpg',
      alt: 'Cabin Crew Professional Photo',
      category: 'Team',
      title: 'Cabin Crew Excellence'
    },
    {
      id: 4,
      src: '/gallery/aircraft-exterior-1.jpg',
      alt: 'FLY748 Aircraft Exterior',
      category: 'Aircraft',
      title: 'Our Modern Fleet'
    },
    {
      id: 5,
      src: '/gallery/aircraft-exterior-2.jpg',
      alt: 'FLY748 Turboprop Aircraft',
      category: 'Aircraft',
      title: 'Advanced Turboprop Fleet'
    },
    {
      id: 6,
      src: '/gallery/aircraft-ground-team.jpg',
      alt: 'Ground Services Team',
      category: 'Operations',
      title: 'Ground Operations Team'
    },
    {
      id: 7,
      src: '/gallery/cabin-interior-1.jpg',
      alt: 'Aircraft Cabin Interior View',
      category: 'Comfort',
      title: 'Comfortable Cabin Design'
    },
    {
      id: 8,
      src: '/gallery/cabin-interior-2.jpg',
      alt: 'Spacious Cabin Seating',
      category: 'Comfort',
      title: 'Premium Seating'
    },
    {
      id: 9,
      src: '/gallery/cabin-interior-3.jpg',
      alt: 'Modern Cabin Configuration',
      category: 'Comfort',
      title: 'Modern Aircraft Interior'
    },
    {
      id: 10,
      src: '/gallery/aircraft-maintenance.jpg',
      alt: 'Aircraft Maintenance Operations',
      category: 'Maintenance',
      title: 'Safety & Maintenance'
    },
    {
      id: 11,
      src: '/gallery/services-vehicle.jpg',
      alt: 'Ground Support Services',
      category: 'Operations',
      title: 'Ground Support Excellence'
    },
    {
      id: 12,
      src: '/gallery/corporate-event.jpg',
      alt: 'FLY748 Corporate Partnership Event',
      category: 'Events',
      title: 'Industry Leadership'
    },
  ];

  const categories = ['All', 'Team', 'Aircraft', 'Comfort', 'Operations', 'Maintenance', 'Events'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1>FLY748 Gallery</h1>
        <p>Discover our world-class operations, modern fleet, and dedicated team</p>
      </div>

      <div className="gallery-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map(image => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.alt} />
            <div className="gallery-overlay">
              <div className="overlay-content">
                <h3>{image.title}</h3>
                <p>{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="modal-info">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
