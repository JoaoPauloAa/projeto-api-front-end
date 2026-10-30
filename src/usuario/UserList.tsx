import React from 'react';
import { User } from '../types/user';
interface UserListProps {
users: User[];
loading: boolean;
}
export const UserList: React.FC<UserListProps> = ({ users, loading })
=> {
if (loading) return <p>Carregando usuários do PostgreSQL...</p>;
if (users.length === 0) return <p>Nenhum usuário cadastrado.</p>;
return (

<div>
<h3>Usuários Cadastrados</h3>
<ul>
{users.map((user) => (
<li key={user.id}>
<strong>{user.name}</strong> ({user.email})
</li>
))}
</ul>
</div>
);
};