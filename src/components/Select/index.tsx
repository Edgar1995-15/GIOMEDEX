import { FC, useEffect, useState } from 'react';

import Button from '../Button';
import { ISelectProps } from '../../assets/typea';
// import Icon from '../Icon';


interface ISelect {
  name: string;
  selectInfo: ISelectProps[];
  setSelectOpen: Function;
  selectOpen: string | null;
}

const Select: FC<ISelect> = ({ name , selectInfo, setSelectOpen, selectOpen}) => {
  const [openSelectChildren, setOpenSelectChildren ] = useState<string | null>(null);
  const childrenInfo = selectInfo.find((el) => el.title === openSelectChildren)?.children;

  useEffect(() => {
    if(selectOpen === null) {
      setOpenSelectChildren(null);
    }
  },[selectOpen])
  
  return (
    <div className='relative'>
      <Button
        name={name}
        className="flex flex-nowrap h-fit w-full"
        icon="select"
        iconClassName="w-[24px] h-[24px] rotate-90"
        onClick={() => setSelectOpen(selectOpen === name ? null : name)}
      />
      {
        name === selectOpen && (
          <div className='absolute w-[308px] h-fit  mt-[34px] bg-[#0B1521] p-[12px] rounded-b'>
          {
            selectInfo.map((el, index) => (
            <div 
              key={index}
            >
              <Button 
                name={el.title} 
                className={`${el.children && selectOpen === 'For Partners' && "flex-row-reverse"}
                 w-full px-5 py-3 hover:bg-[#009462] hover:bg-opacity-70
                 ${ el.title === openSelectChildren && 'bg-[#009462]' }`} 
                icon={ el.children ?'select': undefined  }  
                iconClassName={`w-[24px] h-[24px]`}
                onClick={() => el.children && setOpenSelectChildren(el.title)}
                />
            </div>
            ))
          }
           {
              !!childrenInfo && (
                <div className={`absolute top-0 left-[308px] w-[308px] h-fit bg-[#0B1521] p-[12px] rounded-b`} >
                  {

                    childrenInfo.map((el, index) => {
                      console.log(222);
                      
                      return (
                          <Button
                          key={index}
                          name={el} 
                          className={`w-full  px-5 py-3 hover:bg-[#009462]`}
                          onClick={() => {}}
                          />
                        )
                    })
                  }
              </div>
              )
            }
        </div>
        )
      }
    </div>
  );
};

export default Select;
