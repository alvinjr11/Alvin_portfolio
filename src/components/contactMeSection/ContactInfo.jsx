import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="alvinmathew17@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 7510556693" Image={FiPhone} />
      <SingleInfo text="Alappuzha, Kerala" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;