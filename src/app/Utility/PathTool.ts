import { environment } from '../../environments/environment';

export const DomainName = environment.production
  ? 'https://toplearn.com'
  : 'https://localhost:44339/api';
