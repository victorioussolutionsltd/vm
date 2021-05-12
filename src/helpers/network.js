import queryString from "query-string"

const CAT_API_URL = "https://api.thecatapi.com";
const API_KEY = "22b3467e-4c5d-4ad9-b5f8-923750d32c0d";

export const GET = async ({ url, data = null, headers = {} }, callback) => {
  try {

    const webUrl = data ? `${CAT_API_URL}${url}?${queryString.stringify(data)}` :
      `${CAT_API_URL}${url}`;

    const res = await fetch(webUrl, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        ...headers,
      }
    })

    const responseHeaders = res.headers;

    const jsonResponse = await res.json()

    return res.ok ? callback(null, jsonResponse, responseHeaders) : callback(jsonResponse, null)
  } catch (error) {
    callback({ message: "Request failed" })
  }
}

export const POST = async ({ url, data, headers = {} }, callback) => {
  try {
    const res = await fetch(`${CAT_API_URL}${url}`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'x-api-key': API_KEY,
        ...headers,
      },
      body: data,
    })

    const jsonResponse = await res.json()

    return res.ok ? callback(null, jsonResponse) : callback(jsonResponse, null)
  } catch (error) {
    callback({ message: "Request failed" })
  }
}

export const DELETE = async ({ url, headers = {} }, callback) => {
  try {
    const res = await fetch(`${CAT_API_URL}${url}`, {
      method: 'DELETE',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        ...headers,
      }
    })

    const jsonResponse = await res.json()

    return res.ok ? callback(null, jsonResponse) : callback(jsonResponse, null)
  } catch (error) {

    callback({ message: "Request failed" })
  }
}