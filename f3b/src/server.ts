import app from './app';
import * as constant from './constants/app.constant';

// tslint:disable-next-line:no-console
app.listen(constant.PORT, () => console.log(`Listening on port ${constant.PORT}`));