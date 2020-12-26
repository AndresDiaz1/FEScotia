import { AccountState } from './accounts/AccountTypes';
import { DetailState } from './details/DetailsTypes';
import { LoginState } from './login/LoginTypes';

export default interface State {
  login: LoginState;
  accounts: AccountState;
  details: DetailState;
}
