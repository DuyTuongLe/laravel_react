const API_URL = import.meta.env.VITE_API_URL;

async function handleResponse(res) {
  const data = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data;
}

export async function getCauhinh() {
  const res = await fetch(`${API_URL}/cauhinh`);
  return handleResponse(res);
}

export async function createCauhinh(data) {
  const res = await fetch(`${API_URL}/cauhinh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return handleResponse(res);
}

export async function updateCauhinh(id, data) {
  const res = await fetch(`${API_URL}/cauhinh/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return handleResponse(res);
}

export async function deleteCauhinh(id) {
  const res = await fetch(`${API_URL}/cauhinh/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(res);
}
