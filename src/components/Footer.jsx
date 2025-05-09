import {
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const [formData, setFormData] = useState({ email: ""});
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Enter an email.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
      setSuccess(true);
      setFormData({ email: "" });
    }
    else{
      setSuccess(false);
    }
  };

  return (
    <>
      <footer className="mx-auto w-full max-w-[1300px] px-4">
        <div
          data-aos="fade-up"
          className="mx-auto mb-3 w-full max-w-[1300px] rounded-4xl bg-linear-to-b from-stone-900/65 to-stone-900/75 p-4 text-white"
        >
          <div className="space-y-3">
            <div className="flex flex-col items-start rounded-3xl bg-linear-to-b from-stone-800/30 to-stone-800/65 p-4 lg:w-[800px]">
              <Mail className="mb-2 ml-3 min-w-[24px] text-sky-400" size={24} />
              <a
                href="#"
                className="text-md satoshireg ml-3 hover:text-orange-400 hover:underline md:text-base"
              >
                synergy@email.com
              </a>
            </div>
            <div className="flex flex-col items-start rounded-3xl bg-linear-to-b from-stone-800/30 to-stone-800/65 p-4 lg:w-[800px]">
              <Phone
                className="mb-2 ml-3 min-w-[24px] text-sky-400"
                size={24}
              />
              <a
                href="#"
                className="text-md satoshireg ml-3 hover:text-orange-400 hover:underline md:text-base"
              >
                431-0416
              </a>
            </div>
            <div className="flex flex-col items-start rounded-3xl bg-linear-to-b from-stone-800/30 to-stone-800/65 p-4 lg:w-[800px]">
              <MapPin
                className="mb-2 ml-3 min-w-[24px] text-sky-400"
                size={24}
              />
              <a
                href="#"
                className="text-md satoshireg ml-3 break-words hover:text-orange-400 hover:underline md:text-base"
              >
                CvSU-Imus, Palico IV, Imus City, CAV, Philippines
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="mx-auto mb-15 w-full max-w-[1300px] rounded-4xl bg-linear-to-b from-stone-900/65 to-stone-900/75 p-4"
        >
          <div className="mb-4 text-center">
            <p className="text-md unbounded mb-4 text-sky-400">Follow us:</p>
            <div className="flex justify-center gap-4">
              {[
                { icon: Github, link: "https://github.com/MGChristian/portfolio" },
                { icon: Facebook, link: "https://www.facebook.com/Christian.Gutierrez.1211" },
                { icon: Instagram, link: "https://www.instagram.com/gutierrezchristianm?igsh=MWk5cWt5cWJ2NnFpeA==" },
                { icon: FaXTwitter, link: "https://x.com/VincentCuevas09" },
              ].map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-stone-600 p-3 transition duration-300 ease-in-out hover:bg-white"
                >
                  <Icon
                    className="text-white transition hover:text-black"
                    size={20}
                  />
                </a>
              ))}
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-6 lg:mt-10 flex flex-col items-center justify-center gap-2 lg:w-1/2 lg:flex-row"
          >
            <div className="h-5 w-full lg:absolute -mt-2 lg:-mt-10 lg:mb-5 lg:h-10 text-center">
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
              {success && (
              <p className="text-green-500 text-sm">
                Subsciption success!
              </p>
              )}
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Email"
              className="flex w-full rounded-2xl border border-stone-500 bg-stone-800/50 px-4 py-3 text-white focus:border-orange-400 focus:outline-none lg:w-[200px]"
            />
            <button
              type="submit"
              className="unbounded w-full cursor-pointer rounded-2xl bg-sky-400 px-4 py-3 text-black transition hover:bg-sky-300 lg:w-[270px]">
              Subscibe for newsletter
            </button>
          </form>
        </div>
      </footer>
    </>
  );
}
