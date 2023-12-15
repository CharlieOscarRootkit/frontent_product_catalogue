
const fetchCategoriesAll = async () => {
  try {
    // Make a GET request to the API endpoint
    const res = await fetch('http://localhost:1337/api/categories/?populate=*', {
      method: 'GET',
      headers: {
        'Cache-Control': 'public, max-age=3600', // Set caching duration to 1 hour
      },
      next: {
        revalidate: 3600, // Revalidate at most every hour
        tags: ['categories'], // Cache tag for on-demand revalidation
      },
    });

    // Check if the response is successful
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    // Parse the JSON response and return the data
    return res.json();
  } catch (error) {
    // Handle any errors during the fetch operation
    throw new Error(`Error fetching data: ${error.message}`);
    return false
  }
}


const fetchCategories = async () => {
  try {
    // Make a GET request to the API endpoint
    const res = await fetch('http://localhost:1337/api/categories/', {
      method: 'GET',
      headers: {
        'Cache-Control': 'public, max-age=3600', // Set caching duration to 1 hour
      },
      next: {
        revalidate: 3600, // Revalidate at most every hour
        tags: ['categories'], // Cache tag for on-demand revalidation
      },
    });

    // Check if the response is successful
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    // Parse the JSON response and return the data
    return res.json();
  } catch (error) {
    // Handle any errors during the fetch operation
    throw new Error(`Error fetching data: ${error.message}`);
      return false
  }
}



// utils/api.js (create a separate file for utility functions)

/**
 * Fetch a single category by ID from the specified API endpoint with caching and revalidation.
 * @param {string} categoryId - The ID of the category to fetch.
 * @returns {Promise<Object>} A promise that resolves to the fetched JSON data.
 * @throws {Error} If the fetch request is not successful.
 */
const fetchSingleCategory = async  (categoryId) => {
  try {
    // Construct the URL with the provided category ID
    const url = `http://localhost:1337/api/categories/${categoryId}/?populate=*`;

    // Make a GET request to the category API endpoint
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Cache-Control': 'public, max-age=3600', // Set caching duration to 1 hour
      },
      next: {
        revalidate: 3600, // Revalidate at most every hour
        tags: [`category-${categoryId}`], // Cache tag for on-demand revalidation
      },
    });

    // Check if the response is successful
    if (!res.ok) {
      throw new Error('Failed to fetch category data');
    }

    // Parse the JSON response and return the data
    return res.json();
  } catch (error) {
    // Handle any errors during the fetch operation
    throw new Error(`Error fetching category data: ${error.message}`);
      return false
  }
}

const fetchFaqs = async () => {
  try {
    // Construct the URL for fetching FAQs
    const url = 'http://localhost:1337/api/faqs';

    // Make a GET request to the FAQs API endpoint
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Cache-Control': 'public, max-age=3600', // Set caching duration to 1 hour
      },
      next: {
        revalidate: 3600, // Revalidate at most every hour
        tags: ['faqs'], // Cache tag for on-demand revalidation
      },
    });

    // Check if the response is successful
    if (!res.ok) {
      throw new Error('Failed to fetch FAQs data');
    }

    // Parse the JSON response and return the data
    return res.json();
  } catch (error) {
    // Handle any errors during the fetch operation
    throw new Error(`Error fetching FAQs data: ${error.message}`);
    return false
  }
};



export {fetchCategories,fetchSingleCategory,fetchCategoriesAll,fetchFaqs}
