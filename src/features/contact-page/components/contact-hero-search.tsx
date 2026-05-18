import { Search } from "lucide-react";
import {
  ContactHeroSearchIcon,
  ContactHeroSearchInput,
  ContactHeroSearchRoot
} from "../styles/contact-hero-search.styles";

type ContactHeroSearchProps = {
  ariaLabel: string;
  placeholder: string;
};

export function ContactHeroSearch({ ariaLabel, placeholder }: ContactHeroSearchProps) {
  return (
    <ContactHeroSearchRoot role="search">
      <ContactHeroSearchIcon aria-hidden="true">
        <Search />
      </ContactHeroSearchIcon>
      <ContactHeroSearchInput aria-label={ariaLabel} placeholder={placeholder} type="search" />
    </ContactHeroSearchRoot>
  );
}
