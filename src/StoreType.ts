import { AccountState } from './accounts/AccountTypes';
import { LoginState } from './login/LoginTypes';

export default interface State {
  login: LoginState;
  accounts: AccountState;
}
