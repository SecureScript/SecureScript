import { useContext } from 'react';
import { AuthContext } from '../contexts/auth/amplify-context';

export const useAuth = () => useContext(AuthContext);
