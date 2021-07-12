// import { LayoutType } from 'layouts/index';

export type RouteProps = {
  locationPath?: String;
  // layout: LayoutType;
  children: any; // rendered component
  [propName: string]: any; // route properties
};
