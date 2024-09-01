export const formSetErrorMessage = (message: string) => ({
  type: 'SET_ERROR' as const,
  payload: message,
});
export const formClearErrorMessage = () => ({
  type: 'CLEAR_ERROR' as const,
});

export const formSubmitted = (success: boolean) => ({
  type: 'SUCCESS' as const,
  payload: success
});

export const formLoadingStart = () => ({
  type: 'LOADING_START' as const,
});
export const formLoadingStop = () => ({
  type: 'LOADING_STOP' as const,
});
export type FormActions = ReturnType<
  | typeof formSetErrorMessage
  | typeof formClearErrorMessage
  | typeof formSubmitted
  | typeof formLoadingStart
  | typeof formLoadingStop
>;
