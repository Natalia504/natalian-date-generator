export function getThings(data) {
  return fetch('/api/get-things', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // "Content-Type": "application/x-www-form-urlencoded",
    },
  }).then(res => res.json());
}
