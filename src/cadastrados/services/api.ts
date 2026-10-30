const API_BASE_URL = import.meta.env.VITE_API_URL ||

'http://localhost:3000';
export async function getUsers(): Promise<User[]> {
const response = await fetch(`${API_BASE_URL}/users`);
if (!response.ok) throw new Error('Falha ao buscar usuários');
return response.json();
}
export async function createUser(userData: User): Promise<User> {
const response = await fetch(`${API_BASE_URL}/users`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(userData),});
if (!response.ok) {
const errorData = await response.json();
throw new Error(errorData.message || 'Falha ao cadastrar usuário');
}
return response.json();
}