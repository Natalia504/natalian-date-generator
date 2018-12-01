export function getThings(data) {
  return fetch('/api/get-things',
    {
      method: 'POST',
      body: JSON.stringify(data)
    }
  ).then(res => res.json());
}
