import type { NextApiRequest, NextApiResponse } from 'next';

export default function Techs(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return res.status(405).end();
    
    return res.json([
        [ "JavaScript", "javascript.svg" ],
        [ "TypeScript", "typescript.png" ],
        [ "Java", "java.png" ],
        [ "React", "react.svg" ],
        [ "Vue", "vue.png" ],
        [ "Svelte", "svelte.png" ],
        [ "Next.js", "next.svg" ],
        [ "Nuxt.js", "nuxt.svg" ],
        [ "Alpine.js", "alpine.svg" ],
        [ "Bootstrap", "bootstrap.svg" ],
        [ "Bulma", "bulma.svg" ],
        [ "CSS", "css.svg" ],
        [ "HTML", "html.svg" ],
        [ "Electron.js", "electron.svg" ],
        [ "Express.js", "express.svg" ],
        [ "Font Awesome", "fontawesome.png" ],
        [ "Framer Motion", "framer.svg" ],
        [ "Git", "git.svg" ],
        [ "GitHub", "github.svg" ],
        [ "HeadlessUI", "headless.png" ],
        [ "IconScout", "iconscout.png" ],
        [ "MongoDB", "mongo.svg" ],
        [ "MySQL", "mysql.png" ],
        [ "Node.js", "node.svg" ],
        [ "PHP", "php.svg" ],
        [ "Sass", "sass.svg" ],
        [ "TailwindCSS", "tailwind.svg" ],
        [ "Chakra UI", "chakra.png" ],
        [ "Vercel", "vercel.svg" ],
        [ "Webpack", "webpack.svg" ],
        [ "Yarn", "yarn.svg" ],
        [ "Firebase", "firebase.png" ],
    ]);
};