import { useState } from 'react';
import Button from '../../Button';
import Layout from './Layout';
const MobileNavigation = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        icon="menu-mobile"
        className={'bg-transparent'}
        onClick={() => setOpenNav(!openNav)}
        iconClassName="w-[40px] h-[40px]"
      />
      <Layout openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
};

export default MobileNavigation;
