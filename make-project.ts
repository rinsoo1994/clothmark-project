import s from 'shelljs';

const config = require('./tsconfig.json');
const outDir = config.compilerOptions.outDir;

s.rm('-rf', outDir);

s.mkdir(outDir);
s.cp('.env', `${outDir}/.env`);

s.mkdir('-p', `${outDir}/tsoa/swagger`);
s.cp('server/tsoa/swagger.yaml', `${outDir}/tsoa/swagger.yaml`);