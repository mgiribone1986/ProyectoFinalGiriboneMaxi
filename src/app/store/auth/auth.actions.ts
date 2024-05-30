import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LoginData } from '../../layouts/auth/models';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    login: props<{ payload: LoginData }>(),
    logout: emptyProps(),
  },
});
