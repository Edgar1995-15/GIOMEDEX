import { FC } from 'react';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import data from './data.json';
import Icon from '../../components/Icon';
import { useNavigate } from 'react-router-dom';

const ContactUs: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: 'url("/images/backgroundImages/contact-us.png")' }}
        className="h-[382px] w-full max-md:h-[448px]"
      >
        <div className="pl-[140px] pt-[137px] max-md:pl-[34px] max-md:pt-[77px]">
          <Typography
            content={data.hero.title}
            color="text-white"
            size="text-[32px]"
            variant="font-bold"
            className="max-md:text-[28px]"
          />
          <Typography
            content={data.hero.subtitle}
            color="text-white"
            size="text-[32px]"
            variant="font-bold"
          />
        </div>
        <div className="mt-6 hidden gap-4 max-md:flex flex-col">
          <Button
            name="Our Services"
            className={`h-[54px] w-[324px] items-center !justify-center bg-[#009462] px-[20px] py-[16px] max-md:flex m-auto`}
            onClick={() => navigate('/Services')}
          />
          <Button
            name="For Partners"
            className={`h-[54px] w-[324px] items-center !justify-center border border-white px-[20px] py-[16px] max-md:flex m-auto`}
            onClick={() => navigate('/for-partners')}
          />
        </div>
      </div>
      <div className="m-auto mb-8 mt-16 flex justify-between w-full max-w-[1440px] px-[228px] max-md:flex-col max-md:mt-9 max-md:px-[18px] max-lg:px-20">
        <div className="flex w-full flex-col max-md:justify-center max-md:items-center">
          <Typography
            content={data.contactUs.title}
            color="text-[#009462]"
            variant="font-bold"
            size="text-[32px]"
            className='max-md:text-[24px] max-md:text-center'
          />
          <Typography
            content={data.contactUs.subtitle}
            size="text-[16px]"
            className="max-w-[413px] max-md:hidden"
          />
          <Typography
            content={data.contactUs.mobileSubtitle}
            size="text-[16px]"
            className="hidden max-md:block font-[500] text-center"
          />
          <ul className="mt-4 flex flex-col gap-4">
            <li className="flex items-center gap-[6px] text-[14px] max-md:flex-col">
              <Icon name="phone" className="h-3 w-3 max-md:hidden" />
              <Icon name='roundedPhone' className='hidden max-md:block h-6 w-6' />
              +00 000 000 000 00
            </li>
            <li className="flex items-center gap-[6px] text-[14px] max-md:flex-col">
              <Icon name="messageBox" className="h-3 w-3 max-md:hidden" />
              <Icon name='roundedMessage' className='hidden max-md:block h-6 w-6' />
              info@giomedex.com
            </li>
            <li className="flex items-center gap-[6px] text-[14px] max-md:flex-col">
              <Icon name="location" className="h-3 w-3 max-md:hidden" />
              <Icon name='roundedLocation' className='hidden max-md:block h-6 w-6' />
              Lore-ipsumipsu Str. 00A, 00000 Leipzig,Germany
            </li>
            <li className="flex items-center gap-[6px] text-[14px] max-md:flex-col">
              <Icon name="location" className="h-3 w-3 max-md:hidden" />
              <Icon name='roundedLocation' className='hidden max-md:block h-6 w-6' />
              Loremips 00A apt. 00,0000 Yerevan,Armenia
            </li>
          </ul>
        </div>
        <div className="flex w-full justify-center">
          <div className="mt-5 flex flex-wrap justify-end gap-3 max-md:justify-center max-md:flex-col">
            <input
              type="text"
              placeholder="First Name*"
              className="h-[49px] w-[455px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none max-md:w-80"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="h-[49px] w-[455px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none max-md:w-80"
            />
            <input
              type="text"
              placeholder="Email*"
              className="h-[49px] w-[455px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none max-md:w-80"
            />
            <input
              type="text"
              placeholder="Phone"
              className="h-[49px] w-[455px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none max-md:w-80"
            />
            <textarea
              name=""
              placeholder="Your Message*"
              className="h-[98px] w-[455px] rounded border border-[#B5B5B5] pl-4 pt-4 focus:border-[#00A79D] focus:outline-none max-md:w-80"
            ></textarea>
            <Button
              name="Send"
              className="flex h-[43px] w-[104px] items-center !justify-center bg-[#009462] max-md:w-full"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
