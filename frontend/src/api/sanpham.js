const API_URL = import.meta.env.VITE_API_URL;

async function handleResponse(res) {
  const data = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data;
}

export async function getSanpham(page = 1) {
  const res = await fetch(`${API_URL}/sanpham?page=${page}`);
  return res.json();
}
