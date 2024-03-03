import { FC } from 'react';

import Button from '../Button';
// import Icon from '../Icon';

interface ISelect {
  name: string;
}

const Select: FC<ISelect> = ({ name }) => {
  return (
    <div>
      <Button
        name={name}
        className="h-fit w-fit"
        icon="select"
        iconClassName="w-[24px] h-[24px] rotate-90"
      />
    </div>
  );
};

export default Select;
