import axios from 'axios'

// Base API URL for centralization
const API_BASE_URL =
  (import.meta.env.PROD || window.location.hostname === 'app.berkompeten.id')
    ? 'https://gateway.berkompeten.id/api'
    : '/api'

// Create axios instance with default configuration
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // Increased timeout for potentially slow connections
  headers: {
    'Content-Type': 'application/json',
  },
})

// In-memory request cache for frequently accessed data
const cache = new Map()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes in milliseconds

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized errors globally
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token')
      localStorage.removeItem('profile')
      // Only redirect if not already on login page
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

// API service with caching support
export const apiService = {
  /**
   * GET request with optional caching
   * @param {string} endpoint - API endpoint
   * @param {Object} params - URL parameters
   * @param {Object} options - Additional options
   * @param {boolean} options.useCache - Whether to use caching
   * @param {number} options.cacheDuration - Custom cache duration in ms
   * @returns {Promise} - API response
   */
  async get(endpoint, params = {}, options = {}) {
    const useCache = options.useCache !== false
    const cacheDuration = options.cacheDuration || CACHE_DURATION
    
    // Generate cache key from endpoint and params
    const cacheKey = `${endpoint}?${JSON.stringify(params)}`
    
    // Check if we have a valid cached response
    if (useCache && cache.has(cacheKey)) {
      const cachedData = cache.get(cacheKey)
      if (Date.now() < cachedData.expiry) {
        return Promise.resolve(cachedData.data)
      }
      // Cache expired, remove it
      cache.delete(cacheKey)
    }
    
    try {
      const response = await apiClient.get(endpoint, { params })
      
      // Cache the response if caching is enabled
      if (useCache) {
        cache.set(cacheKey, {
          data: response,
          expiry: Date.now() + cacheDuration,
        })
      }
      
      return response
    } catch (error) {
      throw error
    }
  },
  
  /**
   * POST request
   * @param {string} endpoint - API endpoint
   * @param {Object} data - Request payload
   * @param {Object} options - Additional axios options
   * @returns {Promise} - API response
   */
  async post(endpoint, data = {}, options = {}) {
    try {
      return await apiClient.post(endpoint, data, options)
    } catch (error) {
      throw error
    }
  },
  
  /**
   * PUT request
   * @param {string} endpoint - API endpoint
   * @param {Object} data - Request payload
   * @param {Object} options - Additional axios options
   * @returns {Promise} - API response
   */
  async put(endpoint, data = {}, options = {}) {
    try {
      return await apiClient.put(endpoint, data, options)
    } catch (error) {
      throw error
    }
  },
  
  /**
   * DELETE request
   * @param {string} endpoint - API endpoint
   * @param {Object} options - Additional axios options
   * @returns {Promise} - API response
   */
  async delete(endpoint, options = {}) {
    try {
      return await apiClient.delete(endpoint, options)
    } catch (error) {
      throw error
    }
  },
  
  /**
   * Clear entire cache or specific endpoint cache
   * @param {string} endpoint - Optional specific endpoint to clear
   */
  clearCache(endpoint = null) {
    if (endpoint) {
      // Clear specific endpoint cache entries
      for (const key of cache.keys()) {
        if (key.startsWith(endpoint)) {
          cache.delete(key)
        }
      }
    } else {
      // Clear all cache
      cache.clear()
    }
  }
}

export default apiClient 
