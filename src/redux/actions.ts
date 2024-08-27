export const login = () => ({
    type: 'LOGIN' as const,
  });
  
  export const logout = () => ({
    type: 'LOGOUT' as const,
  });
  
  export type LoginActions = ReturnType<typeof login | typeof logout>;


  export const formSetErrorMessage = (message: string)  => ({
    type: 'SET_ERROR' as const,
    payload: message,
  });
  export const formClearErrorMessage = ()  => ({
    type: 'CLEAR_ERROR' as const,
  });
  export const formSuccessMessage = (message: string)  => ({
    type: 'SUCCESS' as const,
    payload: message,
  });

  export const formLoadingStart = () => ({
    type: 'LOADING_START' as const,
  })
  export const formLoadingStop = () => ({
    type: 'LOADING_STOP' as const,
  })
  export type FormActions = 
    ReturnType<
        typeof formSetErrorMessage 
      | typeof formClearErrorMessage
      | typeof formSuccessMessage 
      | typeof formLoadingStart
      | typeof formLoadingStop>;
