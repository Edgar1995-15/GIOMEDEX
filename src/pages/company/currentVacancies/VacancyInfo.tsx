import React, { FC, useState, useRef } from 'react';
import Button from '../../../components/Button';
import data from '../data.json';
import Typography from '../../../components/Typography';
import emailjs from '@emailjs/browser';

const VacancyInfo: FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState<File | null>(null); // State to store selected file
  const [attachmentName, setAttachmentName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null); // Ref to input element

  const handleAttachmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setAttachment(file);
    setAttachmentName(file?.name || '');
  };

  const sendEmail = () => {
    const templateParams:any = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };
  
    // If attachment is not null, include it in the templateParams as base64
    if (attachment) {
      const reader = new FileReader();
      reader.readAsDataURL(attachment);
      reader.onloadend = () => {
        // Convert the attachment to base64 and include it in the templateParams
        templateParams.attachment = reader.result;
        
        // Send email using EmailJS
        emailjs
          .send('service_fouvyws', 'template_eexz5kz', templateParams, 'gU6BimkgtWxvEZv0P')
          .then((response) => {
            console.log('Email sent successfully!', response);
            // Add any success message or redirect to a thank you page
          })
          .catch((error) => {
            console.error('Email sending failed:', error);
            // Handle error, show error message, etc.
          });
      };
    } else {
      // Send email using EmailJS without attachment
      emailjs
        .send('service_fouvyws', 'template_eexz5kz', templateParams, 'gU6BimkgtWxvEZv0P')
        .then((response) => {
          console.log('Email sent successfully!', response);
          // Add any success message or redirect to a thank you page
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          // Handle error, show error message, etc.
        });
    }
  };
  

  return (
    <div>
      <div className="mt-8">
        <Typography
          content={data.biostatistician.title}
          size="text-[32px]"
          color="text-[#00A79D]"
          className="!font-[500] max-md:text-[20px]"
        />
        <Typography
          content={data.biostatistician.location}
          className="mt-3 max-md:text-[14px] max-md:text-[#B5B5B5]"
        />
        <Typography
          content={data.biostatistician.position}
          className="max-md:text-[14px] max-md:text-[#B5B5B5]"
        />
      </div>
      <div className="mt-6">
        <Typography content={data.responsibilities.title} color="text-[#00A791]" />
        <ul className="mt-5 list-inside list-disc max-md:list-none">
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
        <Typography
          content={data.requirements.title}
          color="text-[#00A791]"
          className="text-justify"
        />
        <ul className="mt-5 list-inside list-disc max-md:list-none">
          <li>
            <Typography content={data.requirements.text1} className="inline text-justify" />
          </li>
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
      <div className="mt-6 max-md:hidden">
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
      <div className="mt-6 max-md:hidden">
        <Typography content={data.vacancyBenefits.description} className="text-justify" />
      </div>
      <div className="m-auto mt-[83px] max-w-[773px]">
        <p className="text-[24px] font-[500] text-[#00A791]">Apply Here</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="Name*"
            className="h-[49px] w-[380px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none max-md:w-80"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name*"
            className="h-[49px] w-[380px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none max-md:w-80"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email*"
            className="h-[49px] w-[380px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none max-md:w-80"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            className="h-[49px] w-[380px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none max-md:w-80"
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            name=""
            placeholder="Availability*"
            className="h-[120px] w-full rounded border border-[#B5B5B5] pl-4 pt-4 focus:border-[#00A79D] focus:outline-none max-md:w-80"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="mt-4 flex justify-between max-md:flex-col-reverse max-md:gap-3">
          <button
            onClick={() => fileInputRef.current && fileInputRef.current.click()} // Trigger file input click
            className="flex items-center rounded border border-[#00A79D] px-5 py-3 !text-[#00A791] max-md:w-full"
          >
            <img src="/images/icons/attachments.svg" alt="Attachment Icon" /> Attachments
          </button>
          <Button
            name="Apply now"
            onClick={sendEmail}
            className="bg-[#009462] px-5 py-3 hover:bg-[#008054] max-md:w-full"
          />
        </div>
        <div className='text-start mt-2'>{attachmentName}</div>
      </div>
      <input
        type="file"
        onChange={handleAttachmentChange}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
    </div>
  );
};

export default VacancyInfo;
