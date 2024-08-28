export const formSetErrorMessage = (message: string) => ({
  type: 'SET_ERROR' as const,
  payload: message,
});
export const formClearErrorMessage = () => ({
  type: 'CLEAR_ERROR' as const,
});
export const formSuccessMessage = (message: string) => ({
  type: 'SUCCESS' as const,
  payload: message,
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
  | typeof formSuccessMessage
  | typeof formLoadingStart
  | typeof formLoadingStop
>;
