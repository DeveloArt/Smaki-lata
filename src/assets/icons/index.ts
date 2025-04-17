import {
  FaHome,
  FaBox,
  FaUsers,
  FaStore,
  FaTruck,
  FaSignOutAlt,
  FaChartBar,
  FaEdit,
  FaTrash,
} from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
export const icons = {
  home: FaHome,
  products: FaBox,
  employees: FaUsers,
  tables: FaStore,
  delivery: FaTruck,
  logout: FaSignOutAlt,
  reports: FaChartBar,
  add: IoMdAdd,
  edit: FaEdit,
  delete: FaTrash,
} as const;

export type IconName = keyof typeof icons;
