import { useState } from 'react';
import Button from '../Button/Button';
import getThisWeek from '../../utils/getThisWeek';
import {
  selectBoxContainer,
  openedSelectBoxContainer,
  selectButton,
  selectBox,
  openedSelectBox,
  selectItem,
} from './SelectBox.module.scss';
import classNames from 'classnames';

const SelectBox = ({ className, setDateState }) => {
  const [isOpened, setIsOpened] = useState(false);

  const selectBoxContainerClasses = classNames(
    className,
    selectBoxContainer,
    isOpened && openedSelectBoxContainer
  );
  const selectBoxClasses = classNames(selectBox, isOpened && openedSelectBox);

  const handleButtonClick = () => {
    setIsOpened(!isOpened);
  };
  const handleItemClick = (e) => {
    setDateState(e.target.textContent);
    setIsOpened(false);
  };

  const thisWeek = getThisWeek();

  return (
    <div className={selectBoxContainerClasses}>
      <Button
        type="button"
        content="Date"
        className={selectButton}
        onClick={handleButtonClick}
        title={isOpened ? 'arrow down icon' : 'arrow up icon'}
        shape={isOpened ? 'arrowDown' : 'arrowUp'}
      />
      <ul className={selectBoxClasses}>
        {thisWeek.map((day) => {
          const key = day.split('day')[0];

          return (
            <li key={key} className={selectItem}>
              <button type="button" onClick={handleItemClick}>
                {day}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectBox;
