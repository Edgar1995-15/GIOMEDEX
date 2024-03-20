import { FC, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';
import { ISelectProps } from '../../assets/types';
// import Icon from '../Icon';

interface ISelect {
  name: string;
  selectInfo: ISelectProps[];
  setSelectOpen: Function;
  selectOpen: string | null;
}
interface IOpenSelectChildren {
  name:string;
  url: string
}

const Select: FC<ISelect> = ({ name, selectInfo, setSelectOpen, selectOpen }) => {
  const [openSelectChildren, setOpenSelectChildren] = useState<IOpenSelectChildren | null>(null);

  const selectRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const childrenInfo = selectInfo.find((el) => el.title === openSelectChildren?.name)?.children;

  const onClick = (page: string, id: string) => {
    console.log(page, 'page', id);
    navigate(`/${page}`);
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
        className="flex text-nowrap h-fit w-full"
        icon="select"
        iconClassName="w-[24px] h-[24px] rotate-90"
        onClick={() => setSelectOpen(selectOpen === name ? null : name)}
      />
      {
        name === selectOpen && (
          <div className='absolute w-[308px] h-fit  mt-[34px] bg-[#0B1521] p-[12px] rounded-b' ref={selectRef}>
          {
            selectInfo.map((el, index) => (
            <div 
              key={index}
            >
              <Button 
                name={el.title} 
                className={`${el.children && selectOpen === 'For Partners' && "flex-row-reverse"}
                 w-full px-5 py-3 hover:bg-[#009462] hover:bg-opacity-70
                 ${ el.title === openSelectChildren?.name && 'bg-[#009462]' }`} 
                icon={ el.children ?'select': undefined  }  
                iconClassName={`w-[24px] h-[24px]`}
                onClick={() =>
                  el.children ? setOpenSelectChildren({name: el.title, url: el.url}) : onClick(el.url, el.title)
                }
              />
            </div>
            ))
          }
           {
              !!childrenInfo && (
                <div className={`absolute top-0 left-[308px] w-[308px] h-fit bg-[#0B1521] p-[12px] rounded-b`} >
                  {

                    childrenInfo.map((el, index) => {                      
                      return (
                          <Button
                          key={index}
                          name={el} 
                          className={`w-full  px-5 py-3 hover:bg-[#009462]`}
                          onClick={() => {onClick((openSelectChildren as IOpenSelectChildren).url , el)}}
                          />
                        )
                    })
                  }
              </div>
              )
            }
        </div>
      )}
    </div>
  );
};

export default Select;
