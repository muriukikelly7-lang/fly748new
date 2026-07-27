import './App.css';
import { useState, useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import Gallery from './components/Gallery';

const heroSlides = [
  '/hero-slide-1.png',
  '/hero-slide-2.png',
];

const topRoutes = [
  { title: 'Mombasa', path: '/pages/mombasa' },
  { title: 'Ukunda', path: '/pages/ukunda' },
];

const aboutLinks = [
  { title: 'Who we Are', path: '/pages/about-us' },
  { title: 'CSR', path: '/pages/csr' },
];

const travelInfo = [
  { title: 'Baggage Policy', path: '/pages/baggage-policy' },
  { title: 'Unaccompanied Minors Policy', path: '/pages/unaccompanied-minors-policy' },
  { title: 'Expectant Mothers’ Travel Policy', path: '/pages/expectant-mothers-travel-policy' },
  { title: 'Special Assistance & Pet Policy', path: '/pages/special-assistance' },
  { title: 'Firearm Policy', path: '/pages/firearms-policy' },
];

const whyCards = [
  { title: 'Reliable Schedules', description: 'Daily flights across Kenya with secure connections.' },
  { title: 'Affordable Fares', description: 'Competitive pricing for business and leisure travel.' },
  { title: 'Experienced Crew', description: 'Trusted pilots and cabin staff ready to support you.' },
  { title: 'Safety First', description: 'We keep safety at the heart of every flight.' },
];

const supportLinks = [
  { title: 'Baggage Allowance', path: '/pages/baggage-policy' },
  { title: 'Unaccompanied Minors', path: '/pages/unaccompanied-minors-policy' },
  { title: 'Assisted Passengers', path: '/pages/special-assistance' },
  { title: 'Expectant Mothers', path: '/pages/expectant-mothers-travel-policy' },
  { title: 'Firearms Policy', path: '/pages/firearms-policy' },
];

const pageMap = {
  'baggage-policy': {
    title: 'Baggage Policy',
    paragraphs: ['Carry one small personal item and checked baggage allowances vary by fare.', 'Please check weight limits and confirm your baggage needs before booking.'],
  },
  'unaccompanied-minors-policy': {
    title: 'Unaccompanied Minors Policy',
    paragraphs: ['Children flying alone require advance authorization and a guardian release form.', 'Contact customer care for details to ensure a smooth travel experience.'],
  },
  'expectant-mothers-travel-policy': {
    title: 'Expectant Mothers’ Travel Policy',
    paragraphs: ['Pregnant travellers may require medical clearance for travel after 28 weeks.', 'Bring a doctor’s note if you plan to fly in late-term pregnancy.'],
  },
  'special-assistance': {
    title: 'Special Assistance & Pet Policy',
    paragraphs: ['Notify us at least 48 hours before departure if you need wheelchair assistance or have a service animal.', 'We support travellers with mobility, hearing, vision and medical assistance needs.'],
  },
  'firearms-policy': {
    title: 'Firearm Policy',
    paragraphs: ['Firearms and ammunition are not accepted on board. Contact our cargo desk for secure transport solutions.', 'Declare any regulated items before check-in and follow local airport rules.'],
  },
};

const PageRouter = () => {
  const { pageId } = useParams();
  const page = pageMap[pageId];

  if (!page) {
    return <StaticPage title="Page not found" paragraphs={['The page you are looking for does not exist. Please use the navigation menu to continue.']} />;
  }

  return <StaticPage title={page.title} paragraphs={page.paragraphs} />;
};

const fleetItems = [
  { title: 'Modern fleet', description: 'Reliable aircraft maintained for comfort and safety.' },
  { title: 'Regional reach', description: 'Serving Mombasa, Diani, Malindi and more.' },
];

const footerLinks = [
  { title: 'About Us', path: '/pages/about-us' },
  { title: 'Travel Info', path: '/pages/travel-info' },
  { title: 'News', path: '/pages/news' },
  { title: 'Schedule', path: '/pages/schedule' },
  { title: 'Contact', path: '/pages/contact' },
  { title: 'Press Room', path: '/pages/press-room' },
  { title: 'Terms & Conditions', path: '/pages/terms-and-conditions' },
  { title: 'Privacy Policy', path: '/pages/privacy-policy' },
];

const destinations = [
  { title: 'Mombasa', path: '/pages/mombasa' },
  { title: 'Ukunda', path: '/pages/ukunda' },
];

const galleryImages = [
  {
    id: 1,
    src: '/gallery/crew-pre-flight-briefing.jpg',
    alt: 'Crew Pre-Flight Briefing',
    category: 'Team',
    title: 'Crew Pre-Flight Briefing'
  },
  {
    id: 2,
    src: '/gallery/pilots-at-aircraft.jpg',
    alt: 'Pilots at Aircraft',
    category: 'Team',
    title: 'Pilots at Aircraft'
  },
  {
    id: 3,
    src: '/gallery/flight-attendants-team.jpg',
    alt: 'Flight Attendants Team',
    category: 'Team',
    title: 'Flight Attendants Team'
  },
  {
    id: 4,
    src: '/gallery/fly748-aircraft-at-gate.jpg',
    alt: 'FLY748 Aircraft at Gate',
    category: 'Aircraft',
    title: 'FLY748 Aircraft at Gate'
  },
  {
    id: 5,
    src: '/gallery/atr-turboprop-aircraft.jpg',
    alt: 'ATR Turboprop Aircraft',
    category: 'Aircraft',
    title: 'ATR Turboprop Aircraft'
  },
  {
    id: 6,
    src: '/gallery/ground-operations-team.jpg',
    alt: 'Ground Operations Team',
    category: 'Operations',
    title: 'Ground Operations Team'
  },
  {
    id: 7,
    src: '/gallery/premium-cabin-seating.jpg',
    alt: 'Premium Cabin Seating',
    category: 'Comfort',
    title: 'Premium Cabin Seating'
  },
  {
    id: 8,
    src: '/gallery/cabin-aisle-view.jpg',
    alt: 'Cabin Aisle View',
    category: 'Comfort',
    title: 'Cabin Aisle View'
  },
  {
    id: 9,
    src: '/gallery/overhead-bin-luggage.jpg',
    alt: 'Overhead Bin Luggage',
    category: 'Comfort',
    title: 'Overhead Bin Luggage'
  },
  {
    id: 10,
    src: '/gallery/aircraft-maintenance-team.jpg',
    alt: 'Aircraft Maintenance Team',
    category: 'Maintenance',
    title: 'Aircraft Maintenance Team'
  },
  {
    id: 11,
    src: '/gallery/ground-support-vehicle.jpg',
    alt: 'Ground Support Vehicle',
    category: 'Operations',
    title: 'Ground Support Vehicle'
  },
  {
    id: 12,
    src: '/gallery/fly748-partnership-event.jpg',
    alt: 'FLY748 Partnership Event',
    category: 'Events',
    title: 'FLY748 Partnership Event'
  },
];

const PageShell = ({ title, caption, children }) => (
  <section className="section contact-section">
    <div className="section-header">
      <p>{caption || title}</p>
      <h2>{title}</h2>
    </div>
    <div className="page-content">
      {children}
    </div>
  </section>
);

const HomePage = ({
  heroSlides,
  activeHero,
  setActiveHero,
  tripType,
  setTripType,
  booking,
  handleChange,
  handleSubmit,
  error,
  submitted,
  resultRef,
  topRoutes,
  aboutLinks,
  travelInfo,
  whyCards,
  supportLinks,
  fleetItems,
  destinations,
  footerLinks,
  showPassengerForm,
  setShowPassengerForm,
  passengerInfo,
  setPassengerInfo,
  formError,
  setFormError,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Team', 'Aircraft', 'Comfort', 'Operations', 'Maintenance', 'Events'];

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    const hashPath = `/${sectionId}`;

    window.location.hash = hashPath;

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  };

  return (
  <div id="MainContent">
    <section className="hero-booking-v47">
      <div className="hb-stage">
        <div className="hb-overlay" />
        <div className="hb-images">
          <img className="hb-img hb-img-desktop" src={heroSlides[activeHero]} alt="Connecting Kenya" />
          <img className="hb-img hb-img-mobile" src={heroSlides[activeHero]} alt="Connecting Kenya" />
        </div>
        <div className="hb-content">
          <span className="hb-caption">WELCOME ABOARD</span>
          <h1 className="hb-h1">Connecting Kenya</h1>
          <p className="hb-p">Scheduled flights to Mombasa, Diani, and beyond.</p>
          <div className="hb-actions">
            <a className="button button-primary" href="#/booking" onClick={(event) => scrollToSection(event, 'booking')}>Book Flight</a>
            <a className="button button-secondary" href="#/schedule" onClick={(event) => scrollToSection(event, 'schedule')}>View Schedule</a>
          </div>
          <div className="hb-pagination" aria-label="Slides">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`hb-bullet ${index === activeHero ? 'hb-bullet-active' : ''}`}
                onClick={() => setActiveHero(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="booking" className="section booking-section">
      <div className="section-header">
        <p>Reservation</p>
        <h2>Search and book your flight</h2>
      </div>
      <div className="booking-widget">
        <div className="booking-options">
          <button type="button" className={tripType === 'Roundtrip' ? 'option active' : 'option'} onClick={() => setTripType('Roundtrip')}>Roundtrip</button>
          <button type="button" className={tripType === 'One-way' ? 'option active' : 'option'} onClick={() => setTripType('One-way')}>One-way</button>
        </div>
        <form className="booking-form" onSubmit={handleSubmit}>
          {error && <div className="alert">{error}</div>}
          <div className="field-grid">
            <label>
              From
              <input name="from" value={booking.from} onChange={handleChange} />
            </label>
            <label>
              To
              <input name="to" value={booking.to} onChange={handleChange} />
            </label>
          </div>
          <div className="field-grid">
            <label>
              Depart
              <input type="date" name="depart" value={booking.depart} onChange={handleChange} />
            </label>
            <label>
              Return
              <input type="date" name="ret" value={booking.ret} onChange={handleChange} disabled={tripType === 'One-way'} />
            </label>
          </div>
          <div className="field-grid">
            <label>
              Passengers
              <select name="passengers" value={booking.passengers} onChange={handleChange}>
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
                <option>4 Passengers</option>
              </select>
            </label>
            <label>
              Coupon code
              <input name="coupon" value={booking.coupon} onChange={handleChange} placeholder="Optional" />
            </label>
          </div>
          <button className="button button-primary submit-button" type="button" onClick={handleSubmit}>Find flights</button>
          {submitted && (
            <div className="confirmation" ref={resultRef}>
              <h3>Suggested flights available</h3>
              <p>{submitted.origin} → {submitted.destination} on {submitted.departDate}</p>
              <div className="flight-result-card">
                <div>
                  <strong>{submitted.flightNo}</strong>
                  <div>Reg {submitted.reg}</div>
                  <div>{submitted.departTime} departure</div>
                </div>
                <div className="price-section">
                  <div className="price-per-passenger">
                    <small>Price per passenger</small>
                    <strong>Ksh. {submitted.pricePerPassenger.toLocaleString()}</strong>
                  </div>
                  <div className="price-divider">×</div>
                  <div className="passenger-count">
                    <small>{submitted.passengerCount} passenger{submitted.passengerCount > 1 ? 's' : ''}</small>
                    <strong>{submitted.passengerCount}</strong>
                  </div>
                  <div className="price-equals">=</div>
                  <div className="total-price">
                    <small>Total</small>
                    <strong>Ksh. {submitted.totalPrice.toLocaleString()}</strong>
                  </div>
                </div>
                <div>
                  <strong>{submitted.tripType}</strong>
                  <div>{submitted.roundTripLabel}</div>
                </div>
              </div>
              {submitted.tripType === 'Roundtrip' && (
                <p>Return departs at {submitted.returnTime}.</p>
              )}
              {!showPassengerForm && (
                <button
                  type="button"
                  className="button button-secondary confirm-button"
                  onClick={() => {
                    setShowPassengerForm(true);
                    setFormError('');
                  }}
                >
                  Confirm
                </button>
              )}
              {showPassengerForm && (
                <div className="passenger-details-form">
                  <h4>Passenger details</h4>
                  {formError && <div className="alert">{formError}</div>}
                  <div className="field-grid">
                    <label>
                      Full name
                      <input
                        name="fullName"
                        value={passengerInfo.fullName}
                        onChange={event => setPassengerInfo(prev => ({ ...prev, [event.target.name]: event.target.value }))}
                        placeholder="Enter full name"
                      />
                    </label>
                    <label>
                      National ID / Passport
                      <input
                        name="idNumber"
                        value={passengerInfo.idNumber}
                        onChange={event => setPassengerInfo(prev => ({ ...prev, [event.target.name]: event.target.value }))}
                        placeholder="ID or passport number"
                      />
                    </label>
                  </div>
                  <div className="field-grid">
                    <label>
                      Passenger type
                      <select
                        name="passengerType"
                        value={passengerInfo.passengerType}
                        onChange={event => setPassengerInfo(prev => ({ ...prev, [event.target.name]: event.target.value }))}
                      >
                        <option>Adult</option>
                        <option>Child</option>
                        <option>Infant</option>
                      </select>
                    </label>
                    <label>
                      Phone number
                      <input
                        type="tel"
                        name="phone"
                        value={passengerInfo.phone}
                        onChange={event => setPassengerInfo(prev => ({ ...prev, [event.target.name]: event.target.value }))}
                        placeholder="e.g. +254712345678"
                      />
                    </label>
                  </div>
                  <div className="field-grid">
                    <label>
                      Email address
                      <input
                        type="email"
                        name="email"
                        value={passengerInfo.email}
                        onChange={event => setPassengerInfo(prev => ({ ...prev, [event.target.name]: event.target.value }))}
                        placeholder="you@example.com"
                      />
                    </label>
                    <label>
                      Special request
                      <textarea
                        name="specialRequest"
                        value={passengerInfo.specialRequest}
                        onChange={event => setPassengerInfo(prev => ({ ...prev, [event.target.name]: event.target.value }))}
                        placeholder="Dietary needs, wheelchair support, seat preference"
                      />
                    </label>
                  </div>
                  <button
                    type="button"
                    className="button button-primary continue-button"
                    onClick={() => {
                      const required = ['fullName', 'idNumber', 'phone', 'email'];
                      const missing = required.filter(key => !passengerInfo[key].trim());
                      if (missing.length) {
                        setFormError('Please complete all required passenger fields before continuing.');
                        return;
                      }

                      const whatsappNumber = '254738844990';
                      const message = `Hello Fly 748,\n\nI would like to confirm my booking:\nRoute: ${submitted.origin} → ${submitted.destination}\nDepart: ${submitted.departDate}${submitted.tripType === 'Roundtrip' ? `\nReturn: ${submitted.returnDate}` : ''}\nPassengers: ${submitted.passengers}\nFlight: ${submitted.flightNo} (${submitted.reg})\nTotal: Ksh. ${submitted.totalPrice.toLocaleString()}\n\nPassenger details:\nName: ${passengerInfo.fullName}\nID/Passport: ${passengerInfo.idNumber}\nPassenger type: ${passengerInfo.passengerType}\nPhone: ${passengerInfo.phone}\nEmail: ${passengerInfo.email}\nSpecial requests: ${passengerInfo.specialRequest || 'None'}\n\nPlease help me complete this booking.`;
                      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    Continue to WhatsApp
                  </button>
                </div>
              )}
            </div>
          )}
        </form>
      </div>
    </section>

    <section className="section deals-section">
      <div className="section-header">
        <p>Deals from Nairobi</p>
        <h2>Discover where your next journey could take you.</h2>
      </div>
      <div className="deals-grid">
        <article className="deal-card">
          <img src="/mombasa-coastal.jpg" alt="Mombasa Coastal" />
          <div className="deal-copy">
            <span>From Ksh. 7,700</span>
            <h3>Mombasa Coastal • Breezy</h3>
            <a href="#/booking" onClick={(event) => scrollToSection(event, 'booking')}>Book Flight →</a>
          </div>
        </article>
        <article className="deal-card">
          <img src="/ukunda.jpg" alt="Ukunda Relaxing" />
          <div className="deal-copy">
            <span>From Ksh. 7,700</span>
            <h3>Ukunda Relaxing</h3>
            <a href="#/booking" onClick={(event) => scrollToSection(event, 'booking')}>Book Flight →</a>
          </div>
        </article>
        <article className="deal-card">
          <img src="/malindi.jpg" alt="Malindi Beach" />
          <div className="deal-copy">
            <span>From Ksh. 7,700</span>
            <h3>Malindi Beach • Coastal</h3>
            <a href="#/booking" onClick={(event) => scrollToSection(event, 'booking')}>Book Flight →</a>
          </div>
        </article>
        <article className="deal-card">
          <img src="/maasai-mara.jpg" alt="Maasai Mara" />
          <div className="deal-copy">
            <span>From Ksh. 9,500</span>
            <h3>Maasai Mara Safari</h3>
            <a href="#/booking" onClick={(event) => scrollToSection(event, 'booking')}>Book Flight →</a>
          </div>
        </article>
      </div>
    </section>

    <section className="section why-section">
      <div className="section-header">
        <p>Why Fly 748</p>
        <h2>Discover why travellers choose us</h2>
      </div>
      <div className="why-grid">
        {whyCards.map(item => (
          <div key={item.title} className="why-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="section support-section">
      <div className="section-header">
        <p>Supporting your next journey</p>
        <h2>What you need to know ahead of your next journey with us</h2>
      </div>
      <div className="support-grid">
        {supportLinks.map(item => (
          <Link key={item.title} className="support-card" to={item.path}>
            <h3>{item.title}</h3>
            <p>Important information for your next trip.</p>
          </Link>
        ))}
      </div>
    </section>

    <section className="section fleet-section">
      <div className="section-header">
        <p>Our fleet</p>
        <h2>Modern aircraft for regional travel</h2>
      </div>
      <div className="fleet-grid">
        {fleetItems.map(item => (
          <div key={item.title} className="fleet-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section id="gallery" className="section gallery-section">
      <div className="section-header">
        <p>FLY748 Gallery</p>
        <h2>Discover our world-class operations, modern fleet, and dedicated team</h2>
      </div>
      <div className="gallery-filters">
        {categories.map(cat => (
          <button
            key={cat}
            type="button"
            className={`filter-btn ${activeCategory === cat ? 'filter-btn-active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {filteredImages.map(img => (
          <div 
            key={img.id} 
            className="gallery-item"
            onClick={() => setSelectedImage(img)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(img)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-overlay">
              <h3>{img.title}</h3>
              <p>{img.category}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button"
              className="gallery-modal-close" 
              onClick={() => setSelectedImage(null)}
              aria-label="Close gallery"
            >
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="gallery-modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>

    <section className="section social-section">
      <div className="section-header">
        <p>Our Social Corner</p>
        <h2>Stay connected with our latest stories</h2>
      </div>
      <div className="social-grid">
        <div className="social-card">
          <h3>Instagram updates</h3>
          <p>Latest news and posts from our community.</p>
        </div>
        <div className="social-card">
          <h3>Travel moments</h3>
          <p>Photos and announcements from Fly 748.</p>
        </div>
        <div className="social-card">
          <h3>Service updates</h3>
          <p>Schedule alerts, news, and travel advice.</p>
        </div>
        <div className="social-card">
          <h3>Join our community</h3>
          <p>Stay in touch with offers and destination ideas.</p>
        </div>
      </div>
    </section>

    <section id="schedule" className="section schedule-section">
      <div className="section-header">
        <p>Flight Schedule</p>
        <h2>Our most popular routes</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Route</th>
            <th>Depart</th>
            <th>Arrive</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nairobi ↔ Mombasa</td>
            <td>08:30</td>
            <td>10:50</td>
            <td>Daily</td>
          </tr>
          <tr>
            <td>Nairobi ↔ Ukunda (Diani)</td>
            <td>11:15</td>
            <td>12:50</td>
            <td>Mon, Wed, Fri</td>
          </tr>
          <tr>
            <td>Nairobi ↔ Malindi</td>
            <td>14:00</td>
            <td>15:20</td>
            <td>Tue, Thu, Sat</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section id="contact" className="section contact-section">
      <div className="section-header">
        <p>Contact</p>
        <h2>Need help with a booking?</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-card contact-card--actions">
          <h3>Call our support team</h3>
          <p>Available for flight inquiries, bookings, and travel assistance.</p>
          <span>+254738844990</span>
          <div className="contact-actions">
            <a className="contact-action-btn contact-action-btn--call" href="tel:+254738844990">Call</a>
            <a className="contact-action-btn contact-action-btn--whatsapp" href="https://wa.me/254738844990?text=Hello%20Fly%20748%2C%20I%20would%20like%20assistance." target="_blank" rel="noreferrer" aria-label="Contact us on WhatsApp">
              <span className="contact-action-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path d="M12.04 2.5a9.49 9.49 0 0 0-8.2 14.08L2.5 21.5l5.06-1.33A9.49 9.49 0 1 0 12.04 2.5Zm0 17.32a7.82 7.82 0 0 1-3.98-1.1l-.28-.17-3.01.79.8-2.93-.18-.3A7.82 7.82 0 1 1 12.04 19.82Zm4.42-5.84c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.64-1.19-1.43-1.33-1.67-.14-.24-.01-.37.11-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.03 0 1.2.87 2.36.99 2.52.12.16 1.72 2.63 4.17 3.68.58.25 1.03.4 1.38.52.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" fill="currentColor"/>
                </svg>
              </span>
              <span className="contact-action-label">WhatsApp</span>
            </a>
          </div>
        </div>
        <a className="contact-card contact-card--call-only" href="tel:+2540202019056">
          <h3>Customer service line</h3>
          <p>For general enquiries and office support.</p>
          <span>020 201 9056</span>
        </a>
        <a className="contact-card" href="mailto:customerdesk@fly748.co.ke">
          <h3>Send us an email</h3>
          <p>Reach out for ticket changes, quotes, or customer support.</p>
          <span>customerdesk@fly748.co.ke</span>
        </a>
      </div>
    </section>
  </div>
  );
};

const StaticPage = ({ title, paragraphs }) => (
  <PageShell title={title}>
    <div className="page-copy">
      {paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  </PageShell>
);

const AboutUsPage = () => (
  <StaticPage
    title="About Us"
    paragraphs={[
      'Fly 748 is a regional airline focused on connecting Kenya with safe, reliable flights.',
      'We operate modern aircraft and provide friendly customer service for business and leisure travellers.',
    ]}
  />
);

const CSRPage = () => (
  <StaticPage
    title="Corporate Social Responsibility"
    paragraphs={[
      'Our CSR program supports local communities and sustainable tourism initiatives across Kenya.',
      'Fly 748 invests in education, conservation, and economic development for the regions we serve.',
    ]}
  />
);

const TravelInfoPage = () => (
  <PageShell title="Travel Info" caption="Travel guidelines and policies">
    <div className="support-grid">
      {travelInfo.map(item => (
        <Link key={item.title} className="support-card" to={item.path}>
          <h3>{item.title}</h3>
        </Link>
      ))}
    </div>
  </PageShell>
);

const ContactPage = () => (
  <PageShell title="Contact Us">
    <div className="page-copy">
      <p>Fly 748 - Hangar 23, Wilson Airport</p>
      <p>Fly 748 - JKIA, Terminal 2</p>
      <p>Call us: +254738844990</p>
      <p>Office line: 020 201 9056</p>
      <p>Email: customerdesk@fly748.co.ke</p>
    </div>
  </PageShell>
);

const SchedulePage = () => (
  <PageShell title="Flight Schedule" caption="Our most popular routes">
    <table>
      <thead>
        <tr>
          <th>Route</th>
          <th>Depart</th>
          <th>Arrive</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nairobi ↔ Mombasa</td>
          <td>08:30</td>
          <td>10:50</td>
          <td>Daily</td>
        </tr>
        <tr>
          <td>Nairobi ↔ Ukunda (Diani)</td>
          <td>11:15</td>
          <td>12:50</td>
          <td>Mon, Wed, Fri</td>
        </tr>
        <tr>
          <td>Nairobi ↔ Malindi</td>
          <td>14:00</td>
          <td>15:20</td>
          <td>Tue, Thu, Sat</td>
        </tr>
      </tbody>
    </table>
  </PageShell>
);

const MombasaPage = () => (
  <PageShell title="Mombasa">
    <div className="page-copy">
      <p>Travel to the coast with daily flights from Nairobi to Mombasa. Enjoy beach stays and coastal culture.</p>
      <p>Fly 748 provides reliable service for tourism, business, and transit connections.</p>
    </div>
  </PageShell>
);

const UkundaPage = () => (
  <PageShell title="Ukunda">
    <div className="page-copy">
      <p>Ukunda is the gateway to Diani Beach. Our flights offer easy access to one of Kenya’s top coastal resorts.</p>
      <p>Book early for the best fares and seasonal availability.</p>
    </div>
  </PageShell>
);

const PressRoomPage = () => (
  <PageShell title="Press Room">
    <div className="page-copy">
      <p>Latest announcements and media resources from Fly 748.</p>
      <p>For press enquiries, contact customerdesk@fly748.co.ke.</p>
    </div>
  </PageShell>
);

const NewsPage = () => (
  <PageShell title="News" caption="Latest updates">
    <div className="page-copy">
      <article className="why-card">
        <h3>Fly 748 launches new coastal routes</h3>
        <p>We are expanding our route network with more daily flights to Mombasa and Diani.</p>
      </article>
      <article className="why-card">
        <h3>Improved booking system</h3>
        <p>Your booking experience just got faster with our new online reservation flow.</p>
      </article>
    </div>
  </PageShell>
);

const TermsPage = () => (
  <StaticPage
    title="Terms & Conditions"
    paragraphs={['Please review our terms of service before booking with Fly 748.', 'All passengers must comply with our fare rules and identification requirements.']}
  />
);

const PrivacyPage = () => (
  <StaticPage
    title="Privacy Policy"
    paragraphs={['We respect your privacy and only collect necessary booking information.', 'Your data is used to manage reservations and improve our services.']}
  />
);

const GenericInfoPage = ({ title, items }) => (
  <StaticPage title={title} paragraphs={items} />
);

const RouteNotFoundPage = () => (
  <PageShell title="Page not found">
    <p>The page you are looking for does not exist. Please use the navigation menu to continue.</p>
  </PageShell>
);

function App() {
  const [activeHero, setActiveHero] = useState(0);
  const [tripType, setTripType] = useState('Roundtrip');
  const resultRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [signinEmail, setSigninEmail] = useState('');
  const [signinOtp, setSigninOtp] = useState('');
  const [signinStage, setSigninStage] = useState('email');
  const [signinMessage, setSigninMessage] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [sentOtp, setSentOtp] = useState('');
  const [booking, setBooking] = useState({
    from: 'Nairobi',
    to: 'Mombasa',
    depart: '',
    ret: '',
    passengers: '1 Passenger',
    coupon: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showPassengerForm, setShowPassengerForm] = useState(false);
  const [passengerInfo, setPassengerInfo] = useState({
    fullName: '',
    idNumber: '',
    passengerType: 'Adult',
    phone: '',
    email: '',
    specialRequest: '',
  });
  const [formError, setFormError] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHero(current => (current + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const savedSession = window.sessionStorage.getItem('fly748-signin');
    if (savedSession === 'active') {
      setIsSignedIn(true);
    }
  }, []);

  useEffect(() => {
    const scrollToHashSection = () => {
      const hash = window.location.hash.replace('#', '').trim();
      const sectionId = hash.replace(/^\//, '');
      if (!sectionId || !['booking', 'schedule'].includes(sectionId)) return;

      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    };

    scrollToHashSection();
    window.addEventListener('hashchange', scrollToHashSection);

    return () => window.removeEventListener('hashchange', scrollToHashSection);
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;
    setBooking(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSignInEmail = async event => {
    event.preventDefault();
    if (!signinEmail.trim()) {
      setSigninMessage('Please enter your email address.');
      return;
    }

    try {
      const response = await fetch('/api/auth/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: signinEmail.trim() }),
      });

      const data = await response.json();
      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Unable to send OTP.');
      }

      setSentOtp(data.otp);
      setSigninMessage(`OTP sent to ${signinEmail}. Check your inbox and enter ${data.otp}.`);
      setSigninStage('otp');
    } catch (error) {
      setSigninMessage(error.message || 'Unable to send OTP right now.');
    }
  };

  const handleSignInOtp = event => {
    event.preventDefault();
    if (signinOtp.trim() !== sentOtp) {
      setSigninMessage(`Invalid code. Please use the code shown on screen or sent by the server.`);
      return;
    }

    setSigninMessage('Signed in successfully. Your session is active.');
    setIsSignedIn(true);
    window.sessionStorage.setItem('fly748-signin', 'active');
    setIsSigninOpen(false);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const required = [booking.from, booking.to, booking.depart, booking.passengers];
    if (tripType === 'Roundtrip') required.push(booking.ret);
    if (required.some(value => !value || String(value).trim() === '')) {
      setError('Please complete all required fields before searching flights.');
      setSubmitted(false);
      return;
    }

    setError('');

    const origin = booking.from?.trim() || 'Nairobi';
    const destination = booking.to?.trim() || 'Mombasa';
    const departDate = booking.depart || 'Today';
    const returnDate = booking.ret || '';
    const passengers = booking.passengers || '1 Passenger';
    
    // Extract passenger count from string like "2 Passengers"
    const passengerCount = parseInt(passengers.split(' ')[0]) || 1;

    const routeMap = {
      Nairobi: {
        Mombasa: { flightNo: 'F748-101', reg: '5Y-F748', time: '08:30', returnTime: '10:50', price: 7700 },
        Ukunda: { flightNo: 'F748-205', reg: '5Y-F749', time: '11:15', returnTime: '12:50', price: 7700 },
        Malindi: { flightNo: 'F748-307', reg: '5Y-F750', time: '14:00', returnTime: '15:20', price: 9500 },
      },
      Mombasa: {
        Nairobi: { flightNo: 'F748-102', reg: '5Y-F751', time: '10:50', returnTime: '08:30', price: 7700 },
      },
      Ukunda: {
        Nairobi: { flightNo: 'F748-206', reg: '5Y-F752', time: '12:50', returnTime: '11:15', price: 7700 },
      },
      Malindi: {
        Nairobi: { flightNo: 'F748-308', reg: '5Y-F753', time: '15:20', returnTime: '14:00', price: 9500 },
      },
    };

    const route = routeMap[origin]?.[destination];
    const fallbackRoute = routeMap.Nairobi?.[destination] || routeMap[origin]?.Nairobi;
    const chosenRoute = route || fallbackRoute;

    const roundTripLabel = tripType === 'Roundtrip'
      ? `Return ${returnDate || 'selected return date'}`
      : 'One-way journey';

    const result = {
      origin,
      destination,
      departDate,
      returnDate,
      passengers,
      tripType,
      flightNo: chosenRoute?.flightNo || 'F748-101',
      reg: chosenRoute?.reg || '5Y-F748',
      departTime: chosenRoute?.time || '08:30',
      returnTime: chosenRoute?.returnTime || '10:50',
      pricePerPassenger: chosenRoute?.price || 7700,
      totalPrice: (chosenRoute?.price || 7700) * passengerCount,
      passengerCount,
      roundTripLabel,
    };

    setSubmitted(result);
    setShowPassengerForm(false);
    setPassengerInfo({
      fullName: '',
      idNumber: '',
      passengerType: 'Adult',
      phone: '',
      email: '',
      specialRequest: '',
    });
    setFormError('');

    requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const homePage = (
    <HomePage
      heroSlides={heroSlides}
      activeHero={activeHero}
      setActiveHero={setActiveHero}
      tripType={tripType}
      setTripType={setTripType}
      booking={booking}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
      submitted={submitted}
      resultRef={resultRef}
      topRoutes={topRoutes}
      aboutLinks={aboutLinks}
      travelInfo={travelInfo}
      whyCards={whyCards}
      supportLinks={supportLinks}
      fleetItems={fleetItems}
      destinations={destinations}
      footerLinks={footerLinks}
      showPassengerForm={showPassengerForm}
      setShowPassengerForm={setShowPassengerForm}
      passengerInfo={passengerInfo}
      setPassengerInfo={setPassengerInfo}
      formError={formError}
      setFormError={setFormError}
    />
  );

  return (
    <HashRouter>
      <div className="App">
        <a className="skip-link" href="#MainContent">Skip to content</a>

        <header className="page-header">
        <div className="f748-container">
          <div className="f748-main-bar f748-main-bar--simple">
            <Link to="/" className="f748-logo">
              <img src="/logo.png" alt="Fly 748" />
            </Link>
            <div className="f748-header-actions">
              <button
                type="button"
                className="f748-sign-in"
                onClick={() => {
                  setIsSigninOpen(true);
                  setSigninStage('email');
                  setSigninMessage('');
                  setSigninOtp('');
                  setSentOtp('');
                  if (isSignedIn) {
                    setIsSigninOpen(false);
                  }
                }}
              >
                {isSignedIn ? 'Signed In' : 'Sign In'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main id="MainContent">
        {isSigninOpen && (
          <section className="signin-panel" aria-label="Sign in panel">
            <div className="signin-card">
              <div className="signin-card-header">
                <h2>{isSignedIn ? 'Welcome back' : 'Sign in to Fly 748'}</h2>
                <button type="button" className="signin-close" onClick={() => { setIsSigninOpen(false); setSigninStage('email'); setSigninOtp(''); setSigninMessage(''); setSentOtp(''); }}>×</button>
              </div>
              <p>{isSignedIn ? 'You are signed in and can continue with your booking.' : 'Enter your email to receive a one-time passcode.'}</p>
              {signinMessage && <div className="signin-message">{signinMessage}</div>}
              {signinStage === 'email' ? (
                <form onSubmit={handleSignInEmail} className="signin-form">
                  <label>
                    Email address
                    <input type="email" value={signinEmail} onChange={event => setSigninEmail(event.target.value)} placeholder="you@example.com" />
                  </label>
                  <button type="submit" className="button button-primary">Send OTP</button>
                </form>
              ) : (
                <form onSubmit={handleSignInOtp} className="signin-form">
                  <label>
                    One-time passcode
                    <input type="text" value={signinOtp} onChange={event => setSigninOtp(event.target.value)} placeholder="123456" />
                  </label>
                  <button type="submit" className="button button-primary">Verify OTP</button>
                  <button type="button" className="button button-secondary" onClick={() => { setSigninStage('email'); setSigninOtp(''); setSigninMessage(''); setSentOtp(''); }}>Back</button>
                </form>
              )}
            </div>
          </section>
        )}
        <Routes>
          <Route path="/" element={homePage} />
          <Route path="/booking" element={homePage} />
          <Route path="/schedule" element={homePage} />
          <Route path="/pages/news" element={<NewsPage />} />
          <Route path="/pages/about-us" element={<AboutUsPage />} />
          <Route path="/pages/csr" element={<CSRPage />} />
          <Route path="/pages/travel-info" element={<TravelInfoPage />} />
          <Route path="/pages/contact" element={<ContactPage />} />
          <Route path="/pages/schedule" element={<SchedulePage />} />
          <Route path="/pages/mombasa" element={<MombasaPage />} />
          <Route path="/pages/ukunda" element={<UkundaPage />} />
          <Route path="/pages/press-room" element={<PressRoomPage />} />
          <Route path="/pages/terms-and-conditions" element={<TermsPage />} />
          <Route path="/pages/privacy-policy" element={<PrivacyPage />} />
          <Route path="/pages/:pageId" element={<PageRouter />} />
          <Route path="*" element={<RouteNotFoundPage />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer-widgets">
          <div className="footer-column footer-brand">
            <img className="footer-logo" src="/logo.png" alt="Fly 748" />
          </div>
          <div className="footer-column footer-menu">
            <span className="footer-heading">Quick Links</span>
            <ul className="footer-list">
              {footerLinks.slice(0, 5).map(link => (
                <li key={link.title} className="footer-item">
                  <Link to={link.path} className="footer-link">{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column footer-menu">
            <span className="footer-heading">Destinations</span>
            <ul className="footer-list">
              {destinations.map(dest => (
                <li key={dest.title} className="footer-item">
                  <Link to={dest.path} className="footer-link">{dest.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column footer-contact">
            <span className="footer-heading">Contact</span>
            <p>Fly 748 - Hangar 23, Wilson Airport</p>
            <p>Fly 748 - JKIA, Terminal 2</p>
            <span className="footer-heading small-heading">Office Lines</span>
            <p>+254738844990</p>
            <p>020 201 9056</p>
            <p>Call us from: 5:00AM - 10:00PM</p>
            <p>Email us anytime:</p>
            <p className="footer-contact-email">customerdesk@fly748.co.ke</p>
          </div>
        </div>
        <p className="footer-copy">© 2026 Fly 748. All rights reserved.</p>
      </footer>
    </div>
  </HashRouter>
  );
}

export default App;
