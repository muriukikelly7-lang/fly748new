import os

gallery_path = r"C:\Users\KELLY\fly748-booking\public\gallery"

rename_map = {
    'team-ground-1.jpg': 'crew-pre-flight-briefing.jpg',
    'team-aircraft-1.jpg': 'pilots-at-aircraft.jpg',
    'team-cabin-crew.jpg': 'flight-attendants-team.jpg',
    'aircraft-exterior-1.jpg': 'fly748-aircraft-at-gate.jpg',
    'aircraft-exterior-2.jpg': 'atr-turboprop-aircraft.jpg',
    'aircraft-ground-team.jpg': 'ground-operations-team.jpg',
    'cabin-interior-1.jpg': 'premium-cabin-seating.jpg',
    'cabin-interior-2.jpg': 'cabin-aisle-view.jpg',
    'cabin-interior-3.jpg': 'overhead-bin-luggage.jpg',
    'aircraft-maintenance.jpg': 'aircraft-maintenance-team.jpg',
    'services-vehicle.jpg': 'ground-support-vehicle.jpg',
    'corporate-event.jpg': 'fly748-partnership-event.jpg'
}

os.chdir(gallery_path)
for old_name, new_name in rename_map.items():
    old_path = os.path.join(gallery_path, old_name)
    new_path = os.path.join(gallery_path, new_name)
    if os.path.exists(old_path):
        os.rename(old_path, new_path)
        print(f"✓ {old_name} -> {new_name}")
    else:
        print(f"✗ {old_name} not found")

print("\n✓ All images renamed!")
