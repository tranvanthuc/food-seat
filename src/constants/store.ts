export interface DefaultState {
  loading: boolean;
  error: any;
  message: string;
  status: boolean;
}

export const DEFAULT_STATE: DefaultState = {
  loading: false,
  error: null,
  message: '',
  status: false,
};
