# Hotel Management API

A simple and powerful API for managing hotels, including functionality to get hotel details, add new hotels, update hotel information, and upload images for hotels. This project is built with **Node.js**, **Express.js**, and **Multer** for handling file uploads.

## Features

This project provides the following API endpoints:

### 1. **Get a list of all hotels**
   - **Endpoint**: `GET /hotels`
   - **Description**: Retrieve a list of all hotels in the system.
   - **Response**: A JSON array of hotel objects.

### 2. **Get a hotel by ID**
   - **Endpoint**: `GET /hotels/:id`
   - **Description**: Retrieve details of a hotel by its unique ID.
   - **Parameters**: 
     - `id` (Hotel ID): The ID of the hotel you want to fetch.
   - **Response**: A JSON object containing the hotel details.

### 3. **Add a new hotel**
   - **Endpoint**: `POST /hotels`
   - **Description**: Create a new hotel entry in the system.
   - **Request Body**: A JSON object containing the following properties:
     ```json
     {
       "title": "Hotel Name",
       "location": "City, Country",
       "rooms": 10,
       "rating": 4.5,
       "description": "Hotel description",
       "guest_count": 20,
       "bedroom_count": 10,
       "bathroom_count": 5,
       "amenities": ["WiFi", "Pool", "Gym"],
       "address": "123 Street, City",
       "latitude": 12.3456,
       "longitude": 78.9012,
       "room_information": "Information about rooms"
     }
     ```
   - **Response**: The newly created hotel object.

### 4. **Update an existing hotel**
   - **Endpoint**: `PUT /hotels/:id`
   - **Description**: Update the details of an existing hotel.
   - **Parameters**: 
     - `id` (Hotel ID): The ID of the hotel you want to update.
   - **Request Body**: A JSON object containing the updated hotel details.
   - **Response**: The updated hotel object.

### 5. **Upload images for a hotel**
   - **Endpoint**: `POST /hotels/images`
   - **Description**: Upload one or more images for a hotel and update the hotel record with the new image URLs.
   - **Request Body**: Form-data containing the `hotelId` and the `images`:
     - `hotelId`: The ID of the hotel you want to associate images with.
     - `images`: The images to upload (e.g., `image1.jpg`, `image2.jpg`).
   - **Response**: A JSON object with a success message and the URLs of the uploaded images.

---

## Project Structure

```plaintext
PRACTICE/
│
├── uploads/                # Directory for storing uploaded images
│   ├── image1.jpg          # Sample image 1
│   ├── image2.jpg          # Sample image 2
│   └── image3.jpg          # Sample image 3
├── hotel-id.json           # The data file for storing hotel information
├── server.js               # Main application code
└── package.json           # npm package configuration file
└── server.test.js

```
