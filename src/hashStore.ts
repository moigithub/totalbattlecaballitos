import { StateStorage } from 'zustand/middleware'

/* const hashStorage: StateStorage = {
  getItem: (key): string => {
    const searchParams = new URLSearchParams(location.hash.slice(1))
    const value = searchParams.get(key)

    // Helper function to decode the hash
    return decodeHash(String(value))
  },
  setItem: (key, newValue): void => {
    const searchParams = new URLSearchParams(location.hash.slice(1))
    // Helper function to encode the hash
    const encodedValue = encodeHash(newValue)
    searchParams.set(key, encodedValue)
    location.hash = searchParams.toString()

    // also save it on localstorage
    localStorage.setItem('tbstacks', encodedValue)
  },
  removeItem: (key): void => {
    const searchParams = new URLSearchParams(location.hash.slice(1))
    searchParams.delete(key)
    location.hash = searchParams.toString()
  }
}*/

export const customLocalStorage: StateStorage = {
  getItem: key => {
    if (location.search) {
      // have values preference from search, ignore localstorage
      const searchParams = new URLSearchParams(location.search)
      const value = searchParams.get(key)

      // Helper function to decode the search
      return decodeHash(String(value))
    }
    console.log('zustand:storage:getItem key', key)

    const value = localStorage.getItem(key)
    // Helper function to decode the hash
    return decodeHash(String(value))
  }, // Read only hashed value
  setItem: (key, value) => {
    console.log('zustand:storage:setItem key:value', key, value)
    const encodedValue = encodeHash(value)
    localStorage.setItem(key, encodedValue)

    //https://url.com/#stacks=
    const searchParams = new URLSearchParams(location.search)
    searchParams.set('stacks', encodedValue)
    // location.hash = searchParams.toString()
    window.history.replaceState(null, '', `?${searchParams.toString()}`)
  }, // Store only hashed value
  removeItem: (key: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.delete(key)
    window.history.replaceState(null, '', `?${searchParams.toString()}`)
    localStorage.removeItem(key)
  }
}

/**
 * Decodes a string that has been encoded using base64 and URI encoding.
 * @param {string} str - The string to decode.
 * @returns {string} The decoded string.
 */
export function decodeHash(str: string) {
  // Decode the base64-encoded string.
  const decoded = atob(str)
  // Convert each character to its corresponding URI-encoded value.
  const uriEncoded = Array.prototype.map.call(decoded, function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  })
  return decodeURIComponent(uriEncoded.join(''))
}

/**
 * Encodes a string using URI encoding and base64 encoding.
 * @param {string} str - The string to encode.
 * @returns {string} The encoded string.
 */
export function encodeHash(str: string) {
  // URI-encode the string and replace each URI-encoded character with its corresponding base64-encoded value.
  const base64Encoded = btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (_match, p1) {
      return String.fromCharCode(parseInt(p1, 16))
    })
  )
  return base64Encoded
}

// const debounce = <T extends unknown[]>(
//   callback: (...args: T) => void,
//   delay: number,
// ) => {
//   let timeoutTimer: ReturnType<typeof setTimeout>;

//   return (...args: T) => {
//     clearTimeout(timeoutTimer);

//     timeoutTimer = setTimeout(() => {
//       callback(...args);
//     }, delay);
//   };
// };
