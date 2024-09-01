export interface IFormState {
  errorMessage: string | null;
  success: boolean | null;
  loading: boolean;
}
export const defaultFormState: IFormState = {
  errorMessage: null,
  success: false,
  loading: false,
};
