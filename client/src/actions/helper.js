export function fetch(endpoint) {
  return window
    .fetch(endpoint)
    .then(response => response.json())
    .catch(error => console.log(error));
}
