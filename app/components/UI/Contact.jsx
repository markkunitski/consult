import { Label, TextInput, Textarea } from "flowbite-react";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <section id="contact" className="section px-8 md:px-16 xl:px-24">
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="w-full md:w-5/12 mb-12 upper-text">
            <span>Contact us</span>
          <h2 className="text-mytext mb-6">What are you waiting for? 🤗</h2>
          <p className="text-mysec">
            Companies? Tourism? Private Events? We are here for you YOU. ARE.
            WELCOME.
          </p>
          <a
            href="mailto:office@justescape-austria.com"
            className="link mt-6 inline-block"
          >
            office@justescape-austria.com
          </a>
        </div>
        <form className="flex flex-col w-full  md:w-5/12">
          <div className="block">
            <Label className="text-mytext" htmlFor="name" value="Full Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Name Surname"
            required
          />
          <div className="mt-4 block">
            <Label
              className="text-mytext"
              htmlFor="email4"
              value="Your email"
            />
          </div>
          <TextInput
            id="email4"
            type="email"
            rightIcon={HiMail}
            placeholder="name@flowbite.com"
            required
          />
          <div className=" mt-4 block">
            <Label
              className="text-mytext"
              htmlFor="comment"
              value="Your message"
            />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            required
            rows={4}
          />
          <button className="btn bg-mymain mt-6" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
