import {build as buildApplication} from 'fastify-cli/helper';
import path from 'node:path';
import {FastifyInstance} from 'fastify';

const AppPath = path.join(__dirname, '..', 'app.ts');

function config(): {} {
    return {};
}

async function build(t: any): Promise<FastifyInstance> {
    const argv = [AppPath];
    const app = await buildApplication(argv, config());
    t.teardown(app.close.bind(app));
    return app;
}

export {
    config,
    build
};