import { FC } from 'react';
import Button from '../../../components/Button';
import data from '../data.json';
import Typography from '../../../components/Typography';

const VacancyInfo: FC = () => {
  return (
    <div>
      <div className="mt-8">
        <Typography
          content={data.biostatistician.title}
          size="text-[32px]"
          color="text-[#00A79D]"
          className="!font-[500] mobileMax:text-[20px]"
        />
        <Typography content={data.biostatistician.location} className="mt-3 mobileMax:text-[#B5B5B5] mobileMax:text-[14px]" />
        <Typography content={data.biostatistician.position} className='mobileMax:text-[#B5B5B5] mobileMax:text-[14px]' />
      </div>
      <div className="mt-6">
        <Typography content={data.responsibilities.title} color="text-[#00A791]" />
        <ul className="mt-5 list-inside list-disc mobileMax:list-none">
          <li>
            <Typography content={data.responsibilities.text1} className="inline text-justify" />
          </li>
          <li>
            <Typography content={data.responsibilities.text2} className="inline text-justify" />
          </li>
          <li>
            <Typography content={data.responsibilities.text3} className="inline text-justify" />
          </li>
          <li>
            <Typography content={data.responsibilities.text4} className="inline text-justify" />
          </li>
          <li>
            <Typography content={data.responsibilities.text5} className="inline text-justify" />
          </li>
          <li>
            <Typography content={data.responsibilities.text6} className="inline text-justify" />
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <Typography content={data.requirements.title} color="text-[#00A791]" className='text-justify' />
        <ul className="mt-5 list-inside list-disc mobileMax:list-none">
          <li><Typography content={data.requirements.text1} className="inline text-justify" /></li>
          <li>
            <Typography content={data.requirements.text1} className="inline text-justify" />
          </li>
          <li>
            <Typography content={data.requirements.text2} className="inline text-justify" />
          </li>
          <li>
            <Typography content={data.requirements.text3} className="inline text-justify" />
          </li>
          <li>
            <Typography content={data.requirements.text4} className="inline text-justify" />
          </li>
        </ul>
      </div>
      <div className="mt-6 mobileMax:hidden">
        <Typography content={data.vacancyBenefits.title} color="text-[#00A791]" />
        <ul className="mt-5 list-inside list-disc">
          <li>
            <Typography content={data.vacancyBenefits.text1} className="inline" />
          </li>
          <li>
            <Typography content={data.vacancyBenefits.text2} className="inline" />
          </li>
          <li>
            <Typography content={data.vacancyBenefits.text3} className="inline" />
          </li>
          <li>
            <Typography content={data.vacancyBenefits.text4} className="inline" />
          </li>
          <li>
            <Typography content={data.vacancyBenefits.text5} className="inline" />
          </li>
        </ul>
      </div>
      <div className="mt-6 mobileMax:hidden">
        <Typography content={data.vacancyBenefits.description} className='text-justify' />
      </div>
      <div className="m-auto mt-[83px] max-w-[773px]">
        <p className="text-[24px] font-[500] text-[#00A791]">Apply Here</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="Name*"
            className="h-[49px] w-[380px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none mobileMax:w-80"
          />
          <input
            type="text"
            placeholder="Last Name*"
            className="h-[49px] w-[380px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none mobileMax:w-80"
          />
          <input
            type="text"
            placeholder="Email*"
            className="h-[49px] w-[380px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none mobileMax:w-80"
          />
          <input
            type="text"
            placeholder="Phone"
            className="h-[49px] w-[380px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none mobileMax:w-80"
          />
          <textarea
            name=""
            placeholder="Availability*"
            className="h-[120px] w-full rounded border border-[#B5B5B5] pl-4 pt-4 focus:border-[#00A79D] focus:outline-none mobileMax:w-80"
          ></textarea>
        </div>
        <div className="mt-4 flex justify-between mobileMax:flex-col-reverse mobileMax:gap-3">
          <button
            onClick={() => {}}
            className="flex items-center rounded border border-[#00A79D] px-5 py-3 !text-[#00A791] mobileMax:w-full"
          >
            <img src="/images/icons/attachments.svg" /> Attachments
          </button>
          <Button name="Apply now" onClick={() => {}} className="bg-[#009462] px-5 py-3 hover:bg-[#008054] mobileMax:w-full" />
        </div>
      </div>
    </div>
  );
};

export default VacancyInfo;
