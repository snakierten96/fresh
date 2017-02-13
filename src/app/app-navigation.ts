export interface INavItem {
  path: string | string[],
  title: string,
  icon: string
}

export const NAVITEMS: INavItem[] = [
  {
    path: ['/'],
    title: 'Home',
    icon: 'home'
  },
  {
    path: ['/','category'],
    title: 'Category',
    icon: 'list'
  }
];