const API_URL = import.meta.env.VITE_API_URL;

async function handleResponse(res) {
  const data = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data;
}

export async function getDanduong() {
  const res = await fetch(`${API_URL}/danduong`);
  return handleResponse(res);
}

export async function createDanduong(data) {
  const res = await fetch(`${API_URL}/danduong`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return handleResponse(res);
}

export async function updateDanduong(id, data) {
  const res = await fetch(`${API_URL}/danduong/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return handleResponse(res);
}

export async function deleteDanduong(id) {
  const res = await fetch(`${API_URL}/danduong/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(res);
}
