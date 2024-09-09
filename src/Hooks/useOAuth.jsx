import { useContext } from 'react';
import { OAuthServices } from '../Providers/Firebase/OAuth';

const useOAuth = () => {
   const OAuth = useContext(OAuthServices);
   return OAuth;
};

export default useOAuth;