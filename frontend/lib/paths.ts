import { isProduction } from 'lib/env';
import { RouteComponentProps } from 'react-router-dom';

const BASE = isProduction()
  ? 'http://127.0.0.1:3000' // TODO add prod url if/when necessary
  : 'http://127.0.0.1:3000';

enum PathKey {
  home,
  graphql,
}

const PathValues = {
  [PathKey.home]: '/',
  [PathKey.graphql]: '/graphql',
}

const pathFor = (pathKey: PathKey): string => PathValues[pathKey];

const navigateToPath = (
  routerHistory: RouteComponentProps["history"],
  pathKey: PathKey,
) => routerHistory.push(pathFor(pathKey));

const urlForPathKey = (pathKey: PathKey): string => `${BASE}${pathFor(pathKey)}`;

const navigateToExternalLink: (link: string) => void = (link) => {
  window.open(link, '_blank');
};

export {
  PathKey,
  urlForPathKey,
  navigateToPath,
  navigateToExternalLink,
  pathFor,
};