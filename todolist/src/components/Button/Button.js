import Icon from '../Icon/Icon';
import { button } from './Button.module.scss';
import classNames from 'classnames';

const Button = ({
  type = 'button',
  content = null,
  onClick,
  className,
  title = '',
  shape,
  ...restProps
}) => {
  const composeClasses = classNames(button, className);

  return (
    <button type={type} onClick={onClick} className={composeClasses}>
      {content}
      {shape && <Icon title={title} shape={shape} />}
    </button>
  );
};

export default Button;