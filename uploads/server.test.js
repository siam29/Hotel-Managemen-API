const request = require('supertest');
const app = require('./server'); // Import the app from your server.js
const path = require('path');

describe('Hotel API Endpoints', () => {
  
  // Test for GET /hotels
  it('GET /hotels - should return a list of hotels', async () => {
    const response = await request(app).get('/hotels');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  // Test for GET /hotels/:id
  it('GET /hotels/:id - should return a hotel by ID', async () => {
    const hotelId = 1; // Use an existing ID in hotels.json for testing
    const response = await request(app).get(`/hotels/${hotelId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', hotelId);
  });

  // Test for POST /hotels
  it('POST /hotels - should create a new hotel', async () => {
    const newHotel = {
      title: "Test Hotel",
      location: "Test Location",
      rooms: 5,
      rating: 4,
      description: "A test hotel",
      guest_count: 2,
      bedroom_count: 1,
      bathroom_count: 1,
      amenities: ["WiFi", "Air Conditioning"],
      host_information: "Host details",
      address: "123 Test St",
      latitude: "0.000",
      longitude: "0.000",
      room_information: "Room details"
    };
    const response = await request(app).post('/hotels').send(newHotel);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('title', newHotel.title);
  });

  // Test for PUT /hotels/:id
  it('PUT /hotels/:id - should update an existing hotel', async () => {
    const hotelId = 1; // Use an existing ID in hotels.json for testing
    const updatedData = { title: "Updated Test Hotel" };
    const response = await request(app).put(`/hotels/${hotelId}`).send(updatedData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('title', updatedData.title);
  });

  // Test for POST /hotels/images
  it('POST /hotels/images - should upload images and update hotel', async () => {
    const hotelId = 1; // Use an existing ID in hotels.json for testing
    const response = await request(app)
      .post('/hotels/images') // Make sure this matches the server route
      .field('hotelId', hotelId)
      .attach('images', path.join(__dirname, 'uploads/image1.jpg')); // Ensure this path points to a valid image

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Images uploaded successfully');
    expect(response.body.images[0]).toMatch(/^\/uploads\//); // Check if the image path starts with /uploads/
  });
});

