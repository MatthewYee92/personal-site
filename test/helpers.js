const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Matthew Yee',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Matthew Yee',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Matthew Yee',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Matthew Yee',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Matthew Yee',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
