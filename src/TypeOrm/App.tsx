import { useEffect, useState } from 'react';
import { User } from './types/user';
import { getUsers, createUser } from './services/api';
import { UserForm } from './components/UserForm';
import { UserList } from './components/UserList';
export function App() {
const [users, setUsers] = useState<User[]>([]);
const [loading, setLoading] = useState(true);
const carregarUsuarios = async () => {
try {
setLoading(true);
const dados = await getUsers();
setUsers(dados);
} catch (err) {
console.error('Erro ao carregar usuários:', err);
} finally {
setLoading(false);
}
};
const handleAddUser = async (novoUsuario: User) => {
try {
await createUser(novoUsuario);
await carregarUsuarios(); // Atualiza a lista vinda do PostgreSQL
} catch (err: any) {
alert(err.message || 'Erro ao cadastrar usuário.');
}
};

useEffect(() => {
carregarUsuarios();
}, []);
return (
<div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
<h1>Nitech Dashboard — Sprint 2 (João Paulo)</h1>
<UserForm onUserAdded={handleAddUser} />
<UserList users={users} loading={loading} />
</div>
);
}