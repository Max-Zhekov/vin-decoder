# VIN Decoder

A web application for decoding vehicle VIN codes using the public NHTSA
(vPIC) API.

👉 **Live demo:**\
https://vin-decoder-for-abp.netlify.app/

------------------------------------------------------------------------

## Project Overview

This application allows users to enter a vehicle VIN code, decode it,
and view vehicle characteristics in a clear and user-friendly format.\
It also includes a page with all available vehicle variables and a
separate page with detailed information for each variable.

The project is implemented as a Single Page Application (SPA) using
React.

------------------------------------------------------------------------

## Features

### VIN Decoder

-   VIN code input with basic validation (length and allowed characters)
-   Fetching decoded data from the NHTSA API
-   Displaying API response messages and decoded vehicle characteristics
-   History of the last three decoded VIN codes
-   Ability to re-apply a VIN from history

### Variables

-   Page with a list of all available vehicle variables from the NHTSA
    API
-   Navigation to a dedicated page for each variable by its ID
-   Detailed variable description display
-   Data caching using TanStack Query

### Additional

-   Loading and error state handling
-   Responsive, minimalist layout (420--1440 px)
-   Client-side routing
-   Custom 404 page

------------------------------------------------------------------------

## Tech Stack

-   React
-   TypeScript
-   React Router
-   TanStack Query
-   Vite
-   CSS Modules (BEM methodology)
-   API: https://vpic.nhtsa.dot.gov/api/

------------------------------------------------------------------------

## Local Setup

1.  Clone the repository:

``` bash
git clone <repository-url>
```

2.  Navigate to the project directory:

``` bash
cd vin-decoder
```

3.  Install dependencies:

``` bash
npm install
```

4.  Start the development server:

``` bash
npm run dev
```

5.  Open in your browser:

```{=html}
<!-- -->
```
    http://localhost:5173

------------------------------------------------------------------------

## Notes

The application is deployed on Netlify and uses client-side routing
without a backend.
