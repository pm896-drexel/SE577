export type GithubConfig = {
    username: string;
    token: string;
}

const config: GithubConfig = require('./ghconfig.json');
export const username = config.username;
export const token = config.token;
