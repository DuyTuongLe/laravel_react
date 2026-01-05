const API_URL = import.meta.env.VITE_API_URL;

export async function getBanghi() {
  const res = await fetch(`${API_URL}/banghi`);
  if (!res.ok) throw new Error('Fetch failed');
  return res.json();
}

export async function createBanghi(data) {
  const res = await fetch(`${API_URL}/banghi`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateBanghi(id, data) {
  const res = await fetch(`${API_URL}/banghi/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteBanghi(id) {
  const res = await fetch(`${API_URL}/banghi/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}
