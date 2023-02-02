import config from '../../../website.config';
import fetch from 'isomorphic-unfetch';

export default async function Repos(req, res) {
    const auth = config.github_auth_token;
    const repoArray = [];

    const getRepos = async account => await (await fetch('https://api.github.com/users/' + account + '/repos', {
        headers: {
            'Authorization': 'token ' + auth
        }
    })).json();

    const livecord = await getRepos('Livecord');
    const personal = await getRepos('Swothh');

    const arr = [
        livecord?.length > 3 ? personal : livecord,
        livecord?.length > 3 ? livecord : personal,
    ];

    arr.filter(repos => Array.isArray(repos)).forEach(repos => {
        repoArray.push(...repos.sort((a, b) => (
            b.stargazers_count - a.stargazers_count
        )));
    });

    res.json(repoArray);
};