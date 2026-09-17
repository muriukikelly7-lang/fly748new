import { useState } from 'react';
import '../styles/gallery.css';

const assetFromBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: assetFromBase('gallery/crew-pre-flight-briefing.jpg'),
      alt: 'Crew Pre-Flight Briefing',
      category: 'Team',
      title: 'Crew Pre-Flight Briefing'
    },
    {
      id: 2,
      src: assetFromBase('gallery/pilots-at-aircraft.jpg'),
      alt: 'Pilots at Aircraft',
      category: 'Team',
      title: 'Pilots at Aircraft'
    },
    {
      id: 3,
      src: assetFromBase('gallery/flight-attendants-team.jpg'),
      alt: 'Flight Attendants Team',
      category: 'Team',
      title: 'Flight Attendants Team'
    },
    {
      id: 4,
      src: assetFromBase('gallery/fly748-aircraft-at-gate.jpg'),
      alt: 'FLY748 Aircraft at Gate',
      category: 'Aircraft',
      title: 'FLY748 Aircraft at Gate'
    },
    {
      id: 5,
      src: assetFromBase('gallery/atr-turboprop-aircraft.jpg'),
      alt: 'ATR Turboprop Aircraft',
      category: 'Aircraft',
      title: 'ATR Turboprop Aircraft'
    },
    {
      id: 6,
      src: assetFromBase('gallery/ground-operations-team.jpg'),
      alt: 'Ground Operations Team',
      category: 'Operations',
      title: 'Ground Operations Team'
    },
    {
      id: 7,
      src: assetFromBase('gallery/premium-cabin-seating.jpg'),
      alt: 'Premium Cabin Seating',
      category: 'Comfort',
      title: 'Premium Cabin Seating'
    },
    {
      id: 8,
      src: assetFromBase('gallery/cabin-aisle-view.jpg'),
      alt: 'Cabin Aisle View',
      category: 'Comfort',
      title: 'Cabin Aisle View'
    },
    {
      id: 9,
      src: assetFromBase('gallery/overhead-bin-luggage.jpg'),
      alt: 'Overhead Bin Luggage',
      category: 'Comfort',
      title: 'Overhead Bin Luggage'
    },
    {
      id: 10,
      src: assetFromBase('gallery/aircraft-maintenance-team.jpg'),
      alt: 'Aircraft Maintenance Team',
      category: 'Maintenance',
      title: 'Aircraft Maintenance Team'
    },
    {
      id: 11,
      src: assetFromBase('gallery/ground-support-vehicle.jpg'),
      alt: 'Ground Support Vehicle',
      category: 'Operations',
      title: 'Ground Support Vehicle'
    },
    {
      id: 12,
      src: assetFromBase('gallery/fly748-partnership-event.jpg'),
      alt: 'FLY748 Partnership Event',
      category: 'Events',
      title: 'FLY748 Partnership Event'
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
