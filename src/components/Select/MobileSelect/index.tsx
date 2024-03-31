import { FC } from 'react';
import Button from '../../Button';
import { useNavigate } from 'react-router-dom';

interface IMobileSelect {
  name: string;
  openSelect: string | null;
  setOpenSelect: (e: string | null) => void;
  selectInfo: ISelectInfo;
  closeLayout: () => void;
}
interface ISelectInfo {
  children: string[];
  url: string;
}

const MobileSelect: FC<IMobileSelect> = ({
  name,
  openSelect,
  setOpenSelect,
  selectInfo,
  closeLayout
}) => {
  const navigate = useNavigate();

  const onClick = (page: string, id: string) => {
    console.log(page, 'page', id);
    closeLayout();
    setOpenSelect(null);
    navigate(`/${page}?id=${id}`);
  };

  return (
    <div className="h-fit w-full">
      <Button
        name={name}
        icon={name === openSelect ? 'arrowRightGreen' : 'select'}
        iconClassName={`${name === openSelect && 'rotate-90'}`}
        className={`flex h-[32px] w-full items-center rounded-[0px] border-b ${name === openSelect && 'border-[#009462]'}`}
        textStyle={`${name === openSelect ? 'text-[#009462]' : 'text-white'} text-[16px]`}
        onClick={() => setOpenSelect(openSelect === name ? null : name)}
      />
      {openSelect === name && (
        <div className="mt-[7px] pl-[13px]">
          <div>
            {selectInfo.children.map((el, index) => (
              <Button
                key={index}
                name={el}
                className={`flex h-[32px] w-full items-center rounded-[0px] border-b`}
                textStyle={`text-white text-[14px]`}
                onClick={() => onClick(selectInfo.url, el)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSelect;
