import { SocialLinks } from "@/components/common/social-links";
import { LANGUAGE_OPTIONS, UTILITY_LINKS } from "@/data/navigation.constants";
import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  LanguageItem,
  LanguageOptionRow,
  LanguageWrap,
  UtilityBarShell,
  UtilityDivider,
  UtilityInner,
  UtilityLeft,
  UtilityLink,
  UtilityLinkRow,
  UtilityRight
} from "./header.styles";

export function UtilityBar() {
  const headerCopy = SITE_COPY.header;

  return (
    <UtilityBarShell>
      <UtilityInner>
        <UtilityLeft>
          <LanguageWrap aria-label={toSentenceCase(headerCopy.languageOptionsAriaLabel)}>
            {LANGUAGE_OPTIONS.map((option, index) => (
              <LanguageOptionRow key={option.code}>
                <LanguageItem $active={option.isActive}>
                  <img src={option.icon} alt={toSentenceCase(option.label)} />
                  <span>{option.code}</span>
                </LanguageItem>
                {index < LANGUAGE_OPTIONS.length - 1 && (
                  <UtilityDivider aria-hidden="true">|</UtilityDivider>
                )}
              </LanguageOptionRow>
            ))}
          </LanguageWrap>
          <SocialLinks variant="compact" />
        </UtilityLeft>
        <UtilityRight aria-label={toSentenceCase(headerCopy.utilityNavigationAriaLabel)}>
          {UTILITY_LINKS.map((link, index) => (
            <UtilityLinkRow key={link.label}>
              <UtilityLink href={link.href}>{link.label}</UtilityLink>
              {index < UTILITY_LINKS.length - 1 && (
                <UtilityDivider aria-hidden="true">|</UtilityDivider>
              )}
            </UtilityLinkRow>
          ))}
        </UtilityRight>
      </UtilityInner>
    </UtilityBarShell>
  );
}
