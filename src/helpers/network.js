import queryString from "query-string"

const CAT_API_URL = "https://api.thecatapi.com";
const API_KEY = "3992842d-8a6c-4043-aa36-c18a4bf78c01";

export const GET = async ({ url, data, headers = {} }, callback) => {
  try {
    const res = await fetch(`${CAT_API_URL}\\${url}?${queryString.stringify(data)}`, {
      method: 'FETCH',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        ...headers
      }
    })

    const jsonResponse = await res.json()

    return res.ok ? callback(null, jsonResponse) : callback(jsonResponse, null)
  } catch (error) {
    callback({ message: "Request failed" })
  }
}

export const POST = async ({ url, data, headers = {} }, callback) => {
  try {
    const res = await fetch(`${CAT_API_URL}\\${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        ...headers,
      },
      body: JSON.stringify(data),
    })

    const jsonResponse = await res.json()

    return res.ok ? callback(null, jsonResponse) : callback(jsonResponse, null)
  } catch (error) {
    callback({ message: "Request failed" })
  }
}