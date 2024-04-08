import { FC, useState } from 'react';
import Icon from '../../../components/Icon';
import data from '../data.json';
import Typography from '../../../components/Typography';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

const Principles: FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMoreGio, setShowMoreGio] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="m-auto w-full max-w-[1440px] bg-white px-32 pt-12 max-md:px-[18px] max-md:pt-9"
      id="principles"
    >
      <div>
        <Typography
          content={data.principles.title}
          variant="font-bold"
          size="text-[30px]"
          color="text-[#00707E]"
        />
        <div className='mt-6 leading-4 text-[#595959]'><span className='font-bold'>Trust, Transparency, Flexibility, Quality:</span> At GIOMEDEX, our core values guide our interactions and drive our commitment to excellence. We prioritize trust, ensuring a transparent partnership that adapts to our clients' needs with flexibility, all while maintaining an unwavering focus on delivering quality work.</div>
      </div>
      <div className="mt-9 flex w-full justify-between gap-10 max-md:flex-col">
        <div>
          <div className="flex items-center gap-4">
            <Icon name="know-how" />
            <Typography
              content={data['know-how'].title}
              color="text-[#009462]"
              variant="font-bold"
            />
          </div>
          <div className="mt-4 flex max-w-[542px] flex-col gap-9 text-[#595959] max-md:gap-3">
            <Typography content={data['know-how'].content1} className="text-justify" />
            <Typography content={data['know-how'].content2} className="text-justify" />
            {!showMore && (
              <span
                className="hidden text-[#00946299] underline max-md:block"
                onClick={() => setShowMore(true)}
              >
                Read More
              </span>
            )}
            <Typography
              content={data['know-how'].content3}
              className={`text-justify ${showMore ? 'max-md:block' : 'max-md:hidden'}`}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 max-md:pt-9">
            <Icon name="talanted" />
            <Typography
              content={data.whyGiomedex.title}
              color="text-[#66CAC4]"
              variant="font-bold"
            />
          </div>
          <div className="mt-4 flex max-w-[542px] flex-col gap-9 text-[#595959] max-md:gap-3">
            <div className="text-justify">
              <span className="font-bold">Cost-Effective Solutions:</span>
              <span>
                We offer competitive rates that deliver maximum value without compromising on
                quality. For clients opting to work with R instead of SAS, we have implemented a
                major savings plan that allows them to achieve significant cost savings while still
                receiving top-notch service.
              </span>
            </div>
            <div className="text-justify">
              <span className="font-bold">Compliance and Security: </span>
              <span>
                We prioritize data protection regulations and maintain rigorous information security
                measures. With all necessary SOPs in place and multiple client audits under our
                belt, you can trust us to safeguard your data.
              </span>
            </div>
            <div className={`text-justify ${showMoreGio ? 'max-md:block' : 'max-md:hidden'}`}>
              <span className="font-bold">Flexible Contract Negotiations: </span>
              <span>
                We're known for our cooperative approach to contract negotiations, ensuring a smooth
                and mutually beneficial process.
              </span>
            </div>
            <div className={`text-justify ${showMoreGio ? 'max-md:block' : 'max-md:hidden'}`}>
              <span className="font-bold">Global Reach: </span>
              <span>
                With entities in the EU, US, Mexico and the Caucasus Region, we offer global
                expertise and support tailored to your needs.
              </span>
            </div>
            <div className={`text-justify ${showMoreGio ? 'max-md:block' : 'max-md:hidden'}`}>
              <span className="font-bold">Client Satisfaction: </span>
              <span>
                Our track record speaks for itself. References from our satisfied clients are
                available upon request, demonstrating our commitment to excellence and customer
                satisfaction.
              </span>
            </div>
            <div className={`text-justify ${showMoreGio ? 'max-md:block' : 'max-md:hidden'}`}>
              <span className="font-bold">Value Creation: </span>
              <span>
                By ensuring data accuracy, compliance with regulatory standards, and timely delivery
                of insights, we empower our clients to make informed decisions, accelerate drug
                development timelines, and ultimately improve patient outcomes.
              </span>
            </div>
            {!showMoreGio && (
              <span
                className="hidden text-[#00946299] underline max-md:block"
                onClick={() => setShowMoreGio(true)}
              >
                Read More
              </span>
            )}
          </div>
        </div>
      </div>
      <Button
        name="Our Services"
        onClick={() => navigate('/Services')}
        className="m-auto mt-9 hidden h-[46px] w-full items-center !justify-center bg-[#009462] max-md:flex"
      />
    </div>
  );
};

export default Principles;
