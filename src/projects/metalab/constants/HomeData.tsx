import BgAthletic from "@/assets/metalab/athletic-bg.jpg";
import BgHeadspace from "@/assets/metalab/headspace-bg.webp";
import BgPitch from "@/assets/metalab/pitch-bg.webp";

export const MenuItems: Record<string, Record<string, string>> = {
  pitch: {
    id: "pitch",
    title: "Pitch",
    subtitle:
      "Conceiving presentation software that's collaborative and east to use.",
    extra: "Brands, Product Design",
    thumbnail: BgPitch,
    alt: "Pitch menu item faded background",
  },
  headspace: {
    id: "headspace",
    title: "Headspace",
    subtitle: "Moving beyond meditaion with a product mindset.",
    extra: "Web Design",
    thumbnail: BgHeadspace,
    alt: "Headspace menu item faded background",
  },
  theAthletic: {
    id: "the_athletic",
    title: "The Athletic",
    subtitle:
      "Re-designing in-depth reporting and breaking sports news to serve every fan.",
    extra: "UX Reserach, Product Design",
    thumbnail: BgAthletic,
    alt: "Athletic menu item faded background",
  },
};
