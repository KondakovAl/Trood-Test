/* Types */
import { colors } from '../types/types';

export const getColor = (color: string, dot?: boolean) => {
    if (dot) {
      switch (color) {
        case 'green':
          return colors.GREEN;
        case 'yellow':
          return colors.YELLOW;
        case 'red':
          return colors.RED;
      }
    } else {
      switch (color) {
        case 'green':
          return colors.LIGHT_GREEN;
        case 'yellow':
          return colors.LIGHT_YELLOW;
        case 'red':
          return colors.LIGHT_RED;
      }
    }
  };