import { createContext, useCallback, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { createClient } from '@supabase/supabase-js';
import { Issuer } from '../../utils/auth';

const supabaseUrl = 'https://dveuwgeqiwnbrmahlfpn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2ZXV3Z2VxaXduYnJtYWhsZnBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1MDk5NTAsImV4cCI6MTk5NjA4NTk1MH0.p-lE2smvf_gcyFJBFseaRR1WnCZxDjTuOoE91AtQbB8';

const supabase = createClient(supabaseUrl, supabaseAnonKey);


var ActionType;
(function (ActionType) {
  ActionType['AUTH_STATE_CHANGED'] = 'AUTH_STATE_CHANGED';
})(ActionType || (ActionType = {}));

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const reducer = (state, action) => {
  if (action.type === 'AUTH_STATE_CHANGED') {
    const { isAuthenticated, user } = action.payload;
       return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  }

  return state;
};

export const AuthContext = createContext({
  ...initialState,
  issuer: Issuer.Supabase,
  createUserWithEmailAndPassword: () => Promise.resolve(),
  signInWithEmailAndPassword: () => Promise.resolve(),
  signInWithGoogle: () => Promise.resolve(),
  signOut: () => Promise.resolve()
});

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAuthStateChanged = useCallback((event, session) => {
    if (session?.user) {
      const user = session.user;

      dispatch({
        type: ActionType.AUTH_STATE_CHANGED,
        payload: {
          isAuthenticated: true,
          user: {
            id: user.id,
            avatar: user.avatar_url || undefined,
            email: user.email || 'anika.visser@devias.io',
            name: user.user_metadata.full_name || user.email,
            plan: 'Premium'
          }
        }
      });
    } else {
      dispatch({
        type: ActionType.AUTH_STATE_CHANGED,
        payload: {
          isAuthenticated: false,
          user: null
        }
      });
    }
  }, [dispatch]);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(handleAuthStateChanged);
    handleAuthStateChanged(null, supabase.auth.session());

    return () => authListener.unsubscribe();
  }, []);

  const _signInWithEmailAndPassword = useCallback(async (email, password) => {
    await supabase.auth.signIn({ email, password });
  }, []);

  const signInWithGoogle = useCallback(async () => {
        await supabase.auth.signIn({ provider: 'google' });
  }, []);

  const _createUserWithEmailAndPassword = useCallback(async (email, password) => {
    await supabase.auth.signUp({ email, password });
  }, []);

  const _signOut = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        issuer: Issuer.Supabase,
        createUserWithEmailAndPassword: _createUserWithEmailAndPassword,
        signInWithEmailAndPassword: _signInWithEmailAndPassword,
        signInWithGoogle,
        signOut: _signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const AuthConsumer = AuthContext.Consumer;