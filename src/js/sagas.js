import moducks from './modules/moducks';
import { sagas as test } from './modules/test';

export default moducks.util.flattenSagas({
  test,
});
