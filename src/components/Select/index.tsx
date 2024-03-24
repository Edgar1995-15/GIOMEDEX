import { FC, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';
import { ISelectProps } from '../../assets/types';
// import Icon from '../Icon';

interface ISelect {
  name: string;
  selectInfo: ISelectProps[];
  setSelectOpen: (e: string | null) => void;
  selectOpen: string | null;
}
interface IOpenSelectChildren {
  name: string;
  url: string;
}

const Select: FC<ISelect> = ({ name, selectInfo, setSelectOpen, selectOpen }) => {
  const [openSelectChildren, setOpenSelectChildren] = useState<IOpenSelectChildren | null>(null);

  const selectRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const childrenInfo = selectInfo.find((el) => el.title === openSelectChildren?.name)?.children;

  const onClick = (page: string, id: string) => {
    console.log(page, 'page', id);
    navigate(`/${page}?id=${id}`);
    setSelectOpen(null);
    setOpenSelectChildren(null);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setSelectOpen(null);
      setOpenSelectChildren(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full">
      <Button
        name={name}
        className="flex h-fit w-full text-nowrap max-xl:text-[14px]"
        icon="select"
        iconClassName="w-[24px] h-[24px] rotate-90"
        onClick={() => setSelectOpen(selectOpen === name ? null : name)}
      />
      {name === selectOpen && (
        <div
          className="absolute mt-[34px] h-fit  w-[308px] rounded-b bg-[#0B1521] p-[12px]"
          ref={selectRef}
        >
          {selectInfo.map((el, index) => (
            <div key={index}>
              <Button
                name={el.title}
                className={`${el.children && selectOpen === 'For Partners' && 'flex-row-reverse'}
                 w-full px-5 py-3 hover:bg-[#009462] hover:bg-opacity-70 max-xl:text-[14px]
                 ${el.title === openSelectChildren?.name && 'bg-[#009462]'}`}
                icon={el.children ? 'select' : undefined}
                iconClassName={`w-[24px] h-[24px] max-xl:h-[20px] max-xl:w-[20px] max-lg:w-[16px] max-lg:h-[16px]`}
                onClick={() =>
                  el.children
                    ? setOpenSelectChildren({ name: el.title, url: el.url })
                    : onClick(el.url, el.title)
                }
              />
            </div>
          ))}
          {!!childrenInfo && (
            <div
              className={`absolute left-[308px] top-0 h-fit w-[308px] rounded-b bg-[#0B1521] p-[12px]`}
            >
              {childrenInfo.map((el, index) => {
                return (
                  <Button
                    key={index}
                    name={el}
                    className={`w-full  px-5 py-3 hover:bg-[#009462]`}
                    onClick={() => {
                      onClick((openSelectChildren as IOpenSelectChildren).url, el);
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Select;
