import { FC, useEffect, useState } from 'react';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import data from './data.json';
import Icon from '../../components/Icon';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUs: FC = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errorMessages, setErrorMessages] = useState<Partial<FormState>>({});
  // const [confirmPopup, setConfirmPopup] = useState<boolean>(false);
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
      // Send email using EmailJS without attachment
      emailjs
        .send('service_fouvyws', 'template_eexz5kz', templateParams, 'gU6BimkgtWxvEZv0P')
        .then((response) => {
          console.log('Email sent successfully!', response);
          // setConfirmPopup(true);
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
        });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: 'url("/images/backgroundImages/contact-us.png")' }}
        className="h-[382px] w-full max-md:h-[448px]"
      >
        <div className='max-w-[1440px] m-auto'>
        <div className="pl-[140px] pt-[137px] max-md:pl-[34px] max-md:pt-[77px]">
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
        <div className="mt-6 hidden flex-col gap-4 max-md:flex">
          <Button
            name="Our Services"
            className={`m-auto h-[54px] w-[324px] items-center !justify-center bg-[#009462] px-[20px] py-[16px] max-md:flex`}
            onClick={() => navigate('/Services')}
          />
          <Button
            name="For Partners"
            className={`m-auto h-[54px] w-[324px] items-center !justify-center border border-white px-[20px] py-[16px] max-md:flex`}
            onClick={() => navigate('/for-partners')}
          />
        </div>
        </div>
      </div>
      <div className="m-auto mb-8 mt-16 flex w-full max-w-[1440px] justify-between px-[228px] max-lg:px-20 max-md:mt-9 max-md:flex-col max-md:px-[18px]">
        <div className="flex w-full flex-col max-md:items-center max-md:justify-center">
          <Typography
            content={data.contactUs.title}
            color="text-[#009462]"
            variant="font-bold"
            size="text-[32px]"
            className="max-md:text-center max-md:text-[24px]"
          />
          <Typography
            content={data.contactUs.subtitle}
            size="text-[16px]"
            className="max-w-[413px] max-md:hidden"
          />
          <Typography
            content={data.contactUs.mobileSubtitle}
            size="text-[16px]"
            className="hidden text-center font-[500] max-md:block"
          />
          <ul className="mt-4 flex flex-col gap-4">
            <li className="flex items-center gap-[6px] text-[14px] max-md:flex-col">
              <Icon name="phone" className="h-3 w-3 max-md:hidden" />
              <Icon name="roundedPhone" className="hidden h-6 w-6 max-md:block" />
              +4917647648942
            </li>
            <li className="flex items-center gap-[6px] text-[14px] max-md:flex-col">
              <Icon name="messageBox" className="h-3 w-3 max-md:hidden" />
              <Icon name="roundedMessage" className="hidden h-6 w-6 max-md:block" />
              info@giomedex.com
            </li>
            <li className="flex items-center gap-[6px] text-[14px] max-md:flex-col">
              <Icon name="location" className="h-3 w-3 max-md:hidden" />
              <Icon name="roundedLocation" className="hidden h-6 w-6 max-md:block" />
              Otto-Schmiedt Str. 43C, 04179 Leipzig, Germany
            </li>
          </ul>
        </div>
        <div className="flex w-full justify-center">
          <div className="mt-5 flex flex-wrap justify-end gap-3 max-md:flex-col max-md:justify-center">
            <div>
            <input
              type="text"
              placeholder="First Name*"
              name='firstName'
              value={formState.firstName}
              onChange={handleInputChange}
              className="h-[49px] w-[455px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none max-md:w-80"
            />
            {errorMessages.firstName && (
              <div className="text-red-500">{errorMessages.firstName}</div>
            )}
            </div>
            <div>
            <input
              type="text"
              placeholder="Last Name*"
              name='lastName'
              value={formState.lastName}
              onChange={handleInputChange}
              className="h-[49px] w-[455px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none max-md:w-80"
            />
            {errorMessages.lastName && <div className="text-red-500">{errorMessages.lastName}</div>}
            </div>
            <div>
            <input
              type="text"
              placeholder="Email*"
              name='email'
              value={formState.email}
              onChange={handleInputChange}
              className="h-[49px] w-[455px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none max-md:w-80"
            />
            {errorMessages.email && <div className="text-red-500">{errorMessages.email}</div>}
            </div>
            <div>
            <input
              type="number"
              placeholder="Phone"
              name='phone'
              value={formState.phone}
              onChange={handleInputChange}
              className="h-[49px] w-[455px] rounded border border-[#B5B5B5] pl-4 focus:border-[#00A79D] focus:outline-none max-md:w-80"
            />
            </div>
            <div>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleInputChange}
              placeholder="Your Message*"
              className="h-[98px] w-[455px] rounded border border-[#B5B5B5] pl-4 pt-4 focus:border-[#00A79D] focus:outline-none max-md:w-80"
            ></textarea>
            {errorMessages.message && <div className="text-red-500">{errorMessages.message}</div>}
            </div>
            <Button
              name="Send"
              className="flex h-[43px] w-[104px] items-center !justify-center bg-[#009462] max-md:w-full"
              onClick={sendEmail}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
