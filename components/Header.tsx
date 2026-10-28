import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { Link, useLocation } from "react-router";
import { cn } from "~/lib/utils";

interface Props {

    title: string;
    description: string;
    catText?: string;
    ctaUrl?: string;
}

const Header = ({title, description, catText, ctaUrl}: Props) => {
const location = useLocation();
    return (
      <header className="header">

        <article>
            <h1 className={cn("text-dark-100",
               location.pathname === '/' ? 'text-2xl md:text-4xl font-bold' : 'text-xl md:text-2xl font-semibold ')}>{title}</h1>
            <p className={cn("text-gray-100 font-normal", location.pathname === '/' ? 'text-base md:text-lg' : 'text-sm md:text-lg ')}>{description}</p>
        </article>
      {ctaUrl && catText && (
  <Link
            to={ctaUrl}
            className="!bg-[#256ff1] !text-white !h-11 !w-full md:!w-[240px] !rounded-lg !flex !items-center !justify-center !gap-1.5 !shadow-none hover:!bg-[#256ff1]"
          >
            <img
              src="/assets/icons/plus.svg"
              alt="Plus"
              className="size-5"
            />
            <span className="p-16-semibold text-white">
              {catText}
            </span>
          </Link>
        )}
      </header>

    ) 
}

export default Header