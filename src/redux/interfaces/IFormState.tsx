export interface IFormState {
errorMessage: string | null;
successMessage: string | null;
loading: boolean;
}
export const defaultFormState: IFormState = {
    errorMessage: null,
    successMessage: null,
    loading: false,
};