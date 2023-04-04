import { useContext } from 'react';
import { AuthContext } from '../contexts/auth/supabase-context';

export const useAuth = () => useContext(AuthContext);
