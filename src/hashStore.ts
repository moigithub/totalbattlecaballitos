import { StateStorage } from 'zustand/middleware'

export const hashStorage: StateStorage = {
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
    localStorage.setItem('tbcalc', decodeURIComponent(searchParams.toString()))
  },
  removeItem: (key): void => {
    const searchParams = new URLSearchParams(location.hash.slice(1))
    searchParams.delete(key)
    location.hash = searchParams.toString()
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
