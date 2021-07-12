import BasicLayout from './BasicLayout';
import BlankLayout from './BlankLayout';

export enum LayoutType {
  blank,
  basic
}

const Layout = (type: LayoutType) => {
  switch (type) {
    case LayoutType.blank:
      return BlankLayout;
    case LayoutType.basic:
      return BasicLayout;
    default:
      return BlankLayout;
  }
};

export default Layout;
