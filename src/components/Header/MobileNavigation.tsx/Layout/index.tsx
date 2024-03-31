import { FC, useState } from 'react';
import Button from '../../../Button';
import MobileSelect from '../../../Select/MobileSelect';
import { useNavigate } from 'react-router-dom';
import { mobileLayoutData } from '../../../../assets/data';
import Contact from '../../../Contact';

interface ILayout {
  openNav: boolean;
  setOpenNav: (e: boolean) => void;
}

const Layout: FC<ILayout> = ({ openNav, setOpenNav }) => {
  const [openSelect, setOpenSelect] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <>
      {openNav && (
        <div className="fixed left-0 top-0 flex h-full w-[79%] flex-col gap-[24px] bg-[#0B1521] px-[19px] py-[29px]">
          <div className="flex w-full justify-end">
            <Button
              icon="select"
              className={'rounded-full bg-[#027B55] p-[10px]'}
              onClick={() => {
                setOpenNav(!openNav);
                setOpenSelect(null);
              }}
              iconClassName="w-[24px] h-[24px] rotate-180"
            />
          </div>
          <div className="flex flex-col gap-[10px] px-[10px]">
            <MobileSelect
              name="Company"
              closeLayout={() => setOpenNav(!openNav)}
              openSelect={openSelect}
              setOpenSelect={setOpenSelect}
              selectInfo={mobileLayoutData['company']}
            />
            <MobileSelect
              name="Services"
              openSelect={openSelect}
              setOpenSelect={setOpenSelect}
              closeLayout={() => setOpenNav(!openNav)}
              selectInfo={mobileLayoutData['Services']}
            />
            <MobileSelect
              name="CDISC"
              openSelect={openSelect}
              setOpenSelect={setOpenSelect}
              closeLayout={() => setOpenNav(!openNav)}
              selectInfo={mobileLayoutData['CDISC']}
            />
            <MobileSelect
              name="Quality Policy"
              openSelect={openSelect}
              setOpenSelect={setOpenSelect}
              selectInfo={mobileLayoutData['Quality Policy']}
              closeLayout={() => setOpenNav(!openNav)}
            />
            <MobileSelect
              name="For Partners"
              openSelect={openSelect}
              setOpenSelect={setOpenSelect}
              selectInfo={mobileLayoutData['For Partners']}
              closeLayout={() => setOpenNav(!openNav)}
            />
            <Button
              icon="select"
              iconClassName="w-[24px] h-[24px]"
              name="Contact us"
              className="h-[32px] rounded-[0px] border-b"
              onClick={() => {
                setOpenNav(!openNav);
                navigate(`/contact`);
              }}
            />
          </div>
          <div className="absolute bottom-5 left-[50px]">
            <Contact />
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
