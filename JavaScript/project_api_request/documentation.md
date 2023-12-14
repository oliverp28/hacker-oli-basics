# Read.ME - Stratton Oakmont Documentation

## Overview

Welcome to Stratton Oakmont, a financial platform designed to provide users with real-time information on stock and cryptocurrency values. This documentation outlines the functionality, structure, installation process, and API integration of the platform.

## Functionality

Stratton Oakmont allows users to track the current value and trends of stocks or cryptocurrencies over a specified period. Users can customize their search period from 10 to 200 days in 10-day increments. The main features include:

- **Navigation Menu:** Access the main sections, including "Home," "About," "Contact," and "FAQ."
- **Search Functionality:** Use the search bar to input stock or cryptocurrency abbreviations (e.g., AAPL for Apple).
- **Cryptocurrency Support:** For cryptocurrencies like Bitcoin (BTC), users must check the "Crypto?" checkbox to handle API requests correctly.
- **Abbreviation List:** Explore a list of example abbreviations for popular stocks and cryptocurrencies.
- **Date Range Selection:** Choose a search period from 10 to 200 days in 10-day increments.

After submitting a search, a loading icon indicates successful submission, with feedback on data processing and output.

## Structure

1. **Logo and Navigation:** Stratton Oakmont's logo and navigation menu with "Home," "About," "Contact," and "FAQ" sections.
2. **Search Functionality:** Input stock or cryptocurrency abbreviations, with a checkbox for cryptocurrencies and an "Abbreviation list" button.
3. **Date Range Selection:** Set the desired time frame for returned data.
4. **Results Table:** Dynamically sized table displaying sorted data by date, including opening price, daily high and low, and trade volume.

## Installation

To run the platform, download the files and launch "webpage.html." The platform is fully functional upon startup.

## API Integration

Stratton Oakmont utilizes the Alpha Vantage API from rapidapi.com to retrieve financial data. A pre-configured API key is included in the project files. Note that the free version of the API allows a maximum of 5 requests per minute.

### Important Note
**Before running the webpage in the browser, you still need to insert your key using: https://rapidapi.com/alphavantage/api/alpha-vantage (14.12.23).**

Upon page load, an initial request for Bitcoin (BTC) data is automatically made. This serves as a demonstration and ensures proper API functionality.

Feel free to explore Stratton Oakmont and leverage its features for insightful financial data analysis. If you encounter any issues or have feedback, please use the "Contact" section to reach our team. Happy investing!