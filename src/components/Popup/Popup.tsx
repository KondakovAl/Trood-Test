import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import {
  CombineState,
  Filters,
  onFilterCell,
  PopupData,
  PopupType,
} from '../../types/types';

interface PopupProps {
  popupData?: PopupData;
  type: PopupType;
  onFilter: (cell: onFilterCell, value: string) => void;
}

const Popup = ({ popupData, type, onFilter }: PopupProps) => {
  const filters = useSelector((state: RootState) => state.filters);

  return (
    <div className='popup'>
      {type === 'input' && (
        <input
          className='popup__input'
          placeholder='search token...'
          value={filters.token.type}
          onChange={(evt) => onFilter('token', evt.target.value.toUpperCase())}
        />
      )}
      {type === 'list' && (
        <ul className='popup__list'>
          {popupData?.data.map((item, index) => (
            <li className='popup__list-item' key={index}>
              <label className='popup__label'>
                <input
                  className='popup__radio-real'
                  type='radio'
                  name={popupData.type}
                  onChange={() =>
                    onFilter(popupData.type as onFilterCell, item.name)
                  }
                  checked={
                    filters[popupData.type as onFilterCell].type === item.name
                  }
                />
                <span className='popup__radio-custom' />
                {item.name}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Popup };
