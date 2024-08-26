export const login = () => ({
    type: 'LOGIN' as const,
  });
  
  export const logout = () => ({
    type: 'LOGOUT' as const,
  });
  
  export type LoginActions = ReturnType<typeof login | typeof logout>;