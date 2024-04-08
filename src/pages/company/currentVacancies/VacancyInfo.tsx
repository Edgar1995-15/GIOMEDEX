import React, { FC, useState, useRef } from 'react';
import Button from '../../../components/Button';
import data from '../data.json';
import Typography from '../../../components/Typography';
import emailjs from '@emailjs/browser';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const VacancyInfo: FC = () => {
  const [formState, setFormState] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [attachment, setAttachment] = useState<File | null>(null);
  const [attachmentName, setAttachmentName] = useState<string>('');
  const [errorMessages, setErrorMessages] = useState<Partial<FormState>>({});
  const [globalError, setGlobalError] = useState<string>('');
  const [confirmPopup, setConfirmPopup] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAttachmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setAttachment(file);
    setAttachmentName(file?.name || '');
  };

  const validateEmail = (input: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const sendEmail = () => {
    const templateParams: any = {
      ...formState
    };

    const newErrorMessages: Partial<FormState> = {};

    // Validate required fields
    if (!formState.firstName || !formState.lastName || !formState.message || !formState.email) {
      newErrorMessages.firstName = !formState.firstName ? 'Please enter your first name.' : '';
      newErrorMessages.lastName = !formState.lastName ? 'Please enter your last name.' : '';
      newErrorMessages.message = !formState.message ? 'Please enter a message.' : '';
      newErrorMessages.email = !formState.email ? 'Please enter a valid email adress.' : '';
      setErrorMessages(newErrorMessages);
      return;
    }

    if (!validateEmail(formState.email)) {
      newErrorMessages.email = 'Please enter a valid email address.';
      setErrorMessages(newErrorMessages);
      return;
    }

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
            setConfirmPopup(true);
          })
          .catch((error) => {
            console.error('Email sending failed:', error);
            setGlobalError(error.text);
          });
      };
    } else {
      // Send email using EmailJS without attachment
      emailjs
        .send('service_fouvyws', 'template_eexz5kz', templateParams, 'gU6BimkgtWxvEZv0P')
        .then((response) => {
          console.log('Email sent successfully!', response);
          setConfirmPopup(true);
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
        });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
    setErrorMessages({
      ...errorMessages,
      [name]: ''
    });
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
      <div className="relative m-auto mt-[83px] max-w-[773px]">
        {confirmPopup && (
          <div className="absolute left-1/2 top-1/2 h-[210px] w-[404px] -translate-x-1/2 -translate-y-1/2 transform bg-white shadow-md max-md:w-[288px]">
            <div className="flex flex-col items-center justify-center px-14 py-6 max-md:px-8">
              <Typography
                content={data.confirm.title}
                color="text-[#009462]"
                size="text-[18px]"
                className="text-center !font-[600]"
              />
              <Typography
                content={data.confirm.text}
                color="text-[#595959]"
                size="text-[14px]"
                className="pt-2 text-center"
              />
              <Button
                name="Ok"
                className="mt-9 flex h-[43px] w-[125px] items-center !justify-center rounded-md bg-[#009462] max-md:mt-5"
                onClick={() => {
                  setConfirmPopup(false);
                }}
              />
            </div>
          </div>
        )}
        <p className="text-[24px] font-[500] text-[#00A791]">Apply Here</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <div>
            <input
              type="text"
              placeholder="Name*"
              name="firstName"
              value={formState.firstName}
              className={`h-[49px] w-[380px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none max-md:w-80 ${errorMessages.firstName ? 'border-red-500' : ''}`}
              onChange={handleInputChange}
            />
            {errorMessages.firstName && (
              <div className="text-red-500">{errorMessages.firstName}</div>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name*"
              name="lastName"
              value={formState.lastName}
              className={`h-[49px] w-[380px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none max-md:w-80 ${errorMessages.lastName ? 'border-red-500' : ''}`}
              onChange={handleInputChange}
            />
            {errorMessages.lastName && <div className="text-red-500">{errorMessages.lastName}</div>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Email*"
              name="email"
              value={formState.email}
              className={`h-[49px] w-[380px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none max-md:w-80 ${errorMessages.email ? 'border-red-500' : ''}`}
              onChange={handleInputChange}
            />
            {errorMessages.email && <div className="text-red-500">{errorMessages.email}</div>}
          </div>
          <div>
            <input
              type="number"
              placeholder="Phone"
              name="phone"
              value={formState.phone}
              className="h-[49px] w-[380px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none max-md:w-80"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <textarea
              name="message"
              placeholder="Availability*"
              value={formState.message}
              className={`h-[120px] w-[100%] rounded border border-[#B5B5B5] pl-4 pt-4 focus:border-[#00A79D] focus:outline-none max-md:w-80 ${errorMessages.message ? 'border-red-500' : ''}`}
              onChange={handleInputChange}
            ></textarea>
            {errorMessages.message && <div className="text-red-500">{errorMessages.message}</div>}
          </div>
        </div>
        <div className="mt-4 flex justify-between max-md:flex-col-reverse max-md:gap-3">
          <button
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
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
        <div className="mt-2 text-start">{attachmentName}</div>
        {globalError && <span className="text-red-500">{globalError}</span>}
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
