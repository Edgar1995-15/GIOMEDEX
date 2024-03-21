import { FC } from 'react';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import data from './data.json';
import Icon from '../../components/Icon';

const ContactUs: FC = () => {
  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: 'url("/images/backgroundImages/quality-policy-hero-bg.png")' }}
        className="h-[382px] w-full bg-slate-500 bg-opacity-85 bg-cover bg-center"
      >
        <div className="pl-[140px] pt-[137px]">
          <Typography
            content={data.hero.title}
            color="text-white"
            size="text-[32px]"
            variant="font-bold"
          />
          <Typography
            content={data.hero.subtitle}
            color="text-white"
            size="text-[32px]"
            variant="font-bold"
          />
        </div>
      </div>
      <div className="m-auto mb-8 mt-16 flex w-full max-w-[1440px] px-[228px]">
        <div className="flex w-full flex-col">
          <Typography
            content={data.contactUs.title}
            color="text-[#009462]"
            variant="font-bold"
            size="text-[32px]"
          />
          <Typography
            content={data.contactUs.subtitle}
            size="text-[16px]"
            className="max-w-[413px]"
          />
          <ul className="mt-4 flex flex-col gap-4">
            <li className="flex items-center gap-[6px] text-[14px]">
              <Icon name="phone" className="h-3 w-3" />
              +00 000 000 000 00
            </li>
            <li className="flex items-center gap-[6px] text-[14px]">
              <Icon name="messageBox" className="h-3 w-3" />
              info@giomedex.com
            </li>
            <li className="flex items-center gap-[6px] text-[14px]">
              <Icon name="location" className="h-3 w-3" />
              Lore-ipsumipsu Str. 00A, 00000 Leipzig,Germany
            </li>
            <li className="flex items-center gap-[6px] text-[14px]">
              <Icon name="location" className="h-3 w-3" />
              Loremips 00A apt. 00,0000 Yerevan,Armenia
            </li>
          </ul>
        </div>
        <div className="flex w-full justify-center">
          <div className="mt-5 flex flex-wrap justify-end gap-3">
            <input
              type="text"
              placeholder="First Name*"
              className="h-[49px] w-[455px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="h-[49px] w-[455px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Email*"
              className="h-[49px] w-[455px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone"
              className="h-[49px] w-[455px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none"
            />
            <textarea
              name=""
              placeholder="Your Message*"
              className="h-[98px] w-[455px] rounded border border-[#B5B5B5] pl-4 pt-4 focus:border-[#00A79D] focus:outline-none"
            ></textarea>
            <Button
              name="Send"
              className="flex h-[43px] w-[104px] items-center !justify-center bg-[#009462]"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
