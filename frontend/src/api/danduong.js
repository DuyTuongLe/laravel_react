const API_URL = import.meta.env.VITE_API_URL;

async function handleResponse(res) {
  const data = await res.json();
  if (!res.ok) throw data;
  return data;
}

// ✅ LẤY MENU PRODUCT
export async function getMenuProduct() {
  const res = await fetch(`${API_URL}/menu/kieu/product`);
  return handleResponse(res);
}

// (nếu cần)
export async function getMenuFull() {
  const res = await fetch(`${API_URL}/menu/full`);
  return handleResponse(res);
}

