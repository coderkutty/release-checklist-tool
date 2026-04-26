# Release Checklist Tool

## Features
- Create a release
- View all releases
- Toggle steps
- Auto status:
  - No steps completed → planned
  - Some steps completed → ongoing
  - All steps completed → done

## API Endpoints

POST /releases  
Create a new release

GET /releases  
Get all releases

PUT /releases/:id/step  
Toggle step status

## Data Structure

Release:
- id
- name
- date
- info
- steps (array of booleans)
- status (computed)

## Database Schema (Proposed)

Table: releases

- id (integer, primary key)
- name (text)
- date (timestamp)
- info (text)
- steps (json/jsonb)
- status (text)

## Application Type

- Single Page Application (SPA)
- Built using HTML, CSS, JavaScript
- Frontend communicates with backend using REST APIs

## How to Run

1. Start backend:
   node server.js

2. Open frontend:
   Open index.html in browser

## Deployment

Frontend can be deployed on Vercel.  
Backend can be deployed on Render.

Due to time constraints, the application currently runs locally.

## Notes

- Uses in-memory storage for simplicity
- Can be extended to PostgreSQL or MySQL easily