/* Redux */
import { useDispatch, useSelector } from 'react-redux';
/*Router-DOM*/
import { Route, Routes, useParams } from 'react-router-dom';
/* scss */
import './assets/scss/index.scss';
/* components */
import { Table } from './components/Table/Table';
/* utils */
import { data } from './utils/data';
/* Actions-Creators */
import {
  setConditionsType,
  setProjectStatus,
  setProjectType,
  setTokenType,
  setVolumeStatus,
} from './store/actions-creators/filter.actions-creators';
import { CombineState, onFilterCell, onSortCell } from './types/types';

const ProjectPage = () => {
  const { id } = useParams();
  return <div className='project'>Project: {id}</div>;
};

const App = () => {
  const dispatch = useDispatch();
  const filtersObj = useSelector((state: CombineState) => state.filters);

  const onSort = (cell: onSortCell) => {
    let currentStatus: onSortCell = cell;
    if (filtersObj[cell].status && !filtersObj[cell].status.includes('-')) {
      currentStatus = `-${cell}` as onSortCell;
    }
    const sortObject = {
      project: setProjectStatus(currentStatus),
      volume: setVolumeStatus(currentStatus),
    };
    dispatch(sortObject[cell]);
  };

  const onFilter = (cell: onFilterCell, value: string) => {
    const filterObject = {
      project: setProjectType(value),
      token: setTokenType(value),
      conditions: setConditionsType(value),
    };
    dispatch(filterObject[cell]);
  };

  const onBuy = (id: number) => {
    console.log(`You bought product with number ${id}`);
  };

  return (
    <div className='layout'>
      <Routes>
        <Route
          path='/'
          element={
            <Table
              data={data}
              sortCell={'project'}
              filtersObj={filtersObj}
              onFilter={onFilter}
              onSort={onSort}
              onBuy={onBuy}
            />
          }
        />
        <Route path='project/:id' element={<ProjectPage />} />
      </Routes>
    </div>
  );
};

export default App;
