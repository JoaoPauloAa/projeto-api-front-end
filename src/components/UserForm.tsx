import React, { useState } from 'react';
import { User } from '../types/user';
interface UserFormProps {
onUserAdded: (user: User) => Promise<void>;
}
export const UserForm: React.FC<UserFormProps> = ({ onUserAdded }) =>
{
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const handleSubmit = async (e: React.FormEvent) => {e.preventDefault();
if (!name || !email || !password) return;
await onUserAdded({ name, email, password });
setName('');
setEmail('');
setPassword('');
};

return (
<form onSubmit={handleSubmit} style={{ marginBottom: '20px',
display: 'flex', flexDirection: 'column', gap: '10px', maxWidth:
'300px' }}>
<h3>Cadastrar Novo Usuário</h3>
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
placeholder="Nome completo"
required
/>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="E-mail"
required
/>
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
placeholder="Senha"
required
/>
<button type="submit">Cadastrar no Banco</button>
</form>
);
};