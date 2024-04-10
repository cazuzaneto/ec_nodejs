import path from 'node:path';
import AutoLoad from '@fastify/autoload';
import {FastifyInstance, FastifyPluginAsync} from 'fastify';

const registerPlugins = async (fastify: FastifyInstance, opts: any, dir: string) => {
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, dir),
        options: {...opts},
    });
};

const app: FastifyPluginAsync = async (fastify, opts) => {
    await registerPlugins(fastify, opts, 'plugins');
    await registerPlugins(fastify, opts, 'routes');
};

export default app;