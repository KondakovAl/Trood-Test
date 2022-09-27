/*Redux*/
import { useDispatch, useSelector } from 'react-redux';
/*RouterDOM*/
import { Link } from 'react-router-dom';
/*Actions-creators*/
import {
  setClear,
  setProjectStatus,
  setProjectTypeAll,
  setTokenTypeAll,
  setVolumeStatus,
} from '../../store/actions-creators/filter.actions-creators';
import {
  openPopupConditions,
  openPopupProject,
  openPopupToken,
} from '../../store/actions-creators/popups.actions-creators';
/* Hooks */
import { useEffect, useState } from 'react';
/* Types */
import {
  CombineState,
  Filters,
  onFilterCell,
  onSortCell,
  sortCell,
  TableRows,
} from '../../types/types';
/* Utils */
import { getColor } from '../../utils/getColor';
import { popupProjects, popupConditions } from '../../utils/data';
import { getConvertedCondition } from '../../utils/getConvertedCondition';
/* Components */
import { Button } from '../Button/Button';
import { Popup } from '../Popup/Popup';
/* Icons */
import { ReactComponent as Arrow } from '../../assets/images/icon-arrow.svg';
import { ReactComponent as Top } from '../../assets/images/icon-top.svg';
import { ReactComponent as Bottom } from '../../assets/images/icon-bottom.svg';

interface TableProps {
  data: TableRows[];
  sortCell: sortCell;
  filtersObj: Filters;
  onSort: (cell: onSortCell) => void;
  onFilter: (cell: onFilterCell, value: string) => void;
  onBuy: (id: number) => void;
}

const Table = ({ data, onSort, onFilter, onBuy, sortCell }: TableProps) => {
  const [dataSave, setDataSave] = useState<TableRows[]>(data);
  const [activeRows, setActiveRows] = useState<number>(5);

  const filtersObj = useSelector((state: CombineState) => state.filters);
  const popups = useSelector((state: CombineState) => state.popups);

  const dispatch = useDispatch();

  const getSignCheck = (item: TableRows) => {
    if (filtersObj.conditions.type.includes('<')) {
      return (
        getConvertedCondition(item.conditions) <
        getConvertedCondition(filtersObj.conditions.type)
      );
    } else {
      return (
        getConvertedCondition(item.conditions) >
        getConvertedCondition(filtersObj.conditions.type)
      );
    }
  };

  useEffect(() => {
    if (sortCell.includes('project')) {
      dispatch(setProjectStatus(sortCell));
    }
    if (sortCell.includes('volume')) {
      dispatch(setVolumeStatus(sortCell));
    }
  }, []);

  useEffect(() => {
    const filtredArr = [...data];
    const newFiltredArr = filtredArr.filter((item) => {
      const projectCond = filtersObj.project.type
        ? item.status === filtersObj.project.type
        : true;
      const tokenCond = filtersObj.token.type
        ? item.type.includes(filtersObj.token.type)
        : true;
      const conditionCond = filtersObj.conditions.type
        ? getSignCheck(item)
        : true;
      if (projectCond && tokenCond && conditionCond) {
        return item;
      }
    });
    newFiltredArr.sort((a: TableRows, b: TableRows): number => {
      if (filtersObj.project.status === 'project') {
        return a.name > b.name ? 1 : -1;
      }
      if (filtersObj.project.status === '-project') {
        return a.name > b.name ? -1 : 1;
      }
      if (filtersObj.volume.status === 'volume') {
        return a.volume - b.volume;
      }
      if (filtersObj.volume.status === '-volume') {
        return b.volume - a.volume;
      }
      return 0;
    });
    setDataSave(newFiltredArr);
  }, [filtersObj]);

  return (
    <>
      <table className='table'>
        <thead className='table__head head'>
          <tr className='head__row'>
            <th className='head__row-item'>
              <div className='row-item__container'>
                <div
                  className={`row-item__icon-container ${
                    popups.isProjectPopupOpen ? `--active` : ''
                  }`}
                  onClick={() => dispatch(openPopupProject())}
                >
                  <Arrow />
                </div>
                <span
                  className={`row-item__text_all ${
                    !filtersObj.project.type ? '--active' : ''
                  }`}
                  onClick={() => dispatch(setProjectTypeAll())}
                >
                  All
                </span>
                <span
                  className='row-item__text'
                  onClick={() => onSort('project')}
                >
                  Project
                </span>
                <div className='row-item__icons-container'>
                  <div
                    className={`row-item__icon-vector ${
                      filtersObj.project.status === `project` ? '--active' : ''
                    }`}
                  >
                    <Top />
                  </div>
                  <div
                    className={`row-item__icon-vector ${
                      filtersObj.project.status === `-project` ? '--active' : ''
                    }`}
                  >
                    <Bottom />
                  </div>
                </div>
              </div>
              {popups.isProjectPopupOpen && (
                <Popup
                  type='list'
                  popupData={popupProjects}
                  onFilter={onFilter}
                />
              )}
            </th>
            <th className='head__row-item'>
              <div className='row-item__container'>
                <div
                  className={`row-item__icon-container  ${
                    popups.isTokenPopupOpen ? `--active` : ''
                  }`}
                  onClick={() => dispatch(openPopupToken())}
                >
                  <Arrow />
                </div>
                <span
                  className={`row-item__text_all ${
                    !filtersObj.token.type ? '--active' : ''
                  }`}
                  onClick={() => dispatch(setTokenTypeAll())}
                >
                  All
                </span>
                <span className='row-item__text'>Token type</span>
              </div>
              {popups.isTokenPopupOpen && (
                <Popup type='input' onFilter={onFilter} />
              )}
            </th>
            <th className='head__row-item'>
              <div className='row-item__container'>
                <div
                  className={`row-item__icon-container ${
                    popups.isConditionPopupOpen ? `--active` : ''
                  }`}
                  onClick={() => dispatch(openPopupConditions())}
                >
                  <Arrow />
                </div>
                <span className='row-item__text'>Conditions</span>
              </div>
              {popups.isConditionPopupOpen && (
                <Popup
                  type='list'
                  popupData={popupConditions}
                  onFilter={onFilter}
                />
              )}
            </th>
            <th className='head__row-item'>
              <div className='row-item__container'>
                <span
                  className='row-item__text'
                  onClick={() => onSort('volume')}
                >
                  Volume
                </span>
                <div className='row-item__icons-container'>
                  <div
                    className={`row-item__icon-vector ${
                      filtersObj.volume.status === `volume` ? '--active' : ''
                    }`}
                  >
                    <Top />
                  </div>
                  <div
                    className={`row-item__icon-vector ${
                      filtersObj.volume.status === `-volume` ? '--active' : ''
                    }`}
                  >
                    <Bottom />
                  </div>
                </div>
              </div>
            </th>
            <th className='head__row-item'> ROI </th>
            <th className='head__row-item'> Free float </th>
            <th className='head__row-item'> Insurance hedge </th>
            <th className='head__row-item'>
              <Button onClick={() => dispatch(setClear())}>
                Clear Filters
              </Button>
            </th>
          </tr>
        </thead>
        <tbody className='table__main main'>
          {dataSave.length !== 0 ? (
            <>
              {dataSave.slice(0, activeRows).map((item) => (
                <tr
                  className='main__row'
                  style={{ background: `${getColor(item.status)}` }}
                  key={item.id}
                >
                  <td className='main__row-item'>
                    <div className='row-item__container'>
                      <div
                        className='row-item__dot'
                        style={{ background: `${getColor(item.status, true)}` }}
                      />
                      {item.name}
                    </div>
                  </td>
                  <td className='main__row-item'>{item.type}</td>
                  <td className='main__row-item'>{item.conditions}</td>
                  <td className='main__row-item'>$ {item.volume}</td>
                  <td className='main__row-item'>{item.roi}%</td>
                  <td className='main__row-item'>{item.free}</td>
                  <td className='main__row-item'>{item.hedge}%</td>
                  <td className='main__row-item'>
                    <Link to={`project/${item.id}`}>
                      <Button className='table' onClick={() => onBuy(item.id)}>
                        Buy
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <tr className='main__row'>
              <td className='main__error'>Nothing was found</td>
            </tr>
          )}
        </tbody>
      </table>
      <>
        {activeRows < data.length && (
          <Button
            onClick={() => {
              setActiveRows(data.length);
            }}
            className='main'
          >
            Show All
          </Button>
        )}
      </>
    </>
  );
};

export { Table };
